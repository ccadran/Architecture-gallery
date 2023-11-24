export const menuSlide = {
  initial: {
    y: "-100%",
    x: "-60px",
  },
  enter: {
    y: "0%",
    x: "-60px",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: "-100%",
    x: "-60px",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.5 },
  },
};

export const textSlide = {
  initial: {
    y: "-20%",
    opacity: 0,
  },
  enter: (i) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 1, ease: [0.65, 0.05, 0.36, 1], delay: 0.08 * i },
  }),
  exit: (i) => ({
    y: "-100%",
    opacity: 0,

    transition: { duration: 1, ease: [0.65, 0.05, 0.36, 1], delay: 0.1 * i },
  }),
};

export const lineAnim = {
  initial: {
    width: "0%",
  },
  enter: (i) => ({
    width: "100%",
    transition: { duration: 1.2, ease: [0, 0.55, 0.45, 1], delay: 0.1 * i },
  }),
  exit: (i) => ({
    width: "0%",

    transition: { duration: 1, ease: [0, 0.55, 0.45, 1], delay: 0.3 + 0.1 * i },
  }),
};
