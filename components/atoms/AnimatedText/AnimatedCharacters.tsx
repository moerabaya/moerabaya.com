import React, { ReactElement } from "react";
import { motion } from "framer-motion";
import Wrapper from "./Wrapper";
import { AnimatedCharachtersProps } from "motion";
import Text from "../Text";

// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimatedCharacters = (props: AnimatedCharachtersProps) => {
  // Framer Motion variant object, for controlling animation
  const item = {
    hidden: {
      y: "200%",
      // color: "#FFFFFF",
			opacity: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: props.hideDuration }
    },
    visible: {
      y: 0,
      // color: "#111111",
			opacity: 1,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: props.showDuration }
    }
  };

  //  Split each word of props.text into an array
  const splitWords: any = props.text.split(" ");

  // Create storage array
  const words: any = [];

  // Push each word into words array
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word: any) => {
    return word.push("\u00A0");
  });


  // Get the tag name from tagMap
  // const Tag = React.createElement("h1");

  return (
    <Text as={props.type} style={{lineHeight: "0.5em"}}>
      {words.map((word: string, index: number) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index}>
            {words[index].flat().map((element: any, index: number) => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block"
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: "inline-block", top: "-0.1em", position: "relative" }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
      {/* {} */}
    </Text>
  );
};

export default AnimatedCharacters;
