interface TipBoxProps {
  children: React.ReactNode;
  className?: string;
}

export default function TipBox({ children, className = "" }: TipBoxProps) {
  return (
    <div
      className={`rounded-lg border border-amber-400 bg-amber-50 px-4 py-3 text-[13px] leading-relaxed ${className}`}
    >
      {children}
    </div>
  );
}
