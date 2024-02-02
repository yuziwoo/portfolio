import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const animationSpaceMan = keyframes`
from{
  transform: translateY(5%) rotate(3deg);
}
to {
  transform: translateY(-5%) rotate(-3deg);
}
`;

const Banner = styled.div`
  width: 100%;
  position: relative;

  & img {
    width: 100%;
    display: block;
  }

  & .absolute-img,
  & .text-box {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }

  & .absolute-img[class*='man'] {
    animation: ${animationSpaceMan} 10s infinite alternate;
    filter: drop-shadow(2px 4px 6px rgba(255, 255, 255, 0.3));
  }

  & .absolute-img[class*='light'] {
    animation: blink 1.5s infinite;
    filter: drop-shadow(2px 4px 6px rgba(255, 255, 255, 0.3));
  }

  & .text-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  & .text-box h1 {
    text-align: center;
    font-size: 12rem;
    font-weight: 700;
    font-style: italic;
  }

  @media screen and (max-width: 860px) {
    & .text-box h1 {
      font-size: 11.4rem;
    }
  }
  @media screen and (max-width: 430px) {
    & .text-box h1 {
      font-size: 5.8rem;
    }
  }
`;

const BannerWrap = styled.div`
  width: 50%;
  margin: auto;
  @media screen and (max-width: 860px) {
    width: 100%;
  }
`;

const IntroSpaceBanner = () => {
  const imgSrc = '../img/section1/main-banner-4-';
  return (
    <BannerWrap>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ ease: 'easeInOut', duration: 1.4 }}
        style={{ width: '100%' }}
      >
        <Banner>
          <img src={`${imgSrc}bg.jpg`} alt="배너 배경 이미지" />
          <div className="text-box">
            <h1>LET'S WORK</h1>
            <h1>TOGETHER</h1>
            <h1>YOU & ME</h1>
          </div>
          <img className="absolute-img man" src={`${imgSrc}man.png`} alt="오브젝트 이미지" />
          <img className="absolute-img light" src={`${imgSrc}light.png`} alt="오브젝트 이미지" />
        </Banner>
      </motion.div>
    </BannerWrap>
  );
};

export default IntroSpaceBanner;
