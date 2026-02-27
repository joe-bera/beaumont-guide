import Link from "next/link";
import Card from "@/components/ui/Card";

export default function NotFound() {
  return (
    <Card>
      <div className="py-12 text-center">
        <div className="mb-4 text-4xl font-bold text-gold">404</div>
        <h2 className="font-display text-xl font-bold text-navy">
          Page Not Found
        </h2>
        <p className="mt-2 text-[13px] text-slate-600">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/market"
          className="mt-4 inline-block rounded-lg bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-deep"
        >
          Go to Market Intel →
        </Link>
      </div>
    </Card>
  );
}
