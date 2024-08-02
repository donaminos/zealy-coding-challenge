"use client";

import { useState } from "react";

import { ReactionCursor } from "./ReactionCursor";
import { PositionType, ReactionType } from "./types";
import { Reaction } from "./Reaction";
import { ReactionForm } from "./ReactionForm";

const buildReaction = (position: PositionType) => {
  return {
    id: Math.random().toString(),
    createdAt: Date.now(),
    position,
    comment: "Great comment goes here...",
    author: {
      name: "Amine S",
      pictureUrl: "https://avatars.githubusercontent.com/u/5103153?v=4&size=64",
    },
  };
};

export const Reactor = () => {
  const [reactions, setReactions] = useState<Array<ReactionType>>([]);
  const [isCursorDisabled, setIsCursorDisabled] = useState(false);

  const handleClick = (position: PositionType) => {
    const newReaction = buildReaction(position);
    setReactions([...reactions, newReaction]);
  };

  const onMouseEnter = () => {
    setIsCursorDisabled(true);
  };

  const onMouseLeave = () => {
    setIsCursorDisabled(false);
  };

  return (
    <>
      {reactions.map((reaction) => (
        <ReactionForm
          key={reaction.id}
          {...reaction}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ))}

      <ReactionCursor onClick={handleClick} isDisabled={isCursorDisabled} />
    </>
  );
};
