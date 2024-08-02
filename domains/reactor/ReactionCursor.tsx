"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

import { PositionType } from "./types";
import { ReactionIcon } from "./ReactionIcon";

type Props = {
  onClick: (position: PositionType) => void;
  isDisabled?: boolean;
};

export const ReactionCursor = ({ onClick, isDisabled }: Props) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const position = { x: event.clientX, y: event.clientY };
      setPosition(position);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleClick = () => {
    if (!isDisabled) {
      onClick(position);
    }
  };

  return (
    <div
      className={cn("absolute -translate-2/4", { hidden: isDisabled })}
      style={{ top: position.y, left: position.x }}
      onClick={handleClick}
    >
      <ReactionIcon />
    </div>
  );
};
