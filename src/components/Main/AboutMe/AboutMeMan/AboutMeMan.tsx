import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  padding-top: 14rem;

  @media screen and (max-width: 860px) {
    padding-top: 6rem;
  }

  @media screen and (max-width: 430px) {
    padding-top: 4rem;
  }
`;
const threshold = Array.from({ length: 100 }, (_, idx) => idx * 0.01);

const AboutMeMan = () => {
  const ref = useRef<null | HTMLDivElement>(null);
  const [ratio, setRatio] = useState(0);

  const handleZoom = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      setRatio(Math.floor(entry.intersectionRatio * 100) * 0.01);
    });
  }, []);

  useEffect(() => {
    if (ref.current !== null) {
      const observer = new IntersectionObserver(handleZoom, { threshold });
      observer.observe(ref.current);
    }
  }, [ref]);

  return (
    <Div>
      <div ref={ref} style={{ overflow: 'hidden' }}>
        <img
          src="../img/section2/aboutme-man.jpg"
          alt="man img"
          style={{
            width: '100%',
            display: 'block',
            transformOrigin: 'top center',
            transform: `scale(${2 - ratio})`,
          }}
        />
      </div>
    </Div>
  );
};

export default AboutMeMan;
