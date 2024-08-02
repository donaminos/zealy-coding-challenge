import { MessageCircle } from "lucide-react";
import { forwardRef } from "react";
const BLUE_50 = "#eff6ff";
const BLUE_400 = "#60a5fa";

type Props = {
  isFilled?: boolean;
};

export const ReactionIcon = forwardRef<SVGSVGElement, Props>(
  ({ isFilled }, ref) => {
    const props = {
      color: BLUE_400,
      fill: isFilled ? BLUE_400 : BLUE_50,
      size: 32,
    };

    return <MessageCircle {...props} ref={ref} />;
  }
);

// Eslint complains about display name missing
ReactionIcon.displayName = "ReactionIcon";
