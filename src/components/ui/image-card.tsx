import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IconType } from "@/types";
import Link from "next/link";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";

type Props = {
  imageUrl: string;
  caption: string;
  className?: string;
  icon: IconType[];
  projectLink?: string;
  description: string;
};

export default function ImageCard({
  imageUrl,
  caption,
  className,
  icon,
  projectLink = "",
  description,
}: Props) {
  return (
    <figure
      className={cn(
        "max-w-lg overflow-hidden flex flex-col justify-between rounded-base border-2 border-border bg-base font-base shadow-shadow",
        className
      )}
    >
      {/* tolong buatkan <img> yang tepat didalam <figure> ini */}
      <img
        src={imageUrl}
        alt={caption}
        className="h-[250px] w-full object-cover object-center"
      />
      <div>
        <Link href={projectLink}>
          <figcaption className="border-t-2 text-main-foreground border-border p-4">
            <h1 className="text-xl pb-5">{caption}</h1>
            <p className="font-light">{description}</p>
          </figcaption>
        </Link>
        <div className="border-t-2 bg-background text-main-foreground flex flex-row w-full flex-wrap gap-3 border-border p-4">
          {icon?.map((el, index) => {
            return (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <Avatar>
                    <AvatarImage src={el.iconStack} alt={el.iconInitial} />
                    <AvatarFallback>{el.iconInitial}</AvatarFallback>
                  </Avatar>
                </HoverCardTrigger>
                <HoverCardContent>{el.iconName}</HoverCardContent>
              </HoverCard>
            );
          })}
        </div>
      </div>
    </figure>
  );
}
