"use client";

import { useState } from "react";
import { SmilePlus } from "lucide-react";
import EmojiPickerReact, { Emoji, EmojiClickData } from "emoji-picker-react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

type Props = {
  onClick: (data: EmojiClickData) => void;
};
export const EmojiPicker = ({ onClick }: Props) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<null | EmojiClickData>(null);

  const handleClick = (data: EmojiClickData) => {
    setSelected(data);
    onClick(data);
    setOpen(false);
  };

  return (
    <PopoverPrimitive.Root onOpenChange={setOpen} open={open}>
      <PopoverPrimitive.Trigger>
        <div>
          {selected ? (
            <Emoji unified={selected.unified} size={25} />
          ) : (
            <SmilePlus aria-hidden="true" className="h-5 w-5" />
          )}
          <span className="sr-only">Pick an emoji</span>
        </div>
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Content>
        <EmojiPickerReact onEmojiClick={handleClick} />
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Root>
  );
};
