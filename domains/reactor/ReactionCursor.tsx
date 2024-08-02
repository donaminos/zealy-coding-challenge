"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const BLUE_50 = "#eff6ff";
const BLUE_400 = "#60a5fa";

type Props = {
  isFilled?: boolean;
};

export const ReactionCursor = ({ isFilled }: Props) => {
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

  const props = {
    color: BLUE_400,
    fill: isFilled ? BLUE_400 : BLUE_50,
    size: 32,
  };

  return (
    <div
      className="absolute -translate-2/4 z-50"
      style={{ top: position.y, left: position.x }}
    >
      <MessageCircle {...props} />
    </div>
  );
};
