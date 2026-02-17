"use client";

import { useEffect, useRef, useState } from "react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesRef = useRef<HTMLDivElement>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: false positive
  useEffect(() => {
    const div = messagesRef.current;
    if (!div) return;

    div.scrollTo({
      top: div.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.chatInput as HTMLInputElement;

    const value = input.value.trim();
    if (!value) return;

    const fakeInteration: Message[] = [
      { sender: "bot", text: "Entendi sua mensagem." },
      { sender: "user", text: value },
    ];

    setMessages((prev) => [...fakeInteration, ...prev]);
    input.value = "";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-[#0A0F0D] px-4 py-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#D4AF37]">
        Chat Financeiro
      </h1>

      <div className="w-full max-w-md flex flex-col gap-4 p-2">
        <div
          ref={messagesRef}
          className="flex h-[75vh] overflow-y-auto flex-col-reverse gap-3 p-3 rounded-lg bg-[#111715] border border-[#1F2A25]"
        >
          {messages.length === 0 && (
            <p className="text-xl text-gray-500 text-center mt-4">
              Como posso te ajudar hoje?
            </p>
          )}

          {messages.map((msg, i) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: false positive
              key={i}
              className={`flex gap-2 ${
                msg.sender === "user" ? "self-end" : "self-start"
              }`}
            >
              <p
                className={`rounded-lg p-2 text-sm md:text-base ${
                  msg.sender === "user"
                    ? "bg-[#1A2E25] text-[#C8F3D4] border border-[#285C4A]"
                    : "bg-[#153E2A] text-[#E1FFE8] border border-[#1C5C3D]"
                }`}
              >
                {msg.text}
              </p>
            </div>
          ))}
        </div>

        {/* INPUT */}
        <form className="flex gap-2" onSubmit={handleSubmit}>
          <input
            type="text"
            name="chatInput"
            placeholder="Digite sua mensagem"
            className="flex-1 border outline-0 border-[#2A3C36] bg-[#0E1412] text-white rounded-l-md p-2 placeholder-gray-400"
          />
          <button
            type="submit"
            className="bg-[#1F6F4A] text-white rounded-r-md px-4 py-2 hover:bg-[#27965F] transition-colors duration-300 cursor-pointer -ml-2.5"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
