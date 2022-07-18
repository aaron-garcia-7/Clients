export const fade = {
  initial: {
    opacity: 0,
    x: 40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: 0.4,
    },
  },
};

// SubSection

export const container = {
  animate: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.4,
    },
  },
};

export const containerDelay = {
  animate: {
    transition: {
      delayChildren: 1.6,
      staggerChildren: 0.4,
    },
  },
};

export const fadeGroup = {
  initial: {
    opacity: 0,
    x: 40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export const vanFade = {
  initial: {
    x: 420,
  },
  animate: {
    x: 0,
    transition: {
      duration: 1.2,
      delay: 0.4,
    },
  },
};

export const vanFadeAlt = {
  initial: {
    x: 500,
  },
  animate: {
    x: 80,
    transition: {
      duration: 1.2,
      delay: 0.4,
    },
  },
};

// Services Section

export const containerCards = {
  animate: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.4,
    },
  },
};

export const fadeCards = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      type: "spring",
      // ease: "anticipate",
      stiffness: 50,
    },
  },
};
