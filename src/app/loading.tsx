export default function Loading() {
  return (
    <div className="flex min-h-[200px] items-center justify-center">
      <div className="text-center">
        <div className="inline-flex gap-1">
          <span className="typing-dot h-2 w-2 rounded-full bg-navy" />
          <span className="typing-dot h-2 w-2 rounded-full bg-navy" />
          <span className="typing-dot h-2 w-2 rounded-full bg-navy" />
        </div>
        <p className="mt-3 text-xs text-slate-500">Loading...</p>
      </div>
    </div>
  );
}
