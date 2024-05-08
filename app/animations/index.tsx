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
