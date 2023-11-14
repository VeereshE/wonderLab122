import { MotionVariantProps } from "./motion-components";

export const staggerChildren: MotionVariantProps = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export const staggerDiv: MotionVariantProps = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.4,
      delayChildren: 1.3, // Prev value - 1
    },
  },
};

export const bottomToToptextTransition: MotionVariantProps = {
  initial: {
    y: "50%",
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const TopToBottomtextTransition: MotionVariantProps = {
  initial: {
    y: "-50%",
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const textStaggerChildren: MotionVariantProps = {
  initial: {
    y: 120,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};
