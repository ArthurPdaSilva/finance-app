"use client";
import { useMessage } from "@/MessageContext";
import { useEffect, useRef } from "react";

export const Messages = () => {
  const { messages } = useMessage();
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

  return (
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
  );
};
