import { motion } from "framer-motion";
import { AnimatedCharactersProps } from "motion";
import styled from "styled-components";

import Text from "@/components/Text";

const StyledAnimatedText = styled(Text)`
  line-height: "0.5em";
  display: flex;
  flex-wrap: wrap;
`;

const AnimatedCharacters = ({
  hideDuration,
  showDuration,
  text,
  type,
  ...rest
}: AnimatedCharactersProps) => {
  // Framer Motion variant object, for controlling animation
  const item = {
    hidden: {
      y: "200%",
      opacity: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: hideDuration,
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: showDuration,
      },
    },
  };

  //  Split each word of props.text into an array
  const splitWords = text.split(" ");

  // Create storage array
  const words: string[][] = [];

  // Push each word into words array
  splitWords.forEach((item) => {
    words.push(item.split(" "));
  });

  return (
    <StyledAnimatedText as={type} {...rest}>
      {words.map((word, index) => {
        return (
          <span className="font-medium" key={index}>
            {word.flat().map((text: string, index: number) => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                    marginInlineEnd: "0.25em",
                  }}
                  key={index}
                >
                  <motion.span
                    style={{
                      display: "inline-block",
                      position: "relative",
                      letterSpacing: 0,
                    }}
                    variants={item}
                  >
                    {text}
                  </motion.span>
                </span>
              );
            })}
          </span>
        );
      })}
      {/* {} */}
    </StyledAnimatedText>
  );
};

export default AnimatedCharacters;
