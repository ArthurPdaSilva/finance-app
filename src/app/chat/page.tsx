import { ChatContainer } from "@/components/Chat/ChatContainer";
import { Messages } from "@/components/Chat/Messages";
import { SendInput } from "@/components/Chat/SendInput";
import { Sidebar } from "@/components/Sidebar";
import { MessagesProvider } from "@/MessageContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat",
};

export default async function Chat() {
  return (
    <div className="h-full flex">
      <Sidebar />
      <ChatContainer>
        <MessagesProvider>
          <Messages />
          <SendInput />
        </MessagesProvider>
      </ChatContainer>
    </div>
  );
}
