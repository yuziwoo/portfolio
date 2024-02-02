import React from 'react';
import styled from 'styled-components';
import { keyframeParallax } from '../../../utils/keyframes/keyframes';

/**
 * @Props
 * children: img태그를 하나 넣어주세요.
 * imgWidth: (이미지 width / 부모 엘리먼트 width)를 백분위로 계산한 값을 CSS변수에 넣어서 반응형으로 작업하세요.
 * - 예시 imgWidth: 'var(--parallax-example)';
 * speed: s를 포함한 문자열을 넣어주세요. (기본값: 20s)
 * dir: 'left' | 'right' (기본값: 'left')
 */

const Parallax = styled.div<{ $width?: string; $speed?: string; $dir?: 'left' | 'right' }>`
  width: 100%;
  position: relative;
  overflow: hidden;

  & > .wrap {
    width: ${(props) => (props.$width !== '100%' ? props.$width : '100%')};
    position: absolute;
    left: ${(props) => (props.$dir === 'left' ? 0 : 'auto')};
    right: ${(props) => (props.$dir === 'right' ? 0 : 'auto')};
    top: 0;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: ${(props) => (props.$speed !== '20s' ? props.$speed : '20s')};
  }

  & > .wrap > * {
    width: 100%;
    display: block;
  }

  & > .wrap:nth-child(1) {
    position: relative;
    opacity: 0;
  }

  & .wrap:nth-child(2) {
    animation-name: ${(props) =>
      props.$dir === 'left' ? keyframeParallax.left1 : keyframeParallax.right1};
  }
  & .wrap:nth-child(3) {
    animation-name: ${(props) =>
      props.$dir === 'left' ? keyframeParallax.left2 : keyframeParallax.right2};
  }
  & .wrap:nth-child(4) {
    animation-name: ${(props) =>
      props.$dir === 'left' ? keyframeParallax.left3 : keyframeParallax.right3};
  }
  & .wrap:nth-child(5) {
    animation-name: ${(props) =>
      props.$dir === 'left' ? keyframeParallax.left4 : keyframeParallax.right4};
  }
`;

interface ImgParallaxProps {
  children: React.ReactNode;
  imgWidth: string;
  speed?: string;
  dir?: 'left' | 'right';
}

const ImgParallax = ({ children, imgWidth, speed, dir }: ImgParallaxProps) => {
  return (
    <Parallax
      $dir={dir === 'right' ? 'right' : 'left'}
      $width={imgWidth ? imgWidth : '100%'}
      $speed={speed ? speed : '20s'}
    >
      <div className="wrap">{children}</div>
      <div className="wrap">{children}</div>
      <div className="wrap">{children}</div>
      <div className="wrap">{children}</div>
      <div className="wrap">{children}</div>
    </Parallax>
  );
};

export default ImgParallax;
