import Link from "next/link";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { HoverCardWithLinkType } from "@/types";

export function HoverCardWithLink({
  trigger,
  hoverContent,
  contentLink = "",
}: HoverCardWithLinkType) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{trigger}</HoverCardTrigger>
      <HoverCardContent>
        <Link href={contentLink}>{hoverContent}</Link>
      </HoverCardContent>
    </HoverCard>
  );
}
