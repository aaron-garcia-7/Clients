export const container = {
  animate: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.4,
    },
  },
};

export const containerQuick = {
  animate: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.4,
    },
  },
};

export const containerDelay = {
  animate: {
    transition: {
      delayChildren: 1.2,
      staggerChildren: 0.4,
    },
  },
};

export const containerDelay2 = {
  animate: {
    transition: {
      delayChildren: 2,
      staggerChildren: 0.4,
    },
  },
};

export const appear = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const fade = {
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

export const semiFade = {
  initial: {
    opacity: 0,
    x: 40,
  },
  animate: {
    opacity: 0.5,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export const fadeDelay = {
  initial: {
    opacity: 0,
    x: 40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 2,
    },
  },
};

export const btnFade = {
  initial: {
    opacity: 0,
    x: 40,
  },
  animate: {
    opacity: 1,
    x: "-50%",
    transition: {
      duration: 1,
      delay: 3,
    },
  },
};

export const rise = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const arrowRise = {
  initial: {
    opacity: 0,
    x: "-50%",
    y: "50%",
  },
  animate: {
    opacity: 1,
    x: "-50%",
    y: "-50%",
    transition: {
      delay: 3,
      type: "spring",
      stiffness: 30,
    },
  },
};

export const textSlide = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};
