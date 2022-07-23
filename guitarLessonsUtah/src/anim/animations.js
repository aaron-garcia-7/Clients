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
    pointerEvent: "none",
  },
  animate: {
    opacity: 1,
    x: "-50%",
    y: "-50%",
    pointerEvent: "all",
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

//
// About Mark Page
//

export const containerMark = {
  animate: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.2,
    },
  },
};

export const containerMarkArticle = {
  animate: {
    transition: {
      delayChildren: 2,
      staggerChildren: 0.4,
    },
  },
};

export const fadeUp = {
  initial: {
    opacity: 0,
    y: "20%",
  },
  animate: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 1,
    },
  },
};

export const fadeMarkStyles = {
  initial: {
    opacity: 0,
    x: 40,
    y: "-40%",
  },
  animate: {
    opacity: 1,
    x: 0,
    y: "-40%",
    transition: {
      duration: 1,
    },
  },
};
export const fadeMarkStylesMobile = {
  initial: {
    opacity: 0,
    x: 40,
    y: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const imgFade = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 0.4,
    },
  },
};

// Policies Page

export const containerPoliciesArticle = {
  animate: {
    transition: {
      delayChildren: 1.6,
      staggerChildren: 0.4,
    },
  },
};

// Links Page

export const containerLinksArticle = {
  animate: {
    transition: {
      delayChildren: 1.6,
      staggerChildren: 0.18,
    },
  },
};

export const linksFade = {
  initial: {
    opacity: 0,
    x: 80,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export const linksFadeUp = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  animate: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 1,
    },
  },
};
