export type Position = {
  x: number;
  y: number;
};

export type ReactionType = {
  id: number;
  position: Position;
  user: {
    name: string;
    picture: string;
  };
  emoji: string;
  comment?: string;
};
