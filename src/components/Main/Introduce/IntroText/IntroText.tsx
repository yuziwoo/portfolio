import styled from 'styled-components';
import { Variants, motion } from 'framer-motion';
import TopLinedTextBox from '../../../common/TopLinedTextBox/TopLinedTextBox';

const TextBlock = styled.div`
  padding-top: 4rem;

  @media screen and (max-width: 500px) {
    padding-top: 3.5rem;
  }
  @media screen and (max-width: 380px) {
    padding-top: 3rem;
  }
`;

const Paragraph = styled.p`
  font-size: var(--font-size-2);
  padding-top: 1rem;

  @media screen and (max-width: 860px) {
    font-weight: 500;
  }
`;

const Article = styled.article`
  padding-top: 4rem;
  position: sticky;
  top: 20rem;
  left: 0;

  @media screen and (max-width: 1140px) {
    top: 12rem;
  }
  @media screen and (max-width: 1040px) {
    position: relative;
    top: 0;
    padding-top: 6rem;
    width: 100%;
    max-width: 860px;
    margin: auto;
  }
  @media screen and (max-width: 860px) {
    padding: 6rem 2.325581vw;
  }
  @media screen and (max-width: 500px) {
    padding: 10rem 2.325581vw 10rem;
  }
`;

const HeadingVariants: Variants = {
  initial: { x: '-100%' },
  animate: { x: 0 },
};

const IntroText = () => {
  return (
    <Article>
      <motion.div
        whileTap={{ scale: 1.1 }}
        style={{ overflow: 'hidden' }}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
        viewport={{ once: true }}
      >
        <motion.h1
          variants={HeadingVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          viewport={{ once: true }}
          transition={{
            duration: 0,
            ease: 'anticipate',
            x: { duration: 0.5, ease: 'easeInOut' },
            scale: { duration: 0.3, type: 'spring' },
          }}
          style={{
            fontSize: 'var(--heading-size-5)',
            fontWeight: 700,
            lineHeight: 1,
            animation: 'hue-rotate 1s infinite',
            color: 'rgba(255, 255, 255, 0)',
            backgroundImage:
              'linear-gradient(138deg,#90C5F4 0,#90F4E5 33%, #BC88B4 66%, #B690F4 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            MozBackgroundClip: 'text',
          }}
        >
          CATCH YOUR EYES
        </motion.h1>
      </motion.div>
      <TextBlock>
        <TopLinedTextBox width="10rem" color="var(--color-white)" dir="right" delay={0.5}>
          <Paragraph>
            Frontend Developer Jiwoo Yu
            <br />
            Doing this Since 2020
          </Paragraph>
        </TopLinedTextBox>
      </TextBlock>

      <TextBlock>
        <TopLinedTextBox width="10rem" color="var(--color-white)" dir="right" delay={0.5}>
          <Paragraph>
            단순히 정보를 전달하는 것 이상의 의미를.
            <br />
            유연하고 재사용성이 높은 코드를 작성하고,
            <br />
            디자인에 어울리는 인터렉티브하고 동적인 효과를 사용하여
            <br />
            웹사이트에 생동감을 입힙니다.
          </Paragraph>
        </TopLinedTextBox>
      </TextBlock>
    </Article>
  );
};

export default IntroText;
