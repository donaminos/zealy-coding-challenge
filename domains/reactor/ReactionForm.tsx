import { SendHorizontal, SmilePlus } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ReactionType } from "./types";
import { ReactionIcon } from "./ReactionIcon";

type Props = ReactionType & {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const Form = ({ author }: { author: { name: string; pictureUrl: string } }) => {
  return (
    <div className="flex gap-2 items-center">
      <div>
        <Avatar className="w-8 h-8">
          <AvatarImage src={author.pictureUrl} />
          <AvatarFallback>{author.name}</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <span>
          <SmilePlus aria-hidden="true" className="h-5 w-5" />
          <span className="sr-only">Pick an emoji</span>
        </span>
      </div>
      <div className="basis-2/3">
        <label htmlFor="comment" className="sr-only">
          Comment
        </label>
        <input
          id="comment"
          name="comment"
          type="comment"
          placeholder="Enter your comment here"
          className="w-full block p-2 rounded-md text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 placeholder:text-xs"
        />
      </div>
      <div>
        <Button variant="secondary" size="icon">
          <SendHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export const ReactionForm = ({
  author,
  position,
  onMouseLeave,
  onMouseEnter,
}: Props) => {
  return (
    <div
      className="absolute -translate-2/4 z-50 pointer-events-auto cursor-pointer"
      style={{ top: position.y, left: position.x }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <HoverCard openDelay={0} open>
        <HoverCardTrigger>
          <ReactionIcon isFilled />
        </HoverCardTrigger>
        <HoverCardContent className="w-full p-1" side="right">
          <Form author={author} />
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};
