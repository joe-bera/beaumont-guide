"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

interface Inputs {
  purchasePrice: number;
  buildingSF: number;
  monthlyRentSF: number;
  vacancyRate: number;
  opexRate: number;
  downPaymentPct: number;
  interestRate: number;
  loanTermYears: number;
}

const DEFAULTS: Inputs = {
  purchasePrice: 1700000,
  buildingSF: 12000,
  monthlyRentSF: 2.0,
  vacancyRate: 4.3,
  opexRate: 35,
  downPaymentPct: 25,
  interestRate: 6.5,
  loanTermYears: 30,
};

function fmt(n: number): string {
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

function fmtDollar(n: number): string {
  return "$" + fmt(n);
}

function fmtPct(n: number): string {
  return n.toFixed(2) + "%";
}

function calculate(inp: Inputs) {
  const priceSF = inp.purchasePrice / inp.buildingSF;
  const gpi = inp.monthlyRentSF * inp.buildingSF * 12;
  const vacancy = gpi * (inp.vacancyRate / 100);
  const egi = gpi - vacancy;
  const opex = egi * (inp.opexRate / 100);
  const noi = egi - opex;
  const capRate = (noi / inp.purchasePrice) * 100;

  const downPayment = inp.purchasePrice * (inp.downPaymentPct / 100);
  const loanAmount = inp.purchasePrice - downPayment;
  const monthlyRate = inp.interestRate / 100 / 12;
  const numPayments = inp.loanTermYears * 12;

  let annualDebt = 0;
  if (loanAmount > 0 && monthlyRate > 0) {
    const monthlyPayment =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);
    annualDebt = monthlyPayment * 12;
  }

  const cashFlow = noi - annualDebt;
  const cashOnCash = downPayment > 0 ? (cashFlow / downPayment) * 100 : 0;
  const dscr = annualDebt > 0 ? noi / annualDebt : 0;

  return {
    priceSF,
    gpi,
    egi,
    noi,
    capRate,
    annualDebt,
    cashFlow,
    cashOnCash,
    dscr,
    downPayment,
  };
}

function InputField({
  label,
  value,
  onChange,
  prefix,
  suffix,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <div className="mb-3">
      <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.05em] text-slate-500">
        {label}
      </label>
      <div className="flex items-center rounded-lg border border-gray-300 bg-white">
        {prefix && (
          <span className="px-3 text-sm text-slate-500">{prefix}</span>
        )}
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full bg-transparent px-3 py-2 font-sans text-sm outline-none"
        />
        {suffix && (
          <span className="px-3 text-sm text-slate-500">{suffix}</span>
        )}
      </div>
    </div>
  );
}

function ResultRow({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: "green" | "red" | "gold" | null;
}) {
  const colorClass =
    highlight === "green"
      ? "text-green-600"
      : highlight === "red"
      ? "text-red-600"
      : highlight === "gold"
      ? "text-gold"
      : "text-navy";

  return (
    <div className="flex items-center justify-between border-b border-slate-100 py-2.5 last:border-0">
      <span className="text-xs text-slate-600">{label}</span>
      <span className={`text-sm font-bold ${colorClass}`}>{value}</span>
    </div>
  );
}

export default function CalculatorPage() {
  const [inputs, setInputs] = useState<Inputs>(DEFAULTS);

  const update = (key: keyof Inputs) => (value: number) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  const r = calculate(inputs);

  const capVsMarket = r.capRate - 6.7;
  const priceVsMarket = r.priceSF - 245;

  return (
    <>
      <Card>
        <SectionTitle>Deal Analyzer — Beaumont Retail</SectionTitle>
        <p className="mb-4 text-[13px] leading-relaxed text-slate-600">
          Interactive investment calculator using Beaumont/Hemet submarket
          defaults (4.3% vacancy, 6.7% market cap rate, $245/SF avg).
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Inputs */}
          <div>
            <div className="mb-3 text-[13px] font-bold text-navy">
              Deal Inputs
            </div>
            <InputField
              label="Purchase Price"
              value={inputs.purchasePrice}
              onChange={update("purchasePrice")}
              prefix="$"
            />
            <InputField
              label="Building Size"
              value={inputs.buildingSF}
              onChange={update("buildingSF")}
              suffix="SF"
            />
            <InputField
              label="Monthly Rent / SF"
              value={inputs.monthlyRentSF}
              onChange={update("monthlyRentSF")}
              prefix="$"
            />
            <InputField
              label="Vacancy Rate"
              value={inputs.vacancyRate}
              onChange={update("vacancyRate")}
              suffix="%"
            />
            <InputField
              label="Operating Expenses"
              value={inputs.opexRate}
              onChange={update("opexRate")}
              suffix="%"
            />
            <InputField
              label="Down Payment"
              value={inputs.downPaymentPct}
              onChange={update("downPaymentPct")}
              suffix="%"
            />
            <InputField
              label="Loan Interest Rate"
              value={inputs.interestRate}
              onChange={update("interestRate")}
              suffix="%"
            />
            <InputField
              label="Loan Term"
              value={inputs.loanTermYears}
              onChange={update("loanTermYears")}
              suffix="years"
            />
          </div>

          {/* Results */}
          <div>
            <div className="mb-3 text-[13px] font-bold text-navy">
              Deal Analysis
            </div>
            <div className="rounded-xl border border-[#e8e5df] bg-[#fafaf8] p-4">
              <ResultRow label="Price / SF" value={fmtDollar(r.priceSF)} />
              <ResultRow label="Gross Potential Income" value={fmtDollar(r.gpi)} />
              <ResultRow label="Effective Gross Income" value={fmtDollar(r.egi)} />
              <ResultRow
                label="Net Operating Income (NOI)"
                value={fmtDollar(r.noi)}
                highlight="gold"
              />
              <ResultRow
                label="Cap Rate"
                value={fmtPct(r.capRate)}
                highlight={r.capRate >= 6.7 ? "green" : "red"}
              />
              <ResultRow label="Down Payment" value={fmtDollar(r.downPayment)} />
              <ResultRow
                label="Annual Debt Service"
                value={fmtDollar(r.annualDebt)}
              />
              <ResultRow
                label="Cash Flow (Before Tax)"
                value={fmtDollar(r.cashFlow)}
                highlight={r.cashFlow >= 0 ? "green" : "red"}
              />
              <ResultRow
                label="Cash-on-Cash Return"
                value={fmtPct(r.cashOnCash)}
                highlight={r.cashOnCash >= 8 ? "green" : r.cashOnCash >= 0 ? null : "red"}
              />
              <ResultRow
                label="DSCR"
                value={r.dscr.toFixed(2) + "x"}
                highlight={r.dscr >= 1.25 ? "green" : r.dscr >= 1.0 ? null : "red"}
              />
            </div>

            {/* Submarket Comparison */}
            <div className="mt-4 rounded-xl border border-[#e8e5df] bg-[#fafaf8] p-4">
              <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.05em] text-slate-500">
                vs. Submarket Benchmarks
              </div>
              <div className="flex justify-between border-b border-slate-100 py-2 text-xs">
                <span>Cap Rate vs. Market (6.7%)</span>
                <span
                  className={`font-bold ${
                    capVsMarket >= 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {capVsMarket >= 0 ? "+" : ""}
                  {capVsMarket.toFixed(1)} bps
                </span>
              </div>
              <div className="flex justify-between py-2 text-xs">
                <span>Price/SF vs. Market ($245)</span>
                <span
                  className={`font-bold ${
                    priceVsMarket <= 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {priceVsMarket >= 0 ? "+" : ""}
                  {fmtDollar(priceVsMarket)}/SF
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
