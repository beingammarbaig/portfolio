export const fadeIn = (direction, delay) => ({
  hidden: {
    y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
    opacity: 0,
    x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 1.2,
      delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});

export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0.2) => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});

export const scaleIn = (delay = 0) => ({
  hidden: { scale: 0.85, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 80, damping: 15, delay },
  },
});

export const slideUp = (delay = 0) => ({
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 90, damping: 18, delay },
  },
});
