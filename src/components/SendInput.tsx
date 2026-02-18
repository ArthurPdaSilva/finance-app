/** biome-ignore-all lint/correctness/useExhaustiveDependencies: false positive */
"use client";

import { chatAction } from "@/actions/chat-action";
import { useMessage } from "@/MessageContext";
import { useActionState, useEffect, useState } from "react";

export const SendInput = () => {
  const { setMessages } = useMessage();
  const [inputValue, setInputValue] = useState("");

  const initialState = {
    chatInput: "",
    botResponse: "",
  };
  const [state, action, isPending] = useActionState(chatAction, initialState);

  useEffect(() => {
    if (isPending) {
      setMessages((prev) => [
        { sender: "waiting", text: "O Finance Bot está pensando..." },
        { sender: "user", text: inputValue },
        ...prev.filter((m) => m.sender !== "waiting"),
      ]);
    }

    if (!isPending && state.botResponse) {
      setInputValue("");
      setMessages((prev) => [
        { sender: "bot", text: state.botResponse },
        ...prev.filter((m) => m.sender !== "waiting"),
      ]);
    }
  }, [isPending, state.botResponse]);

  return (
    <form action={action} className="flex gap-2">
      <input
        value={inputValue}
        disabled={isPending}
        onChange={(e) => setInputValue(e.target.value)}
        defaultValue={state.chatInput}
        type="text"
        name="chat-input"
        placeholder={"Digite sua pergunta..."}
        className={`flex-1 border border-[#2A4A7A] bg-[#0F1A2A]/60 ${isPending ? "text-gray-500" : "text-white"} ${inputValue.trim()} rounded-l-md p-2 
                   placeholder-gray-300 focus:border-[#12A2CA] outline-none transition`}
      />
      <button
        type="submit"
        disabled={isPending || !inputValue.trim()}
        className="bg-[#167EAC] hover:bg-[#199BC7] text-white rounded-r-md px-4 -ml-2.5 py-2 
                   transition-colors duration-300 cursor-pointer font-medium disabled:opacity-50"
      >
        {isPending ? "..." : "Enviar"}
      </button>
    </form>
  );
};
