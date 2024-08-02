import { EmojiClickData } from "emoji-picker-react";

export type PositionType = {
  x: number;
  y: number;
};

export type AuthorType = {
  name: string;
  pictureUrl: string;
};

export type ReactionType = {
  id: string;
  createdAt: number;
  position: PositionType;
  author: AuthorType;
  comment?: string;
  emoji: EmojiClickData;
};
