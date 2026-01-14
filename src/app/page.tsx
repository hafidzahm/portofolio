import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";
import Magnet from "@/components/Magnet";
import TrueFocus from "@/components/TrueFocus";

export const metadata: Metadata = {
  title: "Abdul Hafizh Mahfudin",
  description: "💻 Hi, welcome to my portofolio! 💻",
};
export default function Home() {
  return (
    <>
      <CardJumbotron />
      <CardQuotes />
    </>
  );
}

function CardJumbotron() {
  return (
    <div className="min-h-[100vh]">
      <div className="flex flex-col max-w-6xl justify-between items-start sm:p-2.5 md:p-10">
        <h1 className="pt-10">Hey there!</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 justify-center items-center gap-5">
          <h1 className=" text-4xl py-5">I&apos;m Abdul Hafizh Mahfudin </h1>{" "}
          <SocialMediaHeader />
        </div>
        <p className="pb-10 text-lg">
          a web developer who loves turning ideas into digital solutions. I’ve
          built apps ranging from budgeting tools to social media clones, all
          using modern tech like React, Express, and Firebase. After switching
          from retail, I’ve been diving deep into code ever since — and I’m just
          getting started!
        </p>
        <Link
          href={
            "https://drive.google.com/file/d/1Pnjlnz4UyIpeNW3M50t25LEYpNeSS0wB/view?usp=sharing"
          }
          className="cursor-pointer"
        >
          {/* last update on 14-01-2026*/}
          <Magnet padding={100} disabled={false} magnetStrength={2}>
            <Button className="cursor-pointer">Download CV</Button>
          </Magnet>
        </Link>
      </div>
    </div>
  );
}

function SocialMediaHeader() {
  return (
    <div className="flex flex-row gap-5 pb-5">
      <Link
        href={"https://www.linkedin.com/in/hafizxh/"}
        className="cursor-pointer"
      >
        <Linkedin color="blue" />
      </Link>
      <Link href={"https://github.com/hafidzahm"} className="cursor-pointer">
        <Github color="blue" />
      </Link>
      <Link
        href={"https://www.instagram.com/hafizh.dev/"}
        className="cursor-pointer"
      >
        <Instagram color="blue" />
      </Link>
    </div>
  );
}

function CardQuotes() {
  return (
    <>
      <div className="min-h-[100vh] pt-60 lg:pt-0  flex justify-center items-center">
        <div className="flex flex-col max-w-6xl w-full justify-center items-center sm:p-2.5 md:p-10">
          <TrueFocus
            sentence="Crafting modern, user-centered web and mobile solutions."
            manualMode={false}
            blurAmount={3}
            borderColor="blue"
            animationDuration={1}
            pauseBetweenAnimations={0}
          />

          <p className="pt-20 lg:pt-15 text-center">
            I enjoy building fullstack applications that solve real problems —
            from financial tools to social platforms — helping businesses and
            users connect through functional, intuitive experiences.
          </p>
        </div>
      </div>
      <footer className="flex flex-col w-full justify-center items-center ">
        <h1 className="font-extralight text-center">hafizhahm123@gmail.com</h1>
        <h1 className="font-extralight text-center">
          Last Update on January 14, 2026
        </h1>
        {/* CV: 14-01-2026  */}
        <h1 className="font-extralight text-center">
          - All right reserved, 2026.
        </h1>
      </footer>
    </>
  );
}
