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
    source: z.enum(["valuation", "contact", "alerts"]),
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

// Leads go to the central Bluluma Realtor CMS edge function `lead-submit`,
// which stores the lead and sends both emails via Resend. No secrets in this site.
const LEAD_ENDPOINT = "https://uzdjwpkgldzhnoxjeyrw.supabase.co/functions/v1/lead-submit";

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input: LeadInput) => leadSchema.parse(input))
  .handler(async ({ data }) => {
    const response = await fetch(LEAD_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ realtor: "tony-lin", ...data }),
    });
    if (!response.ok) {
      console.error("Lead submit failed", response.status, await response.text());
      throw new Error("We couldn't save your enquiry. Please call or email Tony directly.");
    }
    const result = (await response.json()) as { emailSent?: boolean };
    return { success: true, emailSent: Boolean(result.emailSent) };
  });
