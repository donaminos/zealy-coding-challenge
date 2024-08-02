"use client";

import { useState } from "react";

import { ReactionCursor } from "./ReactionCursor";
import { PositionType, ReactionType } from "./types";
import { Reaction } from "./Reaction";

export const Reactor = () => {
  const [reactions, setReactions] = useState<Array<ReactionType>>([]);

  const handleClick = (position: PositionType) => {
    const newReaction = {
      id: Math.random().toString(),
      createdAt: Date.now(),
      position,
      comment: "",
      author: {
        name: "Amine S",
        pictureUrl:
          "https://avatars.githubusercontent.com/u/5103153?v=4&size=64",
      },
    };

    setReactions([...reactions, newReaction]);
  };

  return (
    <>
      {reactions.map((reaction) => (
        <Reaction key={reaction.id} {...reaction} />
      ))}

      <ReactionCursor onClick={handleClick} />
    </>
  );
};
