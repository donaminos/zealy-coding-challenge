export type PositionType = {
  x: number;
  y: number;
};

export type ReactionType = {
  id: string;
  createdAt: number;
  position: PositionType;
  author: {
    name: string;
    pictureUrl: string;
  };
  comment: string;
};
