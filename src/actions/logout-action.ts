"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const LogoutAction = async () => {
  (await cookies()).delete("api-key");
  redirect("/");
};
