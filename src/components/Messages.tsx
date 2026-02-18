"use client";
import { useMessage } from "@/MessageContext";
import { useEffect, useRef } from "react";

export const Messages = () => {
  const { messages, isPending } = useMessage();
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
              "rounded-lg p-2 text-sm md:text-base text-white self-start font-medium text-justify"
            }
          >
            Olá! Eu sou o Finance Bot, seu assistente financeiro virtual. Estou
            aqui para ajudar a responder suas dúvidas sobre finanças,
            investimentos e muito mais. Sinta-se à vontade para me perguntar
            qualquer coisa relacionada ao mundo financeiro!
          </p>
        </div>
      )}

      {/* {isPending && (
        <div className="flex gap-2 self-start justify-center items-center">
          <div className="w-6 h-6 border-4 border-[#167EAC] border-t-transparent rounded-full animate-spin"></div>
          <p
            className={
              "rounded-lg p-2 text-sm md:text-base text-[#167EAC] self-start font-medium"
            }
          >
            O Finance Bot está pensando...
          </p>
        </div>
      )} */}

      {messages.map((msg, i) => (
        <div
          // biome-ignore lint/suspicious/noArrayIndexKey: false positive
          key={i}
          className={`flex gap-2 ${
            msg.sender === "user" ? "self-end" : "self-start"
          }`}
        >
          {msg.sender === "waiting" && (
            <div className="flex items-center">
              <div className="w-6 h-6 border-4 border-[#167EAC] border-t-transparent rounded-full animate-spin"></div>
              <p
                className={
                  "rounded-lg p-2 text-sm md:text-base text-[#167EAC] self-start font-medium"
                }
              >
                {msg.text}
              </p>
            </div>
          )}

          {msg.sender !== "waiting" && (
            <p
              className={`rounded-lg p-2 text-sm md:text-base font-medium text-justify ${
                msg.sender === "user"
                  ? "bg-[#167EAC] text-white self-end"
                  : "text-white self-start"
              }`}
            >
              {msg.text}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};
