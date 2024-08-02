"use client";

import { useEffect, useState } from "react";

import { PositionType } from "./types";
import { ReactionIcon } from "./ReactionIcon";

type Props = {
  onClick: (position: PositionType) => void;
};

export const ReactionCursor = ({ onClick }: Props) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleClick = () => {
    onClick(position);
  };

  return (
    <div
      className="absolute -translate-2/4 z-50"
      style={{ top: position.y, left: position.x }}
      onClick={handleClick}
    >
      <ReactionIcon />
    </div>
  );
};
