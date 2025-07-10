import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AnimatedTextProps } from "motion";

import AnimatedCharacters from "./AnimatedCharacters";

const AnimatedText = ({ text, type, finished, ...rest }: AnimatedTextProps) => {
  const [replay] = useState(true);
  const hideDuration = 0.85;
  const showDuration = 0.85;
  const childrenDuration = 0.01;

  useEffect(() => {
    if (replay && finished)
      setTimeout(() => finished(true), showDuration * 1000);
  }, [finished, replay]);

  const container = {
    visible: {
      transition: {
        staggerChildren: childrenDuration,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={replay ? "visible" : "hidden"}
      variants={container}
    >
      <AnimatedCharacters
        text={text}
        type={type}
        hideDuration={hideDuration}
        showDuration={showDuration}
        {...rest}
      />
    </motion.div>
  );
};

export default AnimatedText;
