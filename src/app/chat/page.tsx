import { ChatContainer } from "@/components/ChatContainer";
import { Messages } from "@/components/Messages";
import { SendInput } from "@/components/SendInput";
import { MessagesProvider } from "@/MessageContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat",
};

export default function Chat() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 px-4 py-6  bg-[radial-gradient(circle_at_center,#12A2CA,#199BC7,#5A63AB)]">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-white">
        Chat Financeiro
      </h1>
      <ChatContainer>
        <MessagesProvider>
          <Messages />
          <SendInput />
        </MessagesProvider>
      </ChatContainer>
    </div>
  );
}
