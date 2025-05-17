import {
  apollo,
  axios,
  expo,
  express,
  firebase,
  flowbite,
  mongodb,
  next,
  posgresql,
  react,
  redis,
  sequelize,
  shadcn,
  tailwind,
  typescript,
  vercel,
} from "@/components/IconTechStack";
import { Card, CardContent } from "@/components/ui/card";
import ImageCard from "@/components/ui/image-card";

export default function ProjectPage() {
  return (
    <>
      <CardJumbotron />
    </>
  );
}

function CardJumbotron() {
  return (
    <div className="min-h-[100vh]">
      <div className="flex flex-col max-w-8xl justify-between items-start md:p-10 sm:p-2.5">
        <h1 className="pt-10 text-3xl pb-5">My Projects</h1>
        <div className="gap-5">
          <Card>
            <CardContent>
              <div className="grid md:grid-cols-2 items-start sm:grid-cols-1 gap-5 max-w-6xl">
                <ImageCard
                  caption="Geraimedia"
                  imageUrl="https://hips.hearstapps.com/hmg-prod/images/flowers-trees-and-bushes-reach-their-peak-of-full-bloom-in-news-photo-1678292967.jpg?resize=300:*"
                  icon={[mongodb, next, vercel, typescript]}
                  projectLink="https://geraimedia.vercel.app"
                  description="A ecommerce book application inspired by Geraimedia, implementing basic auth, Login by Google,
                  implementing SSR and CSR component render by Nextjs, and infinite scroll. This project created with
                  Typescript, deployed with Vercel CLI"
                ></ImageCard>
                <ImageCard
                  caption="Stockify"
                  imageUrl="https://hips.hearstapps.com/hmg-prod/images/flowers-trees-and-bushes-reach-their-peak-of-full-bloom-in-news-photo-1678292967.jpg?resize=300:*"
                  icon={[
                    typescript,
                    react,
                    firebase,
                    shadcn,
                    express,
                    mongodb,
                    axios,
                  ]}
                  projectLink="https://github.com/rmt-59-finalproject/client"
                  description="Stockify was created to solve the inefficiencies and errors that often arise from manual, paper-based

                  logistics processes."
                ></ImageCard>
                <ImageCard
                  caption="Tumbear Mobile App"
                  imageUrl="https://hips.hearstapps.com/hmg-prod/images/flowers-trees-and-bushes-reach-their-peak-of-full-bloom-in-news-photo-1678292967.jpg?resize=300:*"
                  icon={[apollo, mongodb, expo, redis, typescript, vercel]}
                  projectLink="https://github.com/hafidzahm/tumbear"
                  description="A mobile application inspired by Tumblr, implementing basic auth, Login by Google, and server-client
                  caching"
                ></ImageCard>
                <ImageCard
                  caption="TechSolve | Your Solve Buddy"
                  imageUrl="https://hips.hearstapps.com/hmg-prod/images/flowers-trees-and-bushes-reach-their-peak-of-full-bloom-in-news-photo-1678292967.jpg?resize=300:*"
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
                  projectLink="https://techsolve-5ccf6.web.app/"
                  description="A web based application to read, create a problem-to-solve, answer with other user realtime, answer
                  with Gemini AI, and upvote/ downvote forum answer, include authentication, authorization and Login
                  by Google implementation, implementing Firebase for client hosting and AWS for server hosting."
                ></ImageCard>
                <ImageCard
                  caption="TechNows | Read, Save, and Summarize News"
                  imageUrl="https://hips.hearstapps.com/hmg-prod/images/flowers-trees-and-bushes-reach-their-peak-of-full-bloom-in-news-photo-1678292967.jpg?resize=300:*"
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
                  imageUrl="https://hips.hearstapps.com/hmg-prod/images/flowers-trees-and-bushes-reach-their-peak-of-full-bloom-in-news-photo-1678292967.jpg?resize=300:*"
                  icon={[]}
                  projectLink="https://deploy-preview-39--yummy-yum.netlify.app/"
                  description="A mobile and web based mock-up for restaurant, implemented mobile-first design, web-app manifest,
                  application shell architecture."
                ></ImageCard>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
