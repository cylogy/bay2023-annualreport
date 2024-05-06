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
