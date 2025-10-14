import { useState, useEffect } from "react";

interface TerminalTextProps {
  text: string;
  speed?: number;
  className?: string;
}

export const TerminalText = ({ text, speed = 50, className = "" }: TerminalTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {displayText}
      {currentIndex < text.length && showCursor && (
        <span className="inline-block w-2 h-5 bg-primary ml-1 animate-pulse" />
      )}
    </span>
  );
};
