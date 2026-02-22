"use client";
import { MenuProvider } from "@/MenuContext";
import { MobileMenu } from "./MobileMenu";
import { Overlay } from "./Overlay";
import { Sidebar } from "./Sidebar";

export const Menu = () => {
  return (
    <MenuProvider>
      <MobileMenu />
      <Overlay />
      <Sidebar />
    </MenuProvider>
  );
};
