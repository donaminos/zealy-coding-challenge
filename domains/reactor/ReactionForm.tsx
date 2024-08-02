import React, { FormEvent, useState } from "react";
import { SendHorizontal } from "lucide-react";
import { EmojiClickData } from "emoji-picker-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { PositionType, AuthorType, ReactionType } from "./types";
import { ReactionIcon } from "./ReactionIcon";
import { EmojiPicker } from "./EmojiPicker";

type Args = {
  position: PositionType;
  author: AuthorType;
  emoji: EmojiClickData;
  comment?: string;
};
const buildReaction = ({
  position,
  comment,
  author,
  emoji,
}: Args): ReactionType => {
  return {
    id: Math.random().toString(),
    createdAt: Date.now(),
    position,
    comment,
    author,
    emoji,
  };
};

type FormProps = {
  position: PositionType;
  author: AuthorType;
  onSubmit: (payload: ReactionType) => void;
};

const Form = ({ position, author, onSubmit }: FormProps) => {
  const [comment, setComment] = useState("");
  const [emoji, setEmoji] = useState<EmojiClickData | null>(null);
  const [isEmojiMissing, setIsEmojiMissing] = useState(false);

  const handleEmojiSelect = (selectedEmoji: EmojiClickData) => {
    setEmoji(selectedEmoji);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!emoji) {
      setIsEmojiMissing(true);
      return;
    }
    const payload = buildReaction({ position, emoji, comment, author });
    onSubmit(payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-2 items-center justify-center pointer-events-auto">
        <div>
          <Avatar className="w-8 h-8">
            <AvatarImage src={author.pictureUrl} />
            <AvatarFallback>{author.name}</AvatarFallback>
          </Avatar>
        </div>
        <div className={cn({ "text-red-400": isEmojiMissing })}>
          <EmojiPicker onClick={handleEmojiSelect} />
        </div>
        <div className="basis-2/3">
          <label htmlFor="comment" className="sr-only">
            Comment
          </label>
          <input
            id="comment"
            name="comment"
            type="comment"
            placeholder="Enter your feedback"
            className="w-full block p-2 rounded-md text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 placeholder:text-xs"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
        </div>
        <div>
          <Button variant="secondary" size="icon" type="submit">
            <SendHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </form>
  );
};

type Props = {
  position: PositionType;
  author: AuthorType;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onSubmit: (payload: ReactionType) => void;
};

export const ReactionForm = ({
  author,
  position,
  onMouseLeave,
  onMouseEnter,
  onSubmit,
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
          <Form onSubmit={onSubmit} author={author} position={position} />
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};
