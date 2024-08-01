"use client";

import React, { useState, useEffect } from "react";

import { Cursor } from "./Cursor";
import { Form } from "./Form";
import { ReactionList } from "./ReactionList";
import { ReactionType } from "./types";

export const ReactionForm = () => {
  const [reactions, setReactions] = useState<Array<ReactionType>>([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [reactionPosition, setReactionPosition] = useState({ x: 0, y: 0 });
  const [showReactionForm, setShowReactionForm] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleClick = () => {
    setReactionPosition({ ...cursorPosition });
    setShowReactionForm(true);
  };

  const handleSaveReaction = (data: ReactionType) => {
    setReactions([...reactions, data]);
    setShowReactionForm(false);
  };

  return (
    <div>
      <ReactionList reactions={reactions} />

      {!showReactionForm && (
        <Cursor position={cursorPosition} onClick={handleClick} />
      )}

      {showReactionForm && (
        <Form onSubmit={handleSaveReaction} position={reactionPosition} />
      )}
    </div>
  );
};
