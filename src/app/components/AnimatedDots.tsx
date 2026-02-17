"use client";

import { useState, useEffect } from "react";

interface AnimatedDotsProps {
  text?: string;
  className?: string;
  duration?: number;
}

export function AnimatedDots({
  text = "Loading",
  className = "",
  duration = 3000,
}: AnimatedDotsProps) {
  const [dots, setDots] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 400);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setDots("...");
      setDone(true);
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [duration]);

  return (
    <span className={`font-mono ${className}`}>
      [{done ? `${text}...` : <>{text}<span className="inline-block w-[1.5ch] text-left">{dots}</span></>}
      ]
    </span>
  );
}
