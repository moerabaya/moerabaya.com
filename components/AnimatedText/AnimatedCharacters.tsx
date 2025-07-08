import { motion } from "framer-motion";
import { AnimatedCharachtersProps } from "motion";
import styled from "styled-components";
import Text from "../Text";

const StyledAniamtedCharacters = styled(Text)`
  lineheight: "0.5em";
  display: flex;
  flex-wrap: wrap;
`;
// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimatedCharacters = ({
  hideDuration,
  showDuration,
  text,
  type,
  ...rest
}: AnimatedCharachtersProps) => {
  // Framer Motion variant object, for controlling animation
  const item = {
    hidden: {
      y: "200%",
      // color: "#FFFFFF",
      opacity: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: hideDuration,
      },
    },
    visible: {
      y: 0,
      // color: "#111111",
      opacity: 1,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: showDuration,
      },
    },
  };

  //  Split each word of props.text into an array
  const splitWords: any = text.split(" ");

  // Create storage array
  const words: any = [];

  // Push each word into words array
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(" "));
  }

  return (
    <StyledAniamtedCharacters as={type} {...rest}>
      {words.map((word: string, index: number) => {
        return (
          <span className="font-medium" key={index}>
            {words[index].flat().map((element: any, index: number) => {
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
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </span>
        );
      })}
      {/* {} */}
    </StyledAniamtedCharacters>
  );
};

export default AnimatedCharacters;
