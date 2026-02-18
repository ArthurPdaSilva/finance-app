import type { Metadata } from "next";
import { Bounce, ToastContainer } from "react-toastify";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Finance App - Acesso",
    template: "Finance App - %s",
  },
  description:
    "Uma aplicação de chat financeiro construída com Next.js e TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>
        {children}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </body>
    </html>
  );
}
