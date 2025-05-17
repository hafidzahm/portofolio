import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  return (
    <>
      <CardAbout />
      <CardExperience />
      <CardTechStack />
    </>
  );
}

function CardAbout() {
  return (
    <div className="min-h-[100vh]">
      <div className="flex flex-col max-w-8xl justify-between items-start sm:p-2.5 md:p-10">
        <h1 className="pt-10 text-3xl pb-5">About me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-start">
          <div className="order-1 md:order-2">
            <Image
              alt="profile-pic"
              src={"/profile.png"}
              width={100}
              height={100}
              quality={100}
              unoptimized={true}
              className="w-6xl h-full p-5"
            />
          </div>
          <div className="order-2 md:order-1">
            <p className="pb-10 text-lg">
              I'm Abdul Hafizh Mahfudin, a fullstack JavaScript developer with a
              passion for building practical and user-focused web applications.
              I made the shift from a retail career into tech through two full
              scholarships — the DBS Foundation Coding Camp for front-end
              development via Dicoding, and the Hacktiv8 Fullstack JavaScript
              Bootcamp funded by ZakatLoop.
            </p>
            <p className="pb-10 text-lg">
              My expertise is in front-end development using React, Next.js,
              Tailwind CSS, and component libraries like ShadCN UI and Flowbite.
              I focus on crafting responsive, accessible, and intuitive user
              interfaces that work well across devices.
            </p>
            <p className="pb-10 text-lg">
              On the backend, I work with Node.js, Express, PostgreSQL, and
              MongoDB, building fullstack applications end-to-end. I also use
              Next.js for SSR and API integration, and rely on TypeScript to
              write safe, scalable code for complex applications.
            </p>
            <p className="pb-10 text-lg">
              I’ve worked on real-world projects like budgeting apps, logistics
              tools, and news platforms — always aiming for clean code and great
              user experience. I enjoy working in teams, continuously learning,
              and building digital products that make an impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
function CardTechStack() {
  return (
    <div className="min-h-[100vh]">
      <div className="flex flex-col w-full max-w-8xl justify-between items-start md:p-15">
        <h1 className="pt-10 text-3xl pb-5">Tech Stack</h1>

        <Card className="w-full">
          <CardContent>
            <div className="grid gap-2 sm:p-5 lg:grid-cols-4 md:grid-cols-2">
              <BadgeTechStack
                link="/typescript-svgrepo-com.svg"
                nameIcon="TypeScript"
              />
              <BadgeTechStack link="/icons8-nextjs-64.png" nameIcon="Next" />
              <BadgeTechStack
                link="/sequelize-svgrepo-com.svg"
                nameIcon="Sequelize"
              />
              <BadgeTechStack link="/MongoDB.svg" nameIcon="MongoDB" />
              <BadgeTechStack link="/Socket.io.svg" nameIcon="Socket.io" />
              <BadgeTechStack link="/icons8-expo.svg" nameIcon="Expo" />
              <BadgeTechStack link="/Redis.svg" nameIcon="Redis" />
              <BadgeTechStack link="/GraphQL.svg" nameIcon="GraphQL" />
              <BadgeTechStack link="/PostgresSQL.svg" nameIcon="PosgreSQL" />
              <BadgeTechStack link="/icons8-apollo.svg" nameIcon="Apollo" />
              <BadgeTechStack link="/Express.svg" nameIcon="Express" />
              <BadgeTechStack link="/shadcn.webp" nameIcon="Shadcn" />
              <BadgeTechStack
                link="/tailwind-css-svgrepo-com.svg"
                nameIcon="Tailwind CSS"
              />
              <BadgeTechStack link="/flowbite.svg" nameIcon="Flowbite" />
              <BadgeTechStack
                link="/bootstrap-plain.svg"
                nameIcon="Bootstrap"
              />
              <BadgeTechStack link="/react.svg" nameIcon="React" />
              <BadgeTechStack
                link="/nodejs-svgrepo-com.svg"
                nameIcon="Nodejs"
              />
              <BadgeTechStack link="/brand-vercel.svg" nameIcon="Vercel" />
              <BadgeTechStack link="/firebase.svg" nameIcon="Firebase" />
              <BadgeTechStack link="/Azios.png" nameIcon="Axios" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

type BadgeTechStackType = {
  link: string;
  nameIcon: string;
  variant?: "default" | "neutral";
};

function BadgeTechStack({
  link,
  nameIcon,
  variant = "default",
}: BadgeTechStackType) {
  return (
    <Badge className="flex p-10 gap-5" variant={variant}>
      <Image
        src={link}
        width={40}
        height={40}
        quality={100}
        unoptimized={true}
        alt={nameIcon}
      />
      <h1 className="text-xl text-white font-extralight">{nameIcon}</h1>
    </Badge>
  );
}
function CardExperience() {
  return (
    <div className="min-h-[100vh]">
      <div className="max-w-8xl sm:p-2.5 md:p-10">
        <div>
          <TabExperience />
        </div>
      </div>
    </div>
  );
}

function TabExperience() {
  return (
    <Tabs defaultValue="education" className="max-w-[900px]">
      <div className="flex flex-col h-full gap-10 md:flex-row justify-center items-center w-full">
        <div>
          <h1 className="pt-10 text-3xl pb-5">Experiences</h1>
        </div>
        <TabsList className="grid w-full h-full sm:grid-cols-1 sm:grid-rows-1 md:grid-cols-3">
          <TabsTrigger value="education">EDUCATION</TabsTrigger>
          <TabsTrigger value="work">WORK EXPERIENCE</TabsTrigger>
          <TabsTrigger value="certification">CERTIFICATION</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="education">
        <Card>
          <CardContent className="grid gap-6">
            <SectionCard
              title="Full Stack JavaScript Immersive Program | Hacktiv8 (Remote)"
              dateEvent="January 2025 - May 2025"
              transcript="Transcript: Graduates"
              link="https://drive.google.com/file/d/1ra2jlAGkEQ5O3feljQjT4BXS5CbzECjY/view?usp=drive_link"
              points={[
                `An intensive fullstack development bootcamp focused on building scalable web applications using JavaScript, React, Node.js, and related technologies.`,
                `Awarded a full scholarship sponsored by ZakatLoop.`,
              ]}
            />
            <SectionCard
              title="  Dicoding x DBS Foundation Coding Camp 2024 – Bandung,
              Indonesia (Remote)"
              dateEvent="January 2024 - December 2024"
              points={[
                `Completed a structured front-end development program with an
                emphasis on HTML, CSS, JavaScript, and React.`,
                `Funded by the DBS Foundation Coding Camp scholarship`,
              ]}
            />
            <SectionCard
              title="Computer and Network Engineering | SMK Budi Mandiri – Sumedang, Indonesia"
              dateEvent="2016 – 2019"
              points={[
                `Studied basic computer systems, LAN configuration, network troubleshooting, and Windows OS installation.`,
              ]}
            />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="work">
        <Card>
          <CardContent className="grid gap-6">
            <SectionCard
              title="Retail Employee — PT. Toserba Selamat, Cianjur"
              dateEvent="February 2020 – July 2024"
              points={[
                `Provided daily in-person customer service to 200+ customers in a fast-paced retail environment`,
                `Assisted in inventory management and restocking, reducing out-of-stock issues by 15%`,
              ]}
            />
            <SectionCard
              title="IT Intern — PT. Baraya Telematika Nusantara, Jatinangor"
              dateEvent="July 2019 – September 2019"
              points={[
                `Installed CCTV systems across multiple buildings, ensuring full area coverage with no blind spots`,
                `Conducted routine maintenance to maintain 100% system uptime`,
              ]}
            />
            <SectionCard
              title="IT Intern — West Java Housing and Settlement Agency (Dinas Perumahan dan Permukiman), Bandung"
              dateEvent="January 2018 – March 2018"
              points={[
                `Configured LAN networks, installed routers/switches, and performed local device setup`,
                ` Installed Windows OS and handled basic network troubleshooting`,
              ]}
            />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="certification">
        <Card>
          <CardContent className="grid gap-6">
            <SectionCertificate
              title="Full Stack Javascript Developer | Hacktiv8"
              dateEvent="May 2025"
              certificateId="-"
              link="https://drive.google.com/file/d/1ru2puSAQ6m63InbLXZ26fugkwuhNJuVg/view?usp=drive_link"
            />
            <SectionCertificate
              title="Expert Front End Development | Dicoding Indonesia"
              dateEvent="December 2024"
              certificateId="1RXY2D3E1XVM"
              link="https://www.dicoding.com/certificates/1RXY2D3E1XVM"
            />
            <SectionCertificate
              title="Expert Front End Development | DBS Foundation Coding Camp 2024"
              dateEvent="December 2024"
              certificateId="DCC2024/PS/L3-FE-001"
              link="https://drive.google.com/file/d/14e9rbigA_kRlOUGrH_gOA9AX9XMncv5h/view?usp=drive_link"
            />
            <SectionCertificate
              title="Developing Front-End Apps with React | Coursera"
              dateEvent="November 2024"
              certificateId="BVK35K3DJBBF"
              link="https://www.coursera.org/account/accomplishments/verify/BVK35K3DJBBF"
            />
            <SectionCertificate
              title="Sertifikat Belajar ReactJS"
              dateEvent="November 2024"
              certificateId="BVK35K3DJBBF"
              link="https://codepolitan.com/c/WMIH2GM"
            />
            <SectionCertificate
              title="JavaScript (Basic) Certificate"
              dateEvent="May 2025"
              certificateId="ad8f8c4da112"
              link="https://www.hackerrank.com/certificates/ad8f8c4da112"
            />
            <SectionCertificate
              title=" React (Basic) Certificate"
              dateEvent="May 2025"
              certificateId="8ede3867ff8c"
              link="https://www.hackerrank.com/certificates/8ede3867ff8c"
            />
            <SectionCertificate
              title="CSS (Basic) Certificate"
              dateEvent="May 2025"
              certificateId="e7c4a2fa323e"
              link="https://www.hackerrank.com/certificates/e7c4a2fa323e"
            />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

type SectionCard = {
  title: string;
  dateEvent: string;
  points: string[];
  link?: string;
  transcript?: string;
};
type SectionCertificate = {
  title: string;
  dateEvent: string;
  certificateId: string;
  link: string;
};

function SectionCard({
  title,
  dateEvent,
  points,
  link = "",
  transcript = "",
}: SectionCard) {
  return (
    <section className="pb-5">
      <div className="pb-5">
        <h1 className="text-xl">{title}</h1>
        <h1 className="font-light">{dateEvent}</h1>
        <h1 className="font-light">
          <Link href={link} className="focus:font-bold">
            {transcript}
          </Link>
        </h1>
      </div>
      <div>
        {points.map((point, index) => {
          return (
            <h1 key={index} className="font-light">
              ▸ {point}
            </h1>
          );
        })}
      </div>
    </section>
  );
}
function SectionCertificate({
  title,
  dateEvent,
  certificateId,
  link,
}: SectionCertificate) {
  return (
    <section className="pb-5">
      <div>
        <Link href={link}>
          <h1 className="text-xl">{title}</h1>
        </Link>
        <h1 className="font-light">Issued: {dateEvent}</h1>
        <h1 className="font-light">
          Certificate ID:
          {certificateId}
        </h1>
      </div>
    </section>
  );
}
