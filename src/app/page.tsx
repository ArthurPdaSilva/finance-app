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
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4
      bg-[radial-gradient(circle_at_center,#12A2CA,#199BC7,#5A63AB)]"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">
        Bem-vindo ao Finance App
      </h1>

      <form
        className="flex flex-col gap-3 w-full max-w-sm text-center p-6 rounded-xl
  bg-[#0F1A2A]/90 border border-[#24385B] shadow-lg backdrop-blur-sm"
        action={handleForm}
      >
        <input
          type="text"
          id="api-key"
          name="api-key"
          placeholder="Digite a chave de acesso"
          className="border border-[#2A4A7A] bg-[#0F1A2A]/60 text-white rounded-md p-2
      placeholder-gray-300 focus:border-[#12A2CA] outline-none transition"
        />

        <button
          type="submit"
          className="bg-[#167EAC] hover:bg-[#199BC7] text-white rounded-md p-2
    transition-colors duration-300 cursor-pointer font-medium"
        >
          Acessar
        </button>
      </form>
    </div>
  );
}
