import styled from 'styled-components';
import { keyframeParallax } from '../../../utils/keyframes/keyframes';

const Parallax = styled.div<{ $dir?: 'left' | 'right' }>`
  width: 100%;
  position: relative;
  overflow: hidden;

  & p {
    position: absolute;
    text-wrap: nowrap;
    width: max-content;
    left: ${(props) => (props.$dir === 'left' ? 0 : 'auto')};
    right: ${(props) => (props.$dir === 'right' ? 0 : 'auto')};
    top: 0;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: 20s;
  }

  & p:nth-child(1) {
    position: relative;
    opacity: 0;
  }

  & p:nth-child(2) {
    animation-name: ${(props) =>
      props.$dir === 'left' ? keyframeParallax.left1 : keyframeParallax.right1};
  }
  & p:nth-child(3) {
    animation-name: ${(props) =>
      props.$dir === 'left' ? keyframeParallax.left2 : keyframeParallax.right2};
  }
  & p:nth-child(4) {
    animation-name: ${(props) =>
      props.$dir === 'left' ? keyframeParallax.left3 : keyframeParallax.right3};
  }
  & p:nth-child(5) {
    animation-name: ${(props) =>
      props.$dir === 'left' ? keyframeParallax.left4 : keyframeParallax.right4};
  }
`;

interface TextParallaxProps {
  text: string;
  textStyle?: React.CSSProperties;
  speed?: string;
  dir?: 'left' | 'right';
}

const TextParallax = ({ text, textStyle, speed, dir }: TextParallaxProps) => {
  const animationDuration = `${speed ? speed : '20s'}`;
  const style = { ...textStyle, animationDuration };

  return (
    <Parallax $dir={dir === 'right' ? 'right' : 'left'}>
      <p style={style}>{text}</p>
      <p style={style}>{text}</p>
      <p style={style}>{text}</p>
      <p style={style}>{text}</p>
      <p style={style}>{text}</p>
    </Parallax>
  );
};

export default TextParallax;
