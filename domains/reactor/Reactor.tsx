"use client";

import { useState } from "react";

import { ReactionCursor } from "./ReactionCursor";
import { PositionType, ReactionType } from "./types";
import { Reaction } from "./Reaction";
import { ReactionForm } from "./ReactionForm";

const author = {
  name: "Amine S",
  pictureUrl: "https://avatars.githubusercontent.com/u/5103153?v=4&size=64",
};

export const Reactor = () => {
  const [reactions, setReactions] = useState<Array<ReactionType>>([]);
  const [isCursorDisabled, setIsCursorDisabled] = useState(false);
  const [formPosition, setFormPosition] = useState<PositionType | null>(null);

  const handleCursorClick = (position: PositionType) => {
    setFormPosition(position);
  };

  const onMouseEnter = () => {
    setIsCursorDisabled(true);
  };

  const onMouseLeave = () => {
    setIsCursorDisabled(false);
  };

  const handleSubmit = (payload: ReactionType) => {
    setFormPosition(null);
    setIsCursorDisabled(false);
    setReactions((prevState) => [...prevState, payload]);
  };

  return (
    <>
      {reactions.map((reaction) => (
        <Reaction
          key={reaction.id}
          {...reaction}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ))}

      {formPosition ? (
        <ReactionForm
          position={formPosition}
          author={author}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onSubmit={handleSubmit}
        />
      ) : null}

      <ReactionCursor
        onClick={handleCursorClick}
        isDisabled={isCursorDisabled}
      />
    </>
  );
};
