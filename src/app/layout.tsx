import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Finance App",
  description: "A simple finance app built with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
