import { useEffect, useState } from "react";

export function useTypewriter(words: string[], speed = 100, delay = 1000, loop = true) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const current = index % words.length;
    const fullWord = words[current];

    let typeSpeed = speed;

    const tick = () => {
      if (isDeleting) {
        setText(prev => fullWord.substring(0, prev.length - 1));
      } else {
        setText(prev => fullWord.substring(0, prev.length + 1));
      }
    };

    if (!isDeleting && text === fullWord) {
      if (!loop && index >= words.length - 1) return;
      typeSpeed = delay;
      const timer = setTimeout(() => setIsDeleting(true), typeSpeed);
      return () => clearTimeout(timer);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex(prev => prev + 1);
      return;
    }

    const timer = setTimeout(tick, isDeleting ? Math.round(typeSpeed / 2) : typeSpeed);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, isDeleting, index, words, speed, delay, loop]);

  return text;
}
