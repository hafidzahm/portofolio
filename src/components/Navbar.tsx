import Link from "next/link";
import { Menubar, MenubarMenu, MenubarTrigger } from "./ui/menubar";

export default function Navbar() {
  return (
    <Menubar className="bg-transparent w-full max-w-6xl">
      <MenubarMenu>
        <Link href={"/"}>
          <MenubarTrigger>Home</MenubarTrigger>
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <Link href={"/projects"}>
          <MenubarTrigger>Projects</MenubarTrigger>
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <Link href={"/about"}>
          <MenubarTrigger>About</MenubarTrigger>
        </Link>
      </MenubarMenu>
    </Menubar>
  );
}
