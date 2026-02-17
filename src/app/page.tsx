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

    // setar em um cookie de 1h
    (await cookies()).set("api-key", apiKey, {
      maxAge: 60 * 60, // 1 hora
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
    redirect("/chat");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="text-4xl font-bold text-center">
        Bem vindo ao Finance App
      </h1>

      <form
        className="flex flex-col gap-2 w-full max-w-sm md:min-w-125 text-center"
        action={handleForm}
      >
        <input
          type="text"
          id="api-key"
          name="api-key"
          placeholder="Digite a chave de acesso"
          className="border border-gray-300 rounded-md p-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
        >
          Acessar
        </button>
      </form>
    </div>
  );
}
