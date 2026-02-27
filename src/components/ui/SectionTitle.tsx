interface SectionTitleProps {
  children: React.ReactNode;
  goldBorder?: boolean;
}

export default function SectionTitle({ children, goldBorder }: SectionTitleProps) {
  return (
    <h2
      className={`font-display text-lg font-bold text-navy border-b-2 pb-2 mb-4 ${
        goldBorder ? "border-gold" : "border-gold"
      }`}
    >
      {children}
    </h2>
  );
}
