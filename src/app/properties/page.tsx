"use client";

import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import { PROPERTIES } from "@/data/properties";

export default function PropertiesPage() {
  return (
    <>
      <Card>
        <SectionTitle>Active Beaumont Listings — Apex Real Estate</SectionTitle>
        <p className="mb-4 text-[13px] leading-relaxed text-slate-600">
          Current commercial properties available through Apex Real Estate
          Services in the Beaumont/Hemet market area.
        </p>

        {/* Map Embed — OpenStreetMap via iframe for simplicity */}
        <div className="mb-5 overflow-hidden rounded-xl border border-[#e8e5df]">
          <iframe
            title="Beaumont Properties Map"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=-117.01%2C33.91%2C-116.94%2C33.95&layer=mapnik&marker=33.9295%2C-116.9714`}
          />
        </div>

        {/* Property Cards */}
        <div className="grid gap-4 md:grid-cols-2">
          {PROPERTIES.map((p, i) => (
            <div
              key={i}
              className="rounded-xl border border-[#e8e5df] bg-[#fafaf8] p-4"
            >
              <div className="mb-2 flex items-start justify-between gap-2">
                <h3 className="text-sm font-bold text-navy">{p.address}</h3>
                <Badge variant="green">{p.status}</Badge>
              </div>
              <div className="space-y-1 text-xs text-slate-600">
                <div>
                  <span className="font-semibold text-slate-500">Type:</span>{" "}
                  {p.type}
                </div>
                <div>
                  <span className="font-semibold text-slate-500">Price:</span>{" "}
                  <span className="font-bold text-gold">{p.price}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-500">Size:</span>{" "}
                  {p.size}
                </div>
                <div>
                  <span className="font-semibold text-slate-500">Zoning:</span>{" "}
                  {p.zoning}
                </div>
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block rounded-lg bg-navy px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-navy-deep"
              >
                View Listing →
              </a>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
