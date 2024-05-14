export const leftToRightTransition = {
  collapsed: {
    maxWidth: '0px',
    transition: {
      duration: 0.2,
      maxWidth: {
        delay: 0.2,
      },
    },
  },
  expanded: {
    maxWidth: '100000px',
    transition: {
      duration: 0.2,
      delay: 0.1,
    },
  },
};

export const menuTransition = {
  enter: {
    x: -500,
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: -500,
    opacity: 0,
  },
};

export const backdropVariants = {
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      when: 'beforeChildren',
      staggerChildren: 0.4,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      when: 'afterChildren',
      staggerChildren: 0.4,
    },
  },
};

export const modalVariants = {
  hidden: {
    opacity: 0,
    innerHeight: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      mass: 0.1,
      damping: 10,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
    outerHeight: 800,
  },
};
