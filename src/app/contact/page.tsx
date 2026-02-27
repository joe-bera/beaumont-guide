"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

const INTEREST_OPTIONS = [
  "Investment",
  "Development",
  "Market Data",
  "Partnership",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Investment",
    message: "",
  });

  const update = (key: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Mailto fallback
    const subject = encodeURIComponent(
      `Beaumont Guide Inquiry — ${form.interest}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nInterest: ${form.interest}\n\nMessage:\n${form.message}`
    );
    window.open(
      `mailto:robert@apex-res.com?subject=${subject}&body=${body}`,
      "_blank"
    );
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <Card>
        <div className="py-12 text-center">
          <div className="mb-4 text-4xl">✓</div>
          <h2 className="font-display text-2xl font-bold text-navy">
            Thank You
          </h2>
          <p className="mt-2 text-[13px] text-slate-600">
            Robert Mendieta Jr., CCIM will contact you within 24 hours.
          </p>
          <p className="mt-1 text-[13px] text-slate-500">
            For immediate assistance:{" "}
            <a
              href="tel:9519773251"
              className="font-semibold text-gold underline"
            >
              (951) 977-3251
            </a>
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm({
                name: "",
                email: "",
                phone: "",
                interest: "Investment",
                message: "",
              });
            }}
            className="mt-6 rounded-lg bg-navy px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-deep"
          >
            Send Another Message
          </button>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <SectionTitle>Contact Apex Real Estate Services</SectionTitle>
      <p className="mb-4 text-[13px] leading-relaxed text-slate-600">
        Ready to explore Beaumont commercial real estate? Fill out the form
        below and Robert Mendieta Jr., CCIM will reach out within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
        {/* Name */}
        <div>
          <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.05em] text-slate-500">
            Name *
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={update("name")}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 font-sans text-sm outline-none focus:border-navy"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.05em] text-slate-500">
            Email *
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 font-sans text-sm outline-none focus:border-navy"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.05em] text-slate-500">
            Phone
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 font-sans text-sm outline-none focus:border-navy"
          />
        </div>

        {/* Interest */}
        <div>
          <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.05em] text-slate-500">
            Interest
          </label>
          <select
            value={form.interest}
            onChange={update("interest")}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 font-sans text-sm outline-none focus:border-navy"
          >
            {INTEREST_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.05em] text-slate-500">
            Message
          </label>
          <textarea
            rows={4}
            value={form.message}
            onChange={update("message")}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 font-sans text-sm outline-none focus:border-navy"
          />
        </div>

        <button
          type="submit"
          className="rounded-lg bg-gold px-6 py-3 text-sm font-bold text-navy transition-all hover:brightness-110"
        >
          Send Message
        </button>
      </form>

      <div className="mt-6 border-t border-slate-100 pt-4 text-[13px] text-slate-600">
        <strong className="text-navy">Direct Contact:</strong> Robert Mendieta
        Jr., CCIM —{" "}
        <a href="tel:9519773251" className="font-semibold text-gold">
          (951) 977-3251
        </a>{" "}
        |{" "}
        <a href="mailto:robert@apex-res.com" className="font-semibold text-gold">
          robert@apex-res.com
        </a>
      </div>
    </Card>
  );
}
