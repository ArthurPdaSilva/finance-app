"use client";

import { useMessage } from "@/MessageContext";
import type { BotResponse, Message, SendMessage } from "@/types";
import { useEffect } from "react";

type SendInputProps = {
  apiKey: string;
};

export const SendInput = ({ apiKey }: SendInputProps) => {
  const { setMessages, startTransition, isPending } = useMessage();

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.chatInput as HTMLInputElement;

    const value = input.value.trim();
    if (!value) return;

    const sendMessage: SendMessage = {
      key: apiKey,
      question: value,
    };

    const interaction: Message[] = [
      { sender: "waiting", text: "O Finance Bot está pensando..." },
      { sender: "user", text: value },
    ];

    setMessages((prev) => [...interaction, ...prev]);

    startTransition(async () => {
      const response = await fetch(
        "https://finance-ai-6ikr.onrender.com/finance-ai",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sendMessage),
        },
      );

      const data = (await response.json()) as BotResponse;
      const interaction: Message[] = [{ sender: "bot", text: data.message }];

      setMessages((prev) => [...interaction, ...prev]);
    });

    input.value = "";
    input.focus();
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: false positive
  useEffect(() => {
    if (!isPending) {
      // Quero remover a mensagem de "O Finance Bot está pensando..." quando a resposta chegar
      setMessages((prev) => prev.filter((msg) => msg.sender !== "waiting"));
    }
  }, [isPending]);

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        disabled={isPending}
        type="text"
        name="chatInput"
        placeholder="Digite sua mensagem"
        className="flex-1 outline-0 border border-[#2A4A7A] bg-[#0F1A2A]/60 text-white rounded-l-md p-2
      placeholder-gray-300 focus:border-[#12A2CA] outline-none transition"
      />
      <button
        type="submit"
        className="bg-[#167EAC] hover:bg-[#199BC7] text-white rounded-r-md px-4 py-2 transition-colors duration-300 cursor-pointer -ml-2.5 font-medium"
        disabled={isPending}
      >
        {isPending ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
};
