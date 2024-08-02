import React from "react";
import { ReactionType } from "./types";
import { ReactionIcon } from "./ReactionIcon";

export const Reaction = ({ id, position }: ReactionType) => {
  return (
    <div
      className="absolute -translate-2/4"
      style={{ top: position.y, left: position.x }}
    >
      <ReactionIcon isFilled />
    </div>
  );
};
