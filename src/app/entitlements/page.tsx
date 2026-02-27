"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import TipBox from "@/components/ui/TipBox";
import Badge from "@/components/ui/Badge";
import { ENTITLEMENT_PHASES } from "@/data/entitlement-phases";
import { ZONING } from "@/data/zoning";

const ZONING_KEYS = Object.keys(ZONING);

export default function EntitlementsPage() {
  const [phase, setPhase] = useState(0);
  const [zoningKey, setZoningKey] = useState("C-2 (General Commercial)");

  const p = ENTITLEMENT_PHASES[phase];
  const z = ZONING[zoningKey];

  return (
    <>
      {/* Phase Roadmap */}
      <Card>
        <SectionTitle>5-Phase Entitlement Roadmap — City of Beaumont</SectionTitle>
        <p className="mb-4 text-[13px] leading-relaxed text-slate-600">
          Total timeline: <strong>6–18 months</strong> | Total estimated cost:{" "}
          <strong>$85K–$465K</strong> depending on project scope, CEQA
          requirements, and hearing complexity.
        </p>

        {/* Phase Nav */}
        <div className="mb-6 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {ENTITLEMENT_PHASES.map((ep, i) => (
            <button
              key={i}
              onClick={() => setPhase(i)}
              className={`whitespace-nowrap rounded-lg px-4 py-2.5 text-xs font-semibold transition-all ${
                phase === i
                  ? "border-2 border-navy bg-navy text-white"
                  : "border border-gray-300 bg-white text-slate-600"
              }`}
            >
              Phase {ep.phase}
            </button>
          ))}
        </div>

        {/* Phase Detail */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <h3 className="font-display text-lg font-bold text-navy">
            Phase {p.phase}: {p.name}
          </h3>
          <div className="flex gap-2">
            <Badge variant="blue">⏱ {p.time}</Badge>
            <Badge variant="green">💰 {p.cost}</Badge>
          </div>
        </div>

        {/* Steps */}
        <div className="mb-2 text-[13px] font-bold text-navy">Key Steps</div>
        {p.steps.map((s, i) => (
          <div key={i} className="mb-2 flex gap-2.5 text-[13px] text-slate-600">
            <div className="mt-0.5 flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded-full bg-navy text-[10px] font-bold text-white">
              {i + 1}
            </div>
            <div className="leading-relaxed">{s}</div>
          </div>
        ))}

        {/* Tips */}
        <div className="mb-2 mt-5 text-[13px] font-bold text-gold">
          Insider Tips
        </div>
        {p.tips.map((t, i) => (
          <TipBox key={i} className="mt-2">
            {t}
          </TipBox>
        ))}
      </Card>

      {/* Zoning Quick Reference */}
      <Card>
        <SectionTitle>Zoning Quick Reference</SectionTitle>
        <select
          className="mb-4 w-full max-w-sm rounded-lg border border-gray-300 bg-white px-3 py-2 font-sans text-[13px]"
          value={zoningKey}
          onChange={(e) => setZoningKey(e.target.value)}
        >
          {ZONING_KEYS.map((zk) => (
            <option key={zk} value={zk}>
              {zk}
            </option>
          ))}
        </select>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            { label: "Max Height", value: z.height },
            { label: "FAR", value: z.far },
            { label: "Setbacks", value: z.setback },
            { label: "Parking", value: z.parking },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-[#e8e5df] bg-[#fafaf8] p-4 text-left"
            >
              <div className="text-[11px] font-medium uppercase tracking-[0.05em] text-slate-500">
                {item.label}
              </div>
              <div className="mt-1.5 text-sm font-bold text-navy">
                {item.value}
              </div>
            </div>
          ))}
          <div className="col-span-full rounded-xl border border-[#e8e5df] bg-[#fafaf8] p-4 text-left">
            <div className="text-[11px] font-medium uppercase tracking-[0.05em] text-slate-500">
              Permitted Uses
            </div>
            <div className="mt-1.5 text-[13px] leading-relaxed text-slate-600">
              {z.uses}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
