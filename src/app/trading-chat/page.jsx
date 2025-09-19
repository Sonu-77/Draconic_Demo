"use client";
import ChartView from "@/components/ChartView";
import { useEffect, useRef, useState } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { id: 1, role: "assistant", type: "text", text: "Hey! Ask me about trading." },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const areaRef = useRef(null);
  const scrollRef = useRef(null);

  // Auto-grow the textarea as the user types
  useEffect(() => {
    const el = areaRef.current;
    if (!el) return;
    el.style.height = "0px"; // reset
    const next = Math.min(el.scrollHeight, 160); // cap max height ~ 8-9 lines
    el.style.height = next + "px";
  }, [input]);

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg = { id: Date.now(), role: "user", type: "text", text: trimmed };
    setMessages((m) => [...m, userMsg]);
    setInput("");

    // Simulate LLM delay then show your component as the response
    setIsTyping(true);

    // (Optional) show a typing placeholder message while waiting
    const typingMsg = { id: Date.now() + 1, role: "assistant", type: "typing" };
    setMessages((m) => [...m, typingMsg]);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((m) => {
        // Remove the typing placeholder if it exists
        const withoutTyping = m.filter((msg) => msg.type !== "typing");
        // Push a static acknowledgement text (you can customize or remove)
        const ack = {
          id: Date.now() + 2,
          role: "assistant",
          type: "text",
          text: "Got it. Here's a quick chart based on your prompt.",
        };
        // Push the chart component as the LLM response
        const chart = { id: Date.now() + 3, role: "assistant", type: "chart" };
        return [...withoutTyping, ack, chart];
      });
    }, 900); // adjust delay as needed
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-svh flex flex-col bg-[#1d0f05]">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/5 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto w-full max-w-3xl px-4 py-3 flex items-center jucstify-center">
          <h1 className="text-sm text-center font-semibold tracking-wide text-white">Trading Chat Bot</h1>

        </div>
      </header>

      {/* Messages */}
      <main ref={scrollRef} className="flex-1 overflow-y-auto scroll-smooth [scrollbar-gutter:stable]">
        <div className="mx-auto w-full max-w-6xl px-4 pb-28 pt-4">
          {messages.map((m) => (
            <MessageBubble key={m.id} {...m} />
          ))}
          {isTyping && <TypingDots />}
        </div>
      </main>

      {/* Composer */}
      <div className="sticky bottom-0 z-20 backdrop-blur bg-white/5 border-t border-white/10">
        <div className="mx-auto w-full max-w-3xl px-4 pb-[env(safe-area-inset-bottom)]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
            className="flex items-end gap-2 py-3"
          >
            {/* Textarea */}
            <div className="flex-1 rounded-2xl border border-white/10 bg-white/10 shadow-sm focus-within:ring-2 focus-within:ring-white/20">
              <textarea
                ref={areaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                rows={1}
                placeholder="Type your message..."
                className="w-full resize-none rounded-2xl bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/50 text-white"
              />
              <div className="flex items-center justify-between px-2 pb-2 text-[11px] text-white/60">
                <span className="px-2 py-1">Enter to send • Shift+Enter = newline</span>
                <div className="flex items-center gap-1 pr-1">
                  <button
                    type="button"
                    title="Attach"
                    className="rounded-lg px-2 py-1 hover:bg-white/10"
                    onClick={() => alert("Attach clicked (stub)")}
                  >
                    📎
                  </button>
                </div>
              </div>
            </div>

            {/* Send button */}
            <button
              type="submit"
              disabled={!input.trim()}
              className="inline-flex h-10 items-center justify-center rounded-xl border border-white/10 px-4 text-sm font-medium shadow-sm transition bg-white/10 text-white hover:bg-white/20 disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function MessageBubble({ role, type, text }) {
  const isUser = role === "user";

  if (type === "typing") {
    return (
      <div className="mb-2 flex justify-start">
        <div className="max-w-[85%] rounded-2xl px-4 py-2 text-[13px] bg-white/10 text-white/80 border border-white/10">
          <span className="inline-flex items-center gap-2">
            <span className="opacity-80">Response generating</span>
            <Dots />
          </span>
        </div>
      </div>
    );
  }

  if (type === "chart") {
    return (
      <div className="mb-3 flex justify-start">
        <div className="w-full max-w-[100%] rounded-2xl   p-2">
          <ChartView />
        </div>
      </div>
    );
  }

  // default text bubble
  return (
    <div className={`mb-2 flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={
          "max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2 text-[13px] leading-relaxed " +
          (isUser ? "bg-white text-black" : "bg-white/10 text-white border border-white/10")
        }
      >
        {text}
      </div>
    </div>
  );
}

function TypingDots() {
  return (
    <div className="mb-2 flex justify-start">
      <div className="max-w-[85%] rounded-2xl px-4 py-2 text-[13px] bg-white/10 text-white/80 border border-white/10">
        <Dots />
      </div>
    </div>
  );
}

function Dots() {
  return (
    <span className="inline-flex items-center gap-1">
      <span className="inline-block h-1 w-1 animate-bounce rounded-full bg-white/70 [animation-delay:-200ms]"></span>
      <span className="inline-block h-1 w-1 animate-bounce rounded-full bg-white/70 [animation-delay:-100ms]"></span>
      <span className="inline-block h-1 w-1 animate-bounce rounded-full bg-white/70"></span>
    </span>
  );
}
