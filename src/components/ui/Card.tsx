interface CardProps {
  children: React.ReactNode;
  gold?: boolean;
  className?: string;
}

export default function Card({ children, gold, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-xl bg-white p-6 shadow-sm ${
        gold ? "border-2 border-gold" : "border border-[#e8e5df]"
      } mb-5 ${className}`}
    >
      {children}
    </div>
  );
}
