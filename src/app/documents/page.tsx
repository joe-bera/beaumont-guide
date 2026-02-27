import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import { DOCUMENTS } from "@/data/documents";
import { CONTACTS } from "@/data/contacts";

export const metadata = {
  title: "Documents & Resources | Beaumont Development Guide",
};

export default function DocumentsPage() {
  return (
    <>
      {/* Document Categories */}
      {DOCUMENTS.map((cat, i) => (
        <Card key={i}>
          <SectionTitle>{cat.category}</SectionTitle>
          {cat.items.map((doc, j) => (
            <a
              key={j}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border-b border-slate-100 py-3 text-[13px] text-navy transition-colors last:border-0 hover:text-gold"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-lg">📄</span>
                <span className="font-medium">{doc.name}</span>
              </div>
              <span className="text-xs font-semibold text-gold">Open →</span>
            </a>
          ))}
        </Card>
      ))}

      {/* City Contacts */}
      <Card>
        <SectionTitle>Key City Contacts</SectionTitle>
        {CONTACTS.map((c, i) => (
          <div
            key={i}
            className="flex flex-wrap items-center justify-between gap-1 border-b border-slate-100 py-2.5 text-[13px] last:border-0"
          >
            <strong className="text-navy">{c.dept}</strong>
            <span className="text-slate-600">
              {c.phone}
              {c.email ? ` | ${c.email}` : ""}
            </span>
          </div>
        ))}
      </Card>
    </>
  );
}
