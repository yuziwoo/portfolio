import styled from 'styled-components';
import ImgParallax from '../../../common/ImgPrallax/ImgPrallax';
import { motion } from 'framer-motion';

const Div = styled.div`
  --parallax-aboutme: 125%;
  padding-top: 40rem;

  & .title {
    padding-bottom: 6rem;
  }

  & .title .wrap {
    overflow: hidden;
  }

  & .title .wrap h1 {
    font-size: var(--heading-1);
    font-weight: 700;
    line-height: 1;
    display: inline-block;
  }

  & .title .wrap .gradient {
    background-image: linear-gradient(
      to left,
      #d16ba5,
      #c777b9,
      #ba83ca,
      #aa8fd8,
      #9a9ae1,
      #8aa7ec,
      #79b3f4,
      #69bff8,
      #52cffe,
      #41dfff,
      #46eefa,
      #5ffbf1
    );
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    background-size: 100%;
    background-repeat: no-repeat;
    animation: hue-rotate 3s infinite linear;
  }

  & hr {
    border: none;
    border-top: 1px solid white;
  }

  & .parallax-wrap {
    padding-top: 6rem;
  }

  & .parallax-wrap .padding {
    padding-top: 3rem;
  }

  @media screen and (max-width: 860px) {
    --parallax-aboutme: 176%;
    padding-top: 32rem;
    & .title {
      padding-left: 2rem;
    }
    & .parallax-wrap .padding {
      padding-top: 2rem;
    }
  }

  @media screen and (max-width: 430px) {
    --parallax-aboutme: 215%;
    padding-top: 14rem;
    & .title {
      padding-bottom: 3rem;
    }
    & .title {
      padding-left: 1rem;
    }
    & .parallax-wrap {
      padding-top: 2rem;
    }
    & .parallax-wrap .padding {
      padding-top: 1.2rem;
    }
  }
`;

const AboutMeHeader = () => {
  return (
    <Div>
      <div className="title">
        <div className="wrap">
          <motion.h1
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            viewport={{ once: true, amount: 'some' }}
          >
            LET'S CHECK
          </motion.h1>
        </div>
        <div className="wrap">
          <motion.h1
            className="gradient"
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            viewport={{ once: true, amount: 'some' }}
          >
            ABOUT ME
          </motion.h1>
        </div>
      </div>

      <hr />

      <div className="parallax-wrap">
        <ImgParallax imgWidth="var(--parallax-aboutme)" speed="50s">
          <img src="../img/section2/field-parallax.png" alt="패럴랙스 이미지" />
        </ImgParallax>
        <div className="padding"></div>
        <ImgParallax imgWidth="var(--parallax-aboutme)" speed="50s" dir="right">
          <img src="../img/section2/field-parallax.png" alt="패럴랙스 이미지" />
        </ImgParallax>
      </div>
    </Div>
  );
};

export default AboutMeHeader;
