"use client";

import { useState, useRef, useEffect } from "react";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED_QUESTIONS = [
  "Parking requirements for 10K SF retail in C-2?",
  "What's the CUP process timeline?",
  "Height limits in M-2 zoning?",
  "Development impact fees per 1,000 SF?",
  "TOD overlay density bonuses?",
];

const WELCOME_MESSAGE =
  "I'm your Beaumont Development Code Assistant powered by AI. Ask me anything about zoning regulations, permit requirements, development standards, CEQA, or city ordinances.\n\nTry: \"What are the parking requirements for a 10,000 SF retail center in C-2 zoning?\"";

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  async function sendMessage(text?: string) {
    const msg = (text || input).trim();
    if (!msg || isLoading) return;

    setInput("");
    const userMessage: Message = { role: "user", content: msg };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await res.json();

      if (data.error) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "I'm currently unavailable. For immediate help:\n• Beaumont Planning: (951) 769-8520\n• Apex Real Estate: (951) 977-3251",
          },
        ]);
      } else {
        const reply =
          data.content?.map((c: { text?: string }) => c.text || "").join("") ||
          "I couldn't process that. Please try again.";
        setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Connection issue. For immediate help:\n• Beaumont Planning: (951) 769-8520\n• Apex Real Estate: (951) 977-3251",
        },
      ]);
    }

    setIsLoading(false);
  }

  return (
    <Card>
      <SectionTitle>AI-Powered Beaumont Code Assistant</SectionTitle>
      <p className="mb-3 text-xs text-slate-500">
        Ask questions about Beaumont zoning, permits, fees, CEQA, development
        standards, or municipal code.
      </p>

      {/* Chat Container */}
      <div className="flex h-[440px] flex-col overflow-hidden rounded-xl border border-[#e8e5df] bg-[#fafaf8]">
        {/* Messages */}
        <div ref={chatRef} className="flex-1 overflow-y-auto p-4">
          {/* Welcome message */}
          <div className="mb-2.5 max-w-[80%] whitespace-pre-wrap rounded-xl border border-[#e8e5df] bg-white px-3.5 py-2.5 text-[13px] leading-relaxed text-slate-900">
            {WELCOME_MESSAGE}
          </div>

          {messages.map((m, i) => (
            <div
              key={i}
              className={`mb-2.5 max-w-[80%] whitespace-pre-wrap rounded-xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                m.role === "user"
                  ? "ml-auto bg-navy text-white"
                  : "border border-[#e8e5df] bg-white text-slate-900"
              }`}
            >
              {m.content}
            </div>
          ))}

          {isLoading && (
            <div className="mb-2.5 max-w-[80%] rounded-xl border border-[#e8e5df] bg-white px-3.5 py-2.5">
              <span className="inline-flex gap-1">
                <span className="typing-dot h-1.5 w-1.5 rounded-full bg-slate-400" />
                <span className="typing-dot h-1.5 w-1.5 rounded-full bg-slate-400" />
                <span className="typing-dot h-1.5 w-1.5 rounded-full bg-slate-400" />
              </span>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="flex gap-2 border-t border-[#e8e5df] bg-white p-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask about zoning, permits, fees, timelines..."
            className="flex-1 rounded-lg border border-gray-300 px-3.5 py-2.5 font-sans text-[13px] outline-none focus:border-navy"
          />
          <button
            onClick={() => sendMessage()}
            disabled={isLoading}
            className="rounded-lg bg-navy px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-navy-deep disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </div>

      {/* Suggested Questions */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {SUGGESTED_QUESTIONS.map((q, i) => (
          <button
            key={i}
            onClick={() => sendMessage(q)}
            className="rounded-full border border-gray-300 bg-white px-3 py-1.5 font-sans text-[11px] text-slate-600 transition-colors hover:border-navy hover:text-navy"
          >
            {q}
          </button>
        ))}
      </div>
    </Card>
  );
}
