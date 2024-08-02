import React from "react";
import { CalendarDays } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { ReactionType } from "./types";
import { ReactionIcon } from "./ReactionIcon";

type Props = ReactionType & {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export const Reaction = ({
  position,
  author,
  onMouseEnter,
  onMouseLeave,
}: Props) => {
  return (
    <div
      className="absolute -translate-2/4 z-50 pointer-events-auto cursor-pointer"
      style={{ top: position.y, left: position.x }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <HoverCard openDelay={0}>
        <HoverCardTrigger asChild>
          <ReactionIcon isFilled />
        </HoverCardTrigger>
        <HoverCardContent className="w-80" side="right">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src={author.pictureUrl} />
              <AvatarFallback>{author.name}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm">
                The React Framework – created and maintained by @vercel.
              </p>
              <div className="flex items-center pt-2">
                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                <span className="text-xs text-muted-foreground">
                  Joined December 2021
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};
