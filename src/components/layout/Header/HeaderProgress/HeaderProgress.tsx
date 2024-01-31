import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ProgressBar = styled.div<{ $scrolled?: boolean }>`
  opacity: ${(props) => (props.$scrolled ? 1 : 0)};
  transition: opacity 0.3s;
  width: 100%;
  height: 3px;
  overflow: hidden;

  & .progress {
    width: 100%;
    height: 100%;
    border-top-right-radius: 1.5px;
    border-bottom-right-radius: 1.5px;
    background-color: var(--color-red);
    transform-origin: center left;
    transform: scaleX(0);
  }
`;

const HeaderProgress = () => {
  const { scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrollTrigger = () => {
      setScrolled(true);
      window.removeEventListener('scroll', handleScrollTrigger);
    };

    window.addEventListener('scroll', handleScrollTrigger);
  }, []);

  return (
    <ProgressBar $scrolled={scrolled}>
      <motion.div className="progress" style={{ scaleX: scrollYProgress }}></motion.div>
    </ProgressBar>
  );
};

export default HeaderProgress;
