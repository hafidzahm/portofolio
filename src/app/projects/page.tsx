import {
  apollo,
  axios,
  expo,
  express,
  firebase,
  flowbite,
  mongodb,
  next,
  node,
  posgresql,
  react,
  redis,
  sequelize,
  shadcn,
  tailwind,
  typescript,
  vercel,
} from "@/components/IconTechStack";
import ImageCard from "@/components/ui/image-card";
import { Card } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Abdul Hafizh",
  description:
    "Here are my full-stack projects, built using a modern JavaScript stack. They showcase my skills in developing complete applications—including back-end APIs and responsive UIs—with React, Next.js, Node.js, and TypeScript.",
};

export default function ProjectPage() {
  return (
    <>
      <CardJumbotron />
    </>
  );
}

function CardJumbotron() {
  return (
    <div className="min-h-[100vh] pb-20">
      <div className="flex flex-col w-full max-w-5xl justify-between items-start md:p-10 sm:p-2.5">
        <h1 className="pt-10 text-3xl pb-5">My Projects</h1>
        <div className="gap-5">
          <Card>
            <div className="grid md:grid-cols-2 items-start sm:grid-cols-1 p-2.5 gap-5 max-w-6xl">
              <ImageCard
                caption="Quizz!"
                imageUrl="/quizzz.png"
                icon={[
                  sequelize,
                  express,
                  node,
                  redis,
                  react,
                  vercel,
                  tailwind,
                  flowbite,
                  axios,
                ]}
                projectLink="https://quizzz-swart.vercel.app/"
                description="Welcome to Quizzz — your go-to app for fun, fast, and smart quizzes! Challenge yourself, learn new things, or just enjoy a quick brain break. From general knowledge to science and pop culture, there’s always something new to try."
              ></ImageCard>
              <ImageCard
                caption="Pendekin API (PROGRESS)"
                imageUrl="/pendekin-api.png"
                icon={[sequelize, express, node, redis]}
                projectLink="https://pendekin-api.hafizh.web.id/r/pendekin-postman-docs"
                description="Pendekin API is a URL shortener backend service that allows users to register, log in, and create short links that redirect to original URLs via endpoints like /r/:shortId. It includes JWT authentication and user-specific link management features."
              ></ImageCard>
              <ImageCard
                caption="Geraimedia"
                imageUrl="/geraimedia-img.png"
                icon={[mongodb, next, vercel, typescript]}
                projectLink="https://geraimedia.vercel.app"
                description="A ecommerce book application inspired by Geraimedia, implementing basic auth, Login by Google,
                  implementing SSR and CSR component render by Nextjs, and infinite scroll. This project created with
                  Typescript, deployed with Vercel CLI"
              ></ImageCard>
              <ImageCard
                caption="Stockify"
                imageUrl="/stockify.png"
                icon={[
                  typescript,
                  react,
                  firebase,
                  shadcn,
                  express,
                  mongodb,
                  axios,
                ]}
                projectLink="https://stockify-project.web.app"
                description="Stockify was created to solve the inefficiencies and errors that often arise from manual, paper-based
                  logistics processes.
                  Account list:
                  (Driver) username: hafizh, password: batagor; (Warehouse) username: stockify, password: batagor; (Outlet) username: hektip-hck | hektip-bsd | hektip-rmt, password: batagor
                  "
              ></ImageCard>
              <ImageCard
                caption="Tumbear Mobile App"
                imageUrl="/tumbear.jpg"
                icon={[apollo, mongodb, expo, redis, typescript, vercel]}
                projectLink="https://github.com/hafidzahm/tumbear"
                description="A mobile application inspired by Tumblr, implementing basic auth, Login by Google, and server-client
                  caching"
              ></ImageCard>
              <ImageCard
                caption="TechSolve | Your Solve Buddy"
                imageUrl="/techsolve.png"
                icon={[
                  tailwind,
                  flowbite,
                  posgresql,
                  express,
                  sequelize,
                  axios,
                  react,
                  firebase,
                ]}
                projectLink="https://techsolve.hafizh.web.id"
                description="A web based application to read, create a problem-to-solve, answer with other user realtime, answer
                  with Gemini AI, and upvote/ downvote forum answer, include authentication, authorization and Login
                  by Google implementation, implementing Firebase for client hosting and AWS for server hosting."
              ></ImageCard>
              <ImageCard
                caption="TechNows | Read, Save, and Summarize News"
                imageUrl="/technows.png"
                icon={[
                  tailwind,
                  flowbite,
                  posgresql,
                  express,
                  sequelize,
                  axios,
                  react,
                  firebase,
                ]}
                projectLink="https://technows-portal.hafizh.web.id/"
                description="A web based application to read, save news, and summarize feature by Gemini AI API, and enabling
                  Login by Google auth, implementing authenication and authorization with JWT and Bcryptjs, and
                  Redux for managing react state, implementing Firebase for client hosting and AWS for server hosting.
                  And got >85% coverage testing"
              ></ImageCard>
              <ImageCard
                caption="Yummy YUM!"
                imageUrl="/yummy-yum-img.png"
                icon={[]}
                projectLink="https://deploy-preview-39--yummy-yum.netlify.app/"
                description="A mobile and web based mock-up for restaurant, implemented mobile-first design, web-app manifest,
                  application shell architecture."
              ></ImageCard>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// function EmailForm() {
//   return (
//     <div className="flex justify-center items-center">
//       <Card className="w-full max-w-4xl">
//         <CardHeader>
//           <CardTitle>Contact me with filling this form</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form
//             onSubmit={(e) => {
//               e.preventDefault(); // Prevent default form submission
//               const name = (document.getElementById("name") as HTMLInputElement)
//                 .value;
//               const email = (
//                 document.getElementById("email") as HTMLInputElement
//               ).value;
//               const message = (
//                 document.querySelector("textarea") as HTMLTextAreaElement
//               ).value;

//               // Construct mailto URL
//               const mailtoLink = `mailto:hafizhahm123@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(
//                 name
//               )}%0AEmail:%20${encodeURIComponent(
//                 email
//               )}%0A%0A${encodeURIComponent(message)}`;

//               // Open mailto link in a new tab
//               window.open(mailtoLink, "_blank");
//             }}
//           >
//             <div className="flex flex-col gap-6">
//               <div className="grid gap-2">
//                 <Label htmlFor="name">Name</Label>
//                 <Input id="name" type="text" placeholder="John Doe " required />
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="m@example.com"
//                   required
//                 />
//                 <Label htmlFor="message">Message</Label>
//                 <Textarea placeholder="Lets connect!" />
//               </div>
//             </div>
//             <CardFooter className="flex-col gap-2 pt-5">
//               <Button type="submit" className="w-full">
//                 Submit
//               </Button>
//             </CardFooter>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
