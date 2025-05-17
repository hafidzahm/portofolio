import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

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
          <h1 className=" text-4xl py-5">I'm Abdul Hafizh Mahfudin </h1>{" "}
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
            "https://drive.google.com/file/d/1bJd-eOhh1bj5rjVq6kDMej6nCxyLt_Fk/view?usp=drive_link"
          }
          className="cursor-pointer"
        >
          <Button>Download CV</Button>
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
      <div className="min-h-[100vh] flex justify-center items-center">
        <div className="flex flex-col max-w-6xl w-full justify-center items-center sm:p-2.5 md:p-10">
          <h1 className="text-5xl py-5 text-center">
            Crafting modern, user-centered web and mobile solutions.{" "}
          </h1>
          <p className="pb-10 text-center">
            I enjoy building fullstack applications that solve real problems —
            from financial tools to social platforms — helping businesses and
            users connect through functional, intuitive experiences.
          </p>
        </div>
      </div>
      <footer className="flex justify-center items-center ">
        <h1 className="font-extralight ">
          Updated May 2025 | Abdul Hafizh Mahfudin - All right reserved.
        </h1>
      </footer>
    </>
  );
}
