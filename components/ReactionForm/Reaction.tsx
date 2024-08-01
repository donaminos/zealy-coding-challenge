import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { MessageCircle } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ReactionType } from "./types";

export const Reaction = ({ emoji, comment, user }: ReactionType) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <MessageCircle
          size={24}
          className="text-blue-500 hover:text-blue-600"
        />
      </HoverCardTrigger>

      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={user.picture} />
            <AvatarFallback>{user.name}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{emoji}</h4>
            {comment ? <p className="text-sm">{comment}</p> : null}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
