import { motion, Variants } from 'framer-motion';
import styled from 'styled-components';
import TopLinedTextBox from '../../../common/TopLinedTextBox/TopLinedTextBox';

const TextBlock = styled.div`
  padding-top: 4rem;
`;

const Paragraph = styled.p`
  font-size: var(--font-size-2);
  padding-top: 1rem;
`;

const headingVariants: Variants = {
  off: {
    x: '-100%',
  },
  on: {
    x: 0,
  },
};

const IntroText = () => {
  return (
    <article className="intro-text" style={{ paddingTop: '40px' }}>
      <div style={{ overflow: 'hidden' }}>
        <motion.h1
          variants={headingVariants}
          initial="off"
          animate="on"
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
          style={{ fontSize: 'var(--heading-size-5)', fontWeight: 700, lineHeight: 1 }}
        >
          CATCH YOUR EYES
        </motion.h1>
      </div>
      <TextBlock>
        <TopLinedTextBox width="100px" color="var(--color-white)" dir="right" delay={0.5}>
          <Paragraph>
            Frontend Developer Jiwoo Yu
            <br />
            Doing this Since 2020
          </Paragraph>
        </TopLinedTextBox>
      </TextBlock>

      <TextBlock>
        <TopLinedTextBox width="100px" color="var(--color-white)" dir="right" delay={0.5}>
          <Paragraph>
            단순히 정보를 전달하는 것 이상의 의미를.
            <br />
            유연하고 재사용성이 높은 코드를 작성하고,
            <br />
            디자인에 어울리는 인터렉티브하고 동적인 효과를 사용하여 웹사이트에 생동갑을 입힙니다.
          </Paragraph>
        </TopLinedTextBox>
      </TextBlock>
    </article>
  );
};

export default IntroText;
