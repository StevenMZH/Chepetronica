import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const word1 = "PROCESS";
const word2 = "AUTOMATA";

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05 },
  }),
};

export default function ProjectTitle() {
  const containerControls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const scaleTimeout = setTimeout(() => {
      containerControls.start({
        y: 0,
        scale: 0.6,
        transition: {
          duration: 0.3,
          ease: "circInOut",
        },
      });
    }, 1000);

    const shrinkTimeout = setTimeout(() => {
      containerControls.start({
        height: 0,
        opacity: 0,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      });
    }, 1800); // espera después del scale

    return () => {
      clearTimeout(scaleTimeout);
      clearTimeout(shrinkTimeout);
    };
  }, [containerControls]);

  return (
    <motion.div
      ref={containerRef}
      className="row gap-10 overflow-hidden"
      animate={containerControls}
      initial={{ y: 0, scale: 1, height: "auto", opacity: 1 }}
    >
      {[word1, word2].map((word, wIndex) => (
        <div key={wIndex} className="font-L text-subtitle flex gap-1 blue">
          {word.split("").map((char, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
            >
              {char}
            </motion.div>
          ))}
        </div>
      ))}
    </motion.div>
  );
}
