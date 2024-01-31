import { useMemo } from 'react';
import styled from 'styled-components';

const Liner = styled.div`
  width: 100%;
  height: 7vw;
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;

  & .block {
    opacity: 0.3;
    border: 2px solid white;
    // background: white;
    width: 6.2%;
    height: 100%;
    border-radius: 1.2vw;
    // animation-name: blink;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
`;

const MainLiner = () => {
  const blocks = useMemo(() => Array.from({ length: 15 }, (_, idx) => 14 - idx), []);
  return (
    <div className="main-liner">
      <Liner>
        {blocks.map((num) => (
          <div className="block" key={num} style={{ animationDelay: `${num * 0.2}s` }}></div>
        ))}
      </Liner>
      <Liner>
        {blocks.map((num) => (
          <div className="block" key={num} style={{ animationDelay: `${0.4 + num * 0.2}s` }}></div>
        ))}
      </Liner>
      <Liner>
        {blocks.map((num) => (
          <div className="block" key={num} style={{ animationDelay: `${0.8 + num * 0.2}s` }}></div>
        ))}
      </Liner>
      <Liner>
        {blocks.map((num) => (
          <div className="block" key={num} style={{ animationDelay: `${1.2 + num * 0.2}s` }}></div>
        ))}
      </Liner>
    </div>
  );
};

export default MainLiner;
