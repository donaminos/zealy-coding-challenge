"use client";

import { useState } from "react";

import { Position, ReactionType } from "./types";

const emojis = ["😊", "😂", "❤️", "👍", "🎉", "🤔", "😍", "🚀"];

type props = {
  position: Position;
  onSubmit: (parapm: ReactionType) => void;
};

export const Form = ({ onSubmit, position }: props) => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [commentText, setCommentText] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (!selectedEmoji) {
      // emoji required
      return;
    }

    onSubmit({
      id: Date.now(),
      emoji: selectedEmoji,
      comment: commentText,
      position: {
        x: position.x,
        y: position.y,
      },
      user: {
        name: "Amine S.",
        picture: "https://avatars.githubusercontent.com/u/5103153?v=4&size=64",
      },
    });
  };

  return (
    <div
      className="fixed bg-white p-4 rounded-lg shadow-lg emoji-picker w-80 "
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      onClick={(e) => e.stopPropagation()}
    >
      <form onSubmit={handlerSubmit}>
        <fieldset className="mb-4">
          <legend className="text-sm font-semibold mb-2">
            Select an emoji:
          </legend>
          <div className="grid grid-cols-4 gap-2">
            {emojis.map((emoji, index) => (
              <label
                key={index}
                className="flex items-center justify-center cursor-pointer"
              >
                <input
                  type="radio"
                  name="emoji"
                  value={emoji}
                  checked={selectedEmoji === emoji}
                  onChange={() => setSelectedEmoji(emoji)}
                  className="hidden"
                  required
                />
                <span
                  className={`text-2xl hover:scale-125 transition-transform duration-200 ${
                    selectedEmoji === emoji
                      ? "ring-2 ring-blue-500 rounded-full"
                      : ""
                  }`}
                >
                  {emoji}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-semibold mb-1">
            Comment (optional):
          </label>
          <textarea
            id="comment"
            rows={4}
            className="w-full border rounded px-2 py-1"
            placeholder="Add a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-600 transition-colors duration-200"
          disabled={!selectedEmoji}
        >
          Save Reaction
        </button>
      </form>
    </div>
  );
};
