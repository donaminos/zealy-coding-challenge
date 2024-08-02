import React from "react";
import { formatDistanceToNow } from "date-fns";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Emoji } from "emoji-picker-react";
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
  emoji,
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
        <HoverCardContent className="w-80 py-1 px-2" side="right">
          <p className="text-xs text-slate-400 float-right">
            {formatDistanceToNow(createdAt, {
              addSuffix: true,
              includeSeconds: true,
            })}
          </p>
          <div className="flex gap-2 items-start my-2 w-full">
            <Avatar className="w-8 h-8">
              <AvatarImage src={author.pictureUrl} />
              <AvatarFallback>{author.name}</AvatarFallback>
            </Avatar>

            <Emoji unified={emoji.unified} size={25} />
            <div className="flex flex-col gap-1">
              <p className="text-sm">{comment}</p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};
