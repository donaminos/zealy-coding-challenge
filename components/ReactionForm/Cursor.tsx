import { MessageCircle } from "lucide-react";
import { Position } from "./types";

type Props = {
  position: Position;
  onClick: () => void;
};

export const Cursor = ({ position, onClick }: Props) => {
  return (
    <div
      className="fixed cursor-pointer"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      onClick={onClick}
    >
      <MessageCircle size={24} className="text-blue-500 hover:text-blue-600" />
    </div>
  );
};
