"use client";

import { useEffect, useState } from "react";

export function useTypewriter(
  words: string[],
  speed = 100,
  delay = 1000,
  loop = true
) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];

    let typingSpeed = isDeleting ? speed / 2 : speed;

    const timeout = setTimeout(() => {
      setText(
        isDeleting
          ? current.substring(0, text.length - 1)
          : current.substring(0, text.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((i) => i + 1);

        if (!loop && index >= words.length - 1) return;
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words, speed, delay, loop]);

  return text;
}
