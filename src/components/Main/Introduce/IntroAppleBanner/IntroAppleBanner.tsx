import styled from 'styled-components';
import { motion } from 'framer-motion';
import { STYLE } from '../../../../constants/style';

const Banner = styled.section`
  --size-heading: 6.25vw;

  width: 100%;
  overflow: hidden;
  position: relative;

  & img {
    display: block;
    width: 100%;
  }

  & .content {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0 0 6.4% 4.66%;
  }

  @media screen and (max-width: 1040px) {
    & {
      --size-heading: 11vw;
    }
  }

  @media screen and (max-width: 860px) {
    & {
      --size-heading: 13.95348837vw;
    }
  }
`;

const IntroAppleBanner = () => {
  return (
    <Banner>
      <motion.div
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        whileInView={{ clipPath: 'inset(0)' }}
        style={{ overflow: 'hidden', position: 'relative' }}
        transition={{ ease: STYLE.easeInout, duration: 0.75, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ scale: 1.7 }}
          whileInView={{ scale: 1 }}
          style={{ transformOrigin: 'top center' }}
          transition={{ ease: STYLE.easeIn, duration: 1.3, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img src="../img/section1/main-banner-2.jpg" alt="배너 이미지" />
        </motion.div>

        <div className="content">
          <motion.div
            className="circle-wrap"
            style={{
              position: 'relative',
              display: 'block',
              width: '25.6%',
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 20,
              ease: 'linear',
              repeat: Infinity,
              opacity: {
                ease: STYLE.easeIn,
                duration: 0.8,
                delay: 0.5,
              },
            }}
            viewport={{ once: true }}
          >
            <img src="../img/section1/main-banner-2-text.png" alt="배너 데코 이미지" />
          </motion.div>
          <motion.h1
            initial={{ y: '-100%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              ease: STYLE.easeInout,
              duration: 1.2,
              delay: 0.6,
            }}
            viewport={{ once: true }}
            style={{
              color: 'var(--color-red)',
              writingMode: 'vertical-lr',
              fontSize: 'var(--size-heading)',
              fontStyle: 'italic',
              lineHeight: '1.2',
              fontWeight: '700',
            }}
          >
            CHECK IT OUT
          </motion.h1>
        </div>
      </motion.div>
    </Banner>
  );
};

export default IntroAppleBanner;
