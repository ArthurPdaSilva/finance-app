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
      { sender: "bot", text: "Entendi sua mensagem." },
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
        className="flex-1 border outline-0 border-[#2A3C36] bg-[#0E1412] text-white rounded-l-md p-2 placeholder-gray-400"
      />
      <button
        type="submit"
        className="bg-[#1F6F4A] text-white rounded-r-md px-4 py-2 hover:bg-[#27965F] transition-colors duration-300 cursor-pointer -ml-2.5"
      >
        Enviar
      </button>
    </form>
  );
};
