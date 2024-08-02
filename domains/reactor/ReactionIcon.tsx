import { MessageCircle } from "lucide-react";

const BLUE_50 = "#eff6ff";
const BLUE_400 = "#60a5fa";

type Props = {
  isFilled?: boolean;
};

export const ReactionIcon = ({ isFilled }: Props) => {
  const props = {
    color: BLUE_400,
    fill: isFilled ? BLUE_400 : BLUE_50,
    size: 32,
  };

  return <MessageCircle {...props} />;
};
