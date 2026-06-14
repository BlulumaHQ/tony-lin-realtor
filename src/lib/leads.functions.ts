import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadSchema = z
  .object({
    name: z.string().trim().min(1).max(100),
    email: z.string().trim().email().max(255),
    phone: z.string().trim().max(40).optional(),
    propertyAddress: z.string().trim().max(300).optional(),
    propertyType: z.enum(["Residential", "Commercial", "Land", "Not sure"]).optional(),
    interest: z.string().trim().max(100).optional(),
    message: z.string().trim().max(2000).optional(),
    source: z.enum(["valuation", "contact"]),
  })
  .superRefine((lead, context) => {
    if (lead.source === "valuation" && !lead.propertyAddress) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["propertyAddress"],
        message: "Property address is required",
      });
    }
  });

type LeadInput = z.infer<typeof leadSchema>;

function detail(label: string, value?: string) {
  return `${label}: ${value || "Not provided"}`;
}

async function sendEmail(apiKey: string, payload: Record<string, unknown>) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Email delivery failed (${response.status}): ${body}`);
  }
}

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input: LeadInput) => leadSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: lead, error } = await supabaseAdmin
      .from("leads")
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        property_address: data.propertyAddress || null,
        property_type: data.propertyType || null,
        interest: data.interest || null,
        message: data.message || null,
        source: data.source,
      })
      .select("id")
      .single();

    if (error || !lead) {
      console.error("Lead insert failed", error);
      throw new Error("We couldn't save your enquiry. Please call or email Tony directly.");
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      console.error("RESEND_API_KEY is not configured");
      return { success: true, emailSent: false };
    }

    const details = [
      detail("Source", data.source),
      detail("Name", data.name),
      detail("Email", data.email),
      detail("Phone", data.phone),
      detail("Property address", data.propertyAddress),
      detail("Property type", data.propertyType),
      detail("Interest", data.interest),
      detail("Message", data.message),
    ].join("\n");

    const deliveries = await Promise.allSettled([
      sendEmail(resendKey, {
        from: "Tony Lin Website <tony@tony-lin.ca>",
        to: ["tony@tony-lin.ca"],
        reply_to: data.email,
        subject: `${data.source === "valuation" ? "Free valuation request" : "Website enquiry"} — ${data.name}`,
        text: `A new lead was submitted.\n\n${details}\n\nLead ID: ${lead.id}`,
      }),
      sendEmail(resendKey, {
        from: "Tony Lin <tony@tony-lin.ca>",
        to: [data.email],
        reply_to: "tony@tony-lin.ca",
        subject: "Your enquiry has been received — Tony Lin",
        text: `Hi ${data.name},\n\nThank you for reaching out. Your ${data.source === "valuation" ? "property valuation request" : "enquiry"} has been received, and Tony will review it shortly.\n\nFor time-sensitive questions or to book a consultation, call 604-700-3946.\n\nTony Lin, REALTOR®\nUniLife Realty Inc.`,
      }),
    ]);

    const failures = deliveries.filter((delivery) => delivery.status === "rejected");
    if (failures.length === 0) {
      return { success: true, emailSent: true };
    }
    console.error("Lead saved but one or more email deliveries failed", failures);
    return { success: true, emailSent: false };
  });
