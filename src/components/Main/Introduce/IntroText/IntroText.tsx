import { Variants, motion } from 'framer-motion';
import styled from 'styled-components';
import TopLinedTextBox from '../../../common/TopLinedTextBox/TopLinedTextBox';

const TextBlock = styled.div`
  padding-top: 4rem;
`;

const Paragraph = styled.p`
  font-size: var(--font-size-2);
  padding-top: 1rem;
`;

const HeadingVariants: Variants = {
  initial: { x: '-100%', backgroundImage: 'none' },
  animate: { x: 0 },
  hover: {
    color: 'rgba(255, 255, 255, 0)',
    backgroundImage: 'linear-gradient(138deg,#90C5F4 0,#90F4E5 33%, #BC88B4 66%, #B690F4 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    MozBackgroundClip: 'text',
  },
  tap: { scale: 0.9 },
};

const IntroText = () => {
  return (
    <article className="intro-text" style={{ paddingTop: '4rem' }}>
      <div style={{ overflow: 'hidden' }}>
        <motion.h1
          variants={HeadingVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          whileTap="tap"
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
          }}
        >
          CATCH YOUR EYES
        </motion.h1>
      </div>
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
    </article>
  );
};

export default IntroText;
