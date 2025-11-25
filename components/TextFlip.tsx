import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface TextFlipProps {
  words: string[];
  interval?: number; // ms between flips
  className?: string; // apply to the flipping text element
}

const TextFlip: React.FC<TextFlipProps> = ({ words, interval = 2500, className }) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span aria-live="polite" style={{ display: 'inline-block', perspective: 1000 }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, rotateX: 90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          exit={{ opacity: 0, rotateX: -90 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`block will-change-transform ${className ?? ''}`}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default TextFlip;
