"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Animation Speed Controls ---
const TYPING_SPEED = 0.05; // seconds per character for typing
const DELETING_SPEED = 0.03; // seconds per character for deleting
const PAUSE_AT_END = 1.5; // seconds to pause after typing a phrase
const PAUSE_BEFORE_NEXT_PHRASE = 0.5; // seconds to pause after deletion before new phrase starts

// --- Framer Motion Variants ---
const charVariants = {
  hidden: { opacity: 0 }, // No y-offset for purely horizontal feel
  visible: {
    opacity: 1,
    transition: {
      duration: 0.05,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0, // No y-offset for purely horizontal feel
    transition: {
      duration: 0.03,
      ease: "easeIn",
    },
  },
};

function TypewriterAnimation({ phrases }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedChars, setDisplayedChars] = useState([]);
  const [isTyping, setIsTyping] = useState(true);

  const currentPhrase = phrases[phraseIndex];

  useEffect(() => {
    let timer;

    if (isTyping) {
      // --- Typing Phase ---
      if (displayedChars.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setDisplayedChars(
            currentPhrase.slice(0, displayedChars.length + 1).split("")
          );
        }, TYPING_SPEED * 1000);
      } else {
        timer = setTimeout(() => {
          setIsTyping(false);
        }, PAUSE_AT_END * 1000);
      }
    } else {
      // --- Deleting Phase ---
      if (displayedChars.length > 0) {
        timer = setTimeout(() => {
          setDisplayedChars(displayedChars.slice(0, displayedChars.length - 1));
        }, DELETING_SPEED * 1000);
      } else {
        // Phrase fully deleted, move to next phrase and start typing
        timer = setTimeout(() => {
          setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          setIsTyping(true);
          setDisplayedChars([]);
        }, PAUSE_BEFORE_NEXT_PHRASE * 1000);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedChars, isTyping, phraseIndex, currentPhrase]);

  return (
    <div className="font-primary-purple font-mont text-5xl font-bold leading-[3.3rem]">
      <motion.div style={{ display: "inline-block" }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={currentPhrase + (isTyping ? "typing" : "deleting")}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 0.1,
                  staggerChildren: isTyping ? TYPING_SPEED : DELETING_SPEED,
                  staggerDirection: isTyping ? 1 : -1,
                },
              },
              exit: {
                opacity: 0,
                transition: { duration: PAUSE_BEFORE_NEXT_PHRASE * 0.8 },
              },
            }}
          >
            {displayedChars.map((char, index) => (
              <motion.span
                key={index}
                variants={charVariants}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default TypewriterAnimation;
