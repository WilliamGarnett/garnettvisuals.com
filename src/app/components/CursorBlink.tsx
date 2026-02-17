"use client";

import { useState, useEffect } from "react";

interface CursorBlinkProps {
  className?: string;
  duration?: number;
}

export function CursorBlink({ className = "", duration = 4000 }: CursorBlinkProps) {
  const [blinking, setBlinking] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBlinking(false);
    }, duration);
    return () => clearTimeout(timeout);
  }, [duration]);

  return (
    <span
      className={`ml-1 inline-block h-[1.1em] w-[0.6em] bg-black align-text-bottom ${blinking ? "animate-blink" : "opacity-0"} ${className}`}
    />
  );
}
