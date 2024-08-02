import { ReactionCursor } from "./ReactionCursor";

export const Reactor = () => {
  return (
    <div className="absolute top-0 left-0">
      <ReactionCursor isFilled />
    </div>
  );
};
