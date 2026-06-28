import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ChevronDown } from "lucide-react";

export default function Hero({ onStart }) {
  return (
    <section className="hero">
      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        For My Special Other ❤️
      </motion.h1>

      <TypeAnimation
        sequence={[
          "Every love story is beautiful...",
          1500,
          "But ours is my favorite ❤️",
          2000,
          "Thank you for being in my life.",
          2000,
        ]}
        wrapper="p"
        repeat={Infinity}
        className="typing"
      />

      <motion.button
        onClick={onStart}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 30px #ff6eb6",
        }}
        whileTap={{ scale: 0.95 }}
      >
        Open My Heart 💌
      </motion.button>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="scrollDown"
      >
        <ChevronDown size={35} />
      </motion.div>
    </section>
  );
}