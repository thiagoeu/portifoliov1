import { useState, useEffect } from "react";

/**
 * Hook customizado para efeito de máquina de escrever com limpeza segura de timer único.
 */
export const useTypewriter = (
  words = [],
  { typingSpeed = 100, deletingSpeed = 50, pauseDelay = 2000 } = {}
) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return undefined;

    const currentWord = words[wordIndex % words.length];
    const isWordComplete = !isDeleting && displayText === currentWord;
    const isWordEmpty = isDeleting && displayText === "";

    const delay = isWordComplete
      ? pauseDelay
      : isDeleting
        ? deletingSpeed
        : typingSpeed;

    const timer = setTimeout(() => {
      if (isWordComplete) {
        setIsDeleting(true);
      } else if (isWordEmpty) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        const nextLength = displayText.length + (isDeleting ? -1 : 1);
        setDisplayText(currentWord.slice(0, nextLength));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [words, wordIndex, displayText, isDeleting, typingSpeed, deletingSpeed, pauseDelay]);

  return displayText;
};
