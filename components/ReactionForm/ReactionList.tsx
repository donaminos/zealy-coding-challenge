"use client";

import { Reaction } from "./Reaction";
import { ReactionType } from "./types";

type Props = {
  reactions: Array<ReactionType>;
};

export const ReactionList = ({ reactions }: Props) => {
  return reactions.map((reaction) => (
    <div
      key={reaction.id}
      className="absolute"
      style={{
        left: `${reaction.position.x}px`,
        top: `${reaction.position.y}px`,
      }}
    >
      <div
        className="relative cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Reaction {...reaction} />
      </div>
    </div>
  ));
};
