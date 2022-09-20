import { motion } from "framer-motion";
import { AnimatedTextProps } from "motion";
import { useState } from "react";
import AnimatedCharacters from "./AnimatedCharacters";

const AnimatedText = ({
	text,
	type
}: AnimatedTextProps) => {
	const [replay, setReplay] = useState(true);

	const placeholderText = [
    {
      type: type,
      text: text
    }
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
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
			<AnimatedCharacters text={text} type={type} />
    </motion.div>
	)
}

export default AnimatedText;