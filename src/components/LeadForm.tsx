import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { Button } from "./ui/button";
import { submitLead } from "../lib/leads.functions";

type LeadFormProps = {
  compact?: boolean;
  source: "valuation" | "contact";
};

const fieldClass =
  "mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";
const labelClass = "text-xs font-medium uppercase tracking-[0.18em] text-foreground/70";

export function LeadForm({ compact = false, source }: LeadFormProps) {
  const submit = useServerFn(submitLead);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      await submit({
        data: {
          name: String(data.get("name") || ""),
          email: String(data.get("email") || ""),
          phone: String(data.get("phone") || ""),
          propertyAddress:
            source === "valuation" ? String(data.get("propertyAddress") || "") : undefined,
          propertyType:
            source === "valuation"
              ? (String(data.get("propertyType") || "Not sure") as
                  | "Residential"
                  | "Commercial"
                  | "Land"
                  | "Not sure")
              : undefined,
          interest: source === "contact" ? String(data.get("interest") || "") : undefined,
          message: source === "contact" ? String(data.get("message") || "") : undefined,
          source,
        },
      });
      form.reset();
      setStatus("success");
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "Please try again.");
      setStatus("error");
    }
  }

  const fieldId = (name: string) => `${source}-${compact ? "compact" : "full"}-${name}`;

  return (
    <form
      onSubmit={handleSubmit}
      className={compact ? "" : "flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm md:p-10"}
    >
      <div className={compact ? "grid gap-4 md:grid-cols-5" : "grid gap-5 sm:grid-cols-2"}>
        <Field id={fieldId("name")} label="Full Name" name="name" maxLength={100} required />
        <Field
          id={fieldId("email")}
          label="Email"
          name="email"
          type="email"
          maxLength={255}
          required
        />
        <Field id={fieldId("phone")} label="Phone" name="phone" type="tel" maxLength={40} />
        {source === "valuation" ? (
          <>
            <Field
              id={fieldId("address")}
              label="Property Address"
              name="propertyAddress"
              maxLength={300}
              required
            />
            <div>
              <label htmlFor={fieldId("type")} className={labelClass}>
                Property Type
              </label>
              <select
                id={fieldId("type")}
                name="propertyType"
                className={fieldClass}
                defaultValue="Not sure"
              >
                <option>Residential</option>
                <option>Commercial</option>
                <option>Land</option>
                <option>Not sure</option>
              </select>
            </div>
          </>
        ) : (
          <div>
            <label htmlFor={fieldId("interest")} className={labelClass}>
              I am interested in
            </label>
            <select
              id={fieldId("interest")}
              name="interest"
              className={fieldClass}
              defaultValue="General Consultation"
            >
              <option>Buying</option>
              <option>Selling</option>
              <option>Commercial Property</option>
              <option>Land / Agricultural Property</option>
              <option>General Consultation</option>
            </select>
          </div>
        )}
      </div>

      {source === "contact" ? (
        <div className="mt-5">
          <label htmlFor={fieldId("message")} className={labelClass}>
            Message
          </label>
          <textarea
            id={fieldId("message")}
            name="message"
            rows={5}
            maxLength={2000}
            className={fieldClass}
            placeholder="Share your situation, timeline, and preferred areas."
          />
        </div>
      ) : null}

      <Button
        type="submit"
        size="lg"
        disabled={status === "sending"}
        className={compact ? "mt-5 w-full rounded-full md:w-auto" : "mt-auto w-full rounded-full"}
      >
        {status === "sending"
          ? "Sending…"
          : source === "valuation"
            ? "Get My Free Valuation"
            : "Send Enquiry"}
      </Button>

      <div aria-live="polite">
        {status === "success" ? (
          <p className="mt-4 text-sm text-foreground/75">
            Thank you — your request has been received. Tony will be in touch shortly.
          </p>
        ) : null}
        {status === "error" ? <p className="mt-4 text-sm text-destructive">{error}</p> : null}
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  name,
  type = "text",
  required,
  maxLength,
}: {
  id: string;
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  maxLength: number;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required ? " *" : ""}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        maxLength={maxLength}
        className={fieldClass}
      />
    </div>
  );
}
