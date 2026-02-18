export type Message = {
  sender: "user" | "bot" | "waiting";
  text: string;
};

export type SendMessage = {
  question: string;
  key: string;
};

export type BotResponse = {
  message: string;
};
