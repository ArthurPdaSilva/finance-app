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
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="text-4xl font-bold text-center">Chat Financeiro</h1>

      <div className="w-full flex flex-col gap-4 p-4">
        <div
          ref={messagesRef}
          className="flex h-[80vh] overflow-y-auto flex-col-reverse gap-4 p-4 rounded-lg"
        >
          {messages.length === 0 && (
            <p className="text-2xl text-gray-400 text-center  mt-4">
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
                className={`rounded-lg p-2 ${
                  msg.sender === "user"
                    ? "bg-gray-100 text-gray-800"
                    : "bg-blue-100 text-blue-800"
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
            className="flex-1 border border-gray-300 rounded-l-md p-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-r-md p-2 hover:bg-blue-600 transition-colors duration-300 cursor-pointer -ml-2.5"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
