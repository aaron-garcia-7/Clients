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
      stiffness: 50,
    },
  },
};

// Goals Section

export const goalsFade = {
  initial: {
    opacity: 0,
    x: 40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

// Rationale Section

export const containerRationale = {
  animate: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.3,
    },
  },
};

export const fadeRationale = {
  initial: {
    opacity: 0,
    scale: 0.6,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
    },
  },
};

// Area Section

// export const containerRationale = {
//   animate: {
//     transition: {
//       delayChildren: 0.6,
//       staggerChildren: 0.3,
//     },
//   },
// };

export const fadeLocation = {
  initial: {
    opacity: 0,
    scale: 0.6,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
    },
  },
};

// Contact From

export const containerForm = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
    },
  },
};

export const fadeGroupForm = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

export const fadeLateForm = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 1.4,
    },
  },
};

// Request Sent Card

export const containerCard = {
  animate: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.4,
    },
  },
};

export const fadeGroupCard = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};
