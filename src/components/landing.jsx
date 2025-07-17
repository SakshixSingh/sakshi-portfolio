import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const names = [
  "Sakshi 🇬🇧",
  "साक्षी 🇮🇳",
  "Sakshi 🇫🇷",
  "Sakshi 🇪🇸",
  "サクシー 🇯🇵",
  "삭시 🇰🇷",
  "Sakshi 🇮🇹",
  "Sakshi 🇧🇷",
];

export default function Landing() {
  const [index, setIndex] = useState(0);
  const [showFinal, setShowFinal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (index < names.length - 1) {
      const timeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 600);
      return () => clearTimeout(timeout);
    } else {
      // Final name: show it, then go to homepage
      setShowFinal(true);
      const timeout = setTimeout(() => {
        navigate("/home");
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [index, navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-[#14101d] text-[#ddd4fc] text-4xl font-semibold">
      <div className="flex gap-3">
        <span>Hi! I'm</span>
        <AnimatePresence mode="wait">
          <motion.span
            key={names[index]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={index < names.length - 1 ? { opacity: 0, y: -20 } : {}}
            transition={{ duration: 0.3 }}
            className="ml-2"
          >
            {names[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
