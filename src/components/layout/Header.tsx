import Link from "next/link";

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-navy to-navy-deep text-white px-6 py-5">
      {/* Subtle diagonal pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 20px, white 20px, white 21px)",
        }}
      />
      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-3">
        <div>
          <Link href="/" className="block">
            <h1 className="font-display text-2xl font-bold tracking-tight">
              Beaumont Development Guide
            </h1>
          </Link>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-gold">
            Apex Real Estate Services × CoStar Analytics
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-block rounded-full bg-amber-100 px-3.5 py-1.5 text-[11px] font-semibold text-amber-800">
            Q1 2026
          </span>
          <a
            href="tel:9519773251"
            className="inline-flex items-center gap-1.5 rounded-lg bg-gold px-4 py-2 text-[13px] font-bold text-navy transition-all hover:brightness-110"
          >
            <span>☎</span> (951) 977-3251
          </a>
        </div>
      </div>
    </header>
  );
}
