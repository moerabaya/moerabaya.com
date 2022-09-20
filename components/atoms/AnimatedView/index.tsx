import { motion } from "framer-motion";
import { ReactElement } from "react";


const AnimatedView = ({
	vertical = 0,
	children,
	duration = 1,
	delay = 0
}: {
	vertical?: number | string,
	children?: ReactElement,
	duration?: number,
	value?: number | string,
	delay?: number
}) => {
	const animation = {
    hidden: {
      y: vertical,
			opacity: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration, delay: delay }
    },
    visible: {
      y: 0,
			opacity: 1,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration, delay: delay }
    }
  };
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={animation}
		>{children}</motion.div>
	)
}

export default AnimatedView;