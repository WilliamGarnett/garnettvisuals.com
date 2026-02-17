"use client";

import { useState, useEffect, useCallback } from "react";

const WILLIAM = "WILLIAM";
const GARNETT = "GARNETT";
const TYPE_SPEED = 90;

// Timeline (ms)
const INIT_DURATION = 20;
const INIT_FADE_OUT = 0;
const TYPE_START = INIT_DURATION + INIT_FADE_OUT + 0;
const LINE_PAUSE = 0;

export function HeroSection() {
  const [phase, setPhase] = useState<
    "init" | "init-out" | "typing" | "done"
  >("init");
  const [typed, setTyped] = useState("");
  const [showRest, setShowRest] = useState(false);

  // Phase transitions: init → init-out → typing
  useEffect(() => {
    const t2 = setTimeout(() => setPhase("typing"), TYPE_START);
    return () => {
      clearTimeout(t2);
    };
  }, []);

  // Typewriter effect
  const fullText = WILLIAM + "\n" + GARNETT;

  const startTyping = useCallback(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      const char = fullText[i - 1];
      if (char === "\n") {
        // Pause at line break
        setTyped(fullText.slice(0, i));
        clearInterval(interval);
        setTimeout(() => {
          // Continue typing second line
          let j = i;
          const interval2 = setInterval(() => {
            j++;
            if (j > fullText.length) {
              clearInterval(interval2);
              setPhase("done");
              setTimeout(() => setShowRest(true), 300);
              return;
            }
            setTyped(fullText.slice(0, j));
          }, TYPE_SPEED);
        }, LINE_PAUSE);
        return;
      }
      setTyped(fullText.slice(0, i));
    }, TYPE_SPEED);
  }, [fullText]);

  useEffect(() => {
    if (phase === "typing") {
      startTyping();
    }
  }, [phase, startTyping]);

  // Split typed text into lines for rendering
  const lines = typed.split("\n");

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 md:px-16 lg:px-24">
      

      {/* === PHASE: Main hero content === */}
      <div
        className={`flex w-full max-w-4xl flex-col justify-center self-start ${
          phase === "init" || phase === "init-out" ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Coordinate markers */}
        <span
          className={`absolute left-6 top-6 text-xs text-gray-mid ${
            showRest ? "opacity-100" : "opacity-0"
          }`}
        >
          x:0 y:0
        </span>
        <span
          className={`absolute right-6 top-6 text-xs text-gray-mid ${
            showRest ? "opacity-100" : "opacity-0"
          }`}
        >
          garnettvisuals.com
        </span>

        {/* Name with typewriter */}
        <h1 className="text-4xl font-bold leading-none tracking-tight md:text-6xl lg:text-7xl">
          {lines[0]}
          {lines.length === 1 && (
            <span className="animate-blink ml-1 inline-block h-[0.85em] w-[0.5em] bg-black align-baseline" />
          )}
          {lines.length > 1 && (
            <>
              <br />
              {lines[1]}
              <span
                className={`ml-1 inline-block h-[0.85em] w-[0.5em] bg-black align-baseline ${
                  phase === "done" ? "opacity-0  duration-500 delay-1000" : "animate-blink"
                }`}
              />
            </>
          )}
        </h1>

        {/* Title - wipe reveal */}
        <p
          className="mt-6 text-lg font-light tracking-wide text-gray-mid transition-[clip-path] duration-1500 ease-out md:text-xl"
          style={{
            clipPath: showRest
              ? "inset(0 0% 0 0)"
              : "inset(0 100% 0 0)",
          }}
        >
          Frontend Developer
        </p>

        {/* Tagline - wipe reveal */}
        <p
          className="mt-4 max-w-md text-sm text-gray-mid transition-[clip-path] duration-1500 ease-out delay-300"
          style={{
            clipPath: showRest
              ? "inset(0 0% 0 0)"
              : "inset(0 100% 0 0)",
          }}
        >
          {"// clarity through code"}
        </p>
      </div>

      {/* Bottom scroll indicator */}
      <div
        className={`absolute bottom-16 left-6 right-6 flex items-center gap-4 transition-all duration-700 delay-500 ${
          showRest ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="h-px flex-1 bg-gray-light" />
        <span className="text-xs text-gray-mid">scroll</span>
        <div className="h-px w-4 bg-gray-mid" />
      </div>
    </section>
  );
}
