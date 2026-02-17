import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Home() {
  const handleForm = async (formData: FormData) => {
    "use server";

    const apiKey = formData.get("api-key") as string;

    if (apiKey !== process.env.NEXT_PUBLIC_API_KEY) {
      console.error("Chave de acesso inválida");
      return;
    }

    (await cookies()).set("api-key", apiKey, {
      maxAge: 60 * 60,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    redirect("/chat");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-[#0A0F0D]">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#D4AF37] mb-6">
        Bem-vindo ao Finance App
      </h1>

      <form
        className="flex flex-col gap-3 w-full max-w-sm text-center bg-[#111715] p-6 rounded-lg border border-[#1F2A25]"
        action={handleForm}
      >
        <input
          type="text"
          id="api-key"
          name="api-key"
          placeholder="Digite a chave de acesso"
          className="border border-[#2A3C36] bg-[#0E1412] text-white rounded-md p-2 placeholder-gray-400"
        />

        <button
          type="submit"
          className="bg-[#1F6F4A] text-white rounded-md p-2 hover:bg-[#27965F] transition-colors duration-300 cursor-pointer"
        >
          Acessar
        </button>
      </form>
    </div>
  );
}
