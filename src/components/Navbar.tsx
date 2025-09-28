import Link from "next/link";
import { Menubar, MenubarMenu, MenubarTrigger } from "./ui/menubar";

export default function Navbar() {
  return (
    <Menubar className="bg-transparent w-full max-w-6xl">
      <MenubarMenu>
        <Link href={"/"}>
          <MenubarTrigger>HOME</MenubarTrigger>
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <Link href={"/about"}>
          <MenubarTrigger>ABOUT</MenubarTrigger>
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <Link href={"/projects"}>
          <MenubarTrigger>PROJECTS</MenubarTrigger>
        </Link>
      </MenubarMenu>
    </Menubar>
  );
}
