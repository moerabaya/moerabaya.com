import { motion } from "framer-motion";
import React, { ReactElement } from "react";

interface AniamtedViewProps {
  vertical?: number | string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  duration?: number;
  value?: number | string;
  delay?: number;
  animate?: boolean;
}
const AnimatedView = ({
  vertical = 0,
  animate = true,
  children,
  duration = 1,
  delay = 0,
  ...rest
}: AniamtedViewProps) => {
  const animation = {
    hidden: {
      y: vertical,
      opacity: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration, delay: delay },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration, delay: delay },
    },
  };
  return (
    <motion.div
      initial="hidden"
      animate={animate ? "visible" : "hidden"}
      variants={animation}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedView;
