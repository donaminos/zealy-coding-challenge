import { MessageCircle } from "lucide-react";

const BLUE_400 = "#60a5fa";

type Props = {
  isFilled?: boolean;
};

export const ReactionCursor = ({ isFilled }: Props) => {
  const props = isFilled
    ? {
        fill: BLUE_400,
        color: BLUE_400,
      }
    : {
        color: BLUE_400,
      };

  return <MessageCircle {...props} />;
};
