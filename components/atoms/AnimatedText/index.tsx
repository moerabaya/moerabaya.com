import { motion } from "framer-motion";
import { AnimatedTextProps } from "motion";
import { useEffect, useState } from "react";
import AnimatedCharacters from "./AnimatedCharacters";

const AnimatedText = ({ text, type, finished }: AnimatedTextProps) => {
  const [replay, setReplay] = useState(true);
  const hideDuration = 0.85;
  const showDuration = 0.85;
  const childrenDuration = 0.01;

  useEffect(() => {
    if (replay && finished)
      setTimeout(() => finished(true), showDuration * 1000);
  }, [replay]);

  const placeholderText = [
    {
      type: type,
      text: text,
    },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: childrenDuration,
      },
    },
  };
  // Quick and dirt for the example
  const handleReplay = () => {
    setReplay(!replay);
    setTimeout(() => {
      setReplay(true);
    }, 600);
  };
  return (
    <motion.div
      className="App"
      initial="hidden"
      // animate="visible"
      animate={replay ? "visible" : "hidden"}
      variants={container}
    >
      <AnimatedCharacters
        text={text}
        type={type}
        hideDuration={hideDuration}
        showDuration={showDuration}
      />
    </motion.div>
  );
};

export default AnimatedText;
