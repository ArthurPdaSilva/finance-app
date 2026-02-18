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
      className={`flex h-[75vh] overflow-y-auto p-3 rounded-lg bg-[#0F1A2A]/90 
  border border-[#24385B] shadow-lg backdrop-blur-sm flex-col-reverse gap-3`}
    >
      {messages.length === 0 && (
        <div className={"flex gap-2 self-start"}>
          <p
            className={
              "rounded-lg p-2 text-sm md:text-base text-white self-start font-bold"
            }
          >
            Olá! Eu sou o Finance Bot, seu assistente financeiro virtual. Estou
            aqui para ajudar a responder suas dúvidas sobre finanças,
            investimentos e muito mais. Sinta-se à vontade para me perguntar
            qualquer coisa relacionada ao mundo financeiro!
          </p>
        </div>
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
                ? "bg-[#167EAC] text-white self-end"
                : "text-white self-start  font-bold"
            }`}
          >
            {msg.text}
          </p>
        </div>
      ))}
    </div>
  );
};
