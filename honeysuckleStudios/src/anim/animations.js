// Lash Card animations

export const containerCards = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.3,
    },
  },
};

export const springCards = {
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

export const springCardsMobile = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 50,
    },
  },
};

// Location Items animations

export const containerLinks = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.3,
    },
  },
};

export const fadeLinks = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      type: "ease",
    },
  },
};
