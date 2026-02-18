"use client";

import { useMessage } from "@/MessageContext";
import type { Message } from "@/types";

export const SendInput = () => {
  const { setMessages } = useMessage();

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.chatInput as HTMLInputElement;

    const value = input.value.trim();
    if (!value) return;

    const fakeInteration: Message[] = [
      { sender: "bot", text: "Sim, eu sou um bot! Como posso" },
      { sender: "user", text: value },
    ];

    setMessages((prev) => [...fakeInteration, ...prev]);
    input.value = "";
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        name="chatInput"
        placeholder="Digite sua mensagem"
        className="flex-1 outline-0 border border-[#2A4A7A] bg-[#0F1A2A]/60 text-white rounded-l-md p-2
      placeholder-gray-300 focus:border-[#12A2CA] outline-none transition"
      />
      <button
        type="submit"
        className="bg-[#167EAC] hover:bg-[#199BC7] text-white rounded-r-md px-4 py-2 transition-colors duration-300 cursor-pointer -ml-2.5"
      >
        Enviar
      </button>
    </form>
  );
};
