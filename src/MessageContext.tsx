"use client";
import {
  createContext,
  type TransitionStartFunction,
  useContext,
  useState,
  useTransition,
} from "react";
import type { Message } from "./types";

type MessageContext = {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  isPending: boolean;
  startTransition: TransitionStartFunction;
};

const MessageContext = createContext<MessageContext | null>(null);

export function MessagesProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isPending, startTransition] = useTransition();

  return (
    <MessageContext.Provider
      value={{ messages, setMessages, isPending, startTransition }}
    >
      {children}
    </MessageContext.Provider>
  );
}

export function useMessage() {
  const ctx = useContext(MessageContext);
  if (!ctx)
    throw new Error("useMessage deve ser usado dentro de MessagesProvider");
  return ctx;
}
