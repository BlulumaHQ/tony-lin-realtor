import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { submitLead } from "../lib/leads.functions";
import { Button } from "./ui/button";

export function AlertsForm({ locale = "en" }: { locale?: "en" | "zh-TW" }) {
  const zh = locale === "zh-TW";
  const submit = useServerFn(submitLead);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = new FormData(form);
    try {
      await submit({ data: { name: "Market alerts subscriber", email: String(data.get("email") || ""), source: "alerts" } });
      form.reset(); setStatus("success");
    } catch { setStatus("error"); }
  }
  return <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3 sm:flex-row">
    <label className="sr-only" htmlFor="alerts-email">Email address</label>
    <input id="alerts-email" name="email" type="email" required maxLength={255} placeholder={zh ? "您的 Email" : "Your email address"} className="min-w-0 flex-1 rounded-full border border-border bg-background px-5 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring" />
    <Button type="submit" size="lg" className="rounded-full" disabled={status === "sending"}>{status === "sending" ? zh ? "訂閱中…" : "Subscribing…" : zh ? "訂閱" : "Subscribe"}</Button>
    <span className="sr-only" aria-live="polite">{status === "success" ? "You are subscribed." : status === "error" ? "Subscription failed. Please try again." : ""}</span>
  </form>;
}