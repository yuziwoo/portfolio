import { keyframes } from 'styled-components';

export const keyframeParallax = {
  left1: keyframes`
    from {
      opacity: 1;
      transform: translateX(0);
    }
    25% {
      opacity: 1;
      transform: translateX(-100%);
    }
    30% {
      opacity: 0;
      transform: translateX(-100%);
    }
    70% {
      opacity: 0;
      transform: translateX(100%);
    }
    75% {
      opacity: 1;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  `,
  left2: keyframes`from {
    opacity: 1;
    transform: translateX(100%);
  }
  50% {
    opacity: 1;
    transform: translateX(-100%);
  }
  55% {
    opacity: 0;
    transform: translateX(-100%);
  }
  70% {
    opacity: 0;
    transform: translateX(100%);
  }
  75% {
    opacity: 1;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(100%);
  }`,
  left3: keyframes`from {
    opacity: 1;
    transform: translateX(100%);
  }
  25% {
    opacity: 1;
    transform: translateX(100%);
  }
  75% {
    opacity: 1;
    transform: translateX(-100%);
  }
  80% {
    opacity: 0;
    transform: translateX(-100%);
  }
  85% {
    opacity: 0;
    transform: translateX(100%);
  }
  90% {
    opacity: 1;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(100%);
  }`,
  left4: keyframes`from {
    opacity: 0;
    transform: translateX(-100%);
  }
  45% {
    opacity: 0;
    transform: translateX(100%);
  }
  50% {
    opacity: 1;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(-100%);
  }`,
  right1: keyframes`from {
    opacity: 1;
    transform: translateX(0);
  }
  25% {
    opacity: 1;
    transform: translateX(100%);
  }
  30% {
    opacity: 0;
    transform: translateX(100%);
  }
  70% {
    opacity: 0;
    transform: translateX(-100%);
  }
  75% {
    opacity: 1;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }`,
  right2: keyframes`from {
    opacity: 1;
    transform: translateX(-100%);
  }
  50% {
    opacity: 1;
    transform: translateX(100%);
  }
  55% {
    opacity: 0;
    transform: translateX(100%);
  }
  70% {
    opacity: 0;
    transform: translateX(-100%);
  }
  75% {
    opacity: 1;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(-100%);
  }`,
  right3: keyframes`from {
    opacity: 1;
    transform: translateX(-100%);
  }
  25% {
    opacity: 1;
    transform: translateX(-100%);
  }
  75% {
    opacity: 1;
    transform: translateX(100%);
  }
  80% {
    opacity: 0;
    transform: translateX(100%);
  }
  85% {
    opacity: 0;
    transform: translateX(-100%);
  }
  90% {
    opacity: 1;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(-100%);
  }`,
  right4: keyframes`from {
    opacity: 0;
    transform: translateX(100%);
  }
  45% {
    opacity: 0;
    transform: translateX(-100%);
  }
  50% {
    opacity: 1;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(100%);
  }`,
};
