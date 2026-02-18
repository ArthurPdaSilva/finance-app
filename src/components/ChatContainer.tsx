type ChatContainerProps = {
  children: React.ReactNode;
};

export const ChatContainer = ({ children }: ChatContainerProps) => {
  return (
    <div className="w-full max-w-md md:max-w-4xl mx-auto bg-[#199 flex flex-col gap-4 p-2">
      {children}
    </div>
  );
};
