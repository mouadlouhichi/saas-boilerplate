import React, { memo, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { useWizard } from "react-use-wizard";

const variants: Variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 800 : -800,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 800 : -800,
      opacity: 0
    };
  }
};

interface Props {
  children: React.ReactNode;
  previousStep: React.MutableRefObject<number>;
  className?: string;
}

const AnimatedStep: React.FC<Props> = memo(
  ({ children, previousStep: previousStepIndex, className }) => {
    const { activeStep } = useWizard();

    useEffect(() => {
      console.log("activeStep", activeStep, previousStepIndex);
      previousStepIndex.current = activeStep;
    }, [activeStep, previousStepIndex]);

    return (
      <motion.div
        className={className}
        custom={activeStep - previousStepIndex.current}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 40
        }}
      >
        {children}
      </motion.div>
    );
  }
);

// Add the display name to the component
AnimatedStep.displayName = "AnimatedStep";

export default AnimatedStep;
