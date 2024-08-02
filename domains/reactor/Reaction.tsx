import React from "react";
import { formatDistanceToNow } from "date-fns";

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
  comment,
  createdAt,
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
        <HoverCardTrigger>
          <ReactionIcon isFilled />
        </HoverCardTrigger>
        <HoverCardContent className="w-80 p-2" side="right">
          <div className="flex gap-2 items-start">
            <Avatar className="w-8 h-8">
              <AvatarImage src={author.pictureUrl} />
              <AvatarFallback>{author.name}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <p className="text-sm">{comment}</p>
              <p className="text-xs text-muted-foreground">
                {formatDistanceToNow(createdAt, {
                  addSuffix: true,
                  includeSeconds: true,
                })}
              </p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};
