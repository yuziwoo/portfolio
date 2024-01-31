import styled from 'styled-components';
import { Variants, motion } from 'framer-motion';

const SmallText = styled.div`
  width: 100%;
  padding: 0 6rem;

  & p {
    font-size: 18px;
    line-height: 1;
    font-weight: 400;
  }

  & p:nth-child(2) {
    text-align: right;
    padding: 20px 0;
  }

  @media screen and (max-width: 860px) {
    padding: 0 4rem 0;

    & p:nth-child(2) {
      padding: 30px 0;
    }
  }

  @media screen and (max-width: 600px) {
    & p:nth-child(2) br {
      display: none;
    }
  }

  @media screen and (max-width: 430px) {
    padding: 0 2rem;

    & p {
      font-size: 14px;
    }
  }
`;

const BigText = styled.div`
  padding: 12rem 0;

  & h1 {
    font-size: 26rem;
    font-weight: 700;
    text-align: center;
    line-height: 1;
  }

  @media screen and (max-width: 860px) {
    padding: 18rem 0 8rem;

    & h1 {
      font-size: 12.8rem;
    }
  }

  @media screen and (max-width: 430px) {
    padding: 6.5rem 0 5.5rem;

    & h1 {
      font-size: 6.6rem;
    }
  }
`;

const IntroText = () => {
  const titleText = ['CODE.', 'CREATE.', 'CAPTIVATE.'];
  return (
    <article>
      <SmallText className="smallText">
        <p>
          PORTFOLIO 2024
          <br />
          FRONTEND DEVELOPER
          <br />& PUBLISHER & DESIGNER
          <br />
          DOING THIS SINCE 2020
        </p>
        <p>
          I LOVE THE CHALLENGE OF CREATING SOMETHING NEW,
          <br /> THE SATISFACTION OF SEEING MY VISION COME TO LIFE,
          <br /> THE JOY OF KNOWING THAT MY WORK IS MAKING A DIFFERENCE.
        </p>
        <p>
          I KNOW EXACTLY WHAT YOU WANT
          <br />
          IT'S LIKE...
        </p>
      </SmallText>
      <BigText>
        {titleText.map((text, idx) => (
          <motion.h1
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.1 + idx * 0.2, ease: 'backInOut' }}
          >
            {text}
          </motion.h1>
        ))}
      </BigText>
    </article>
  );
};

export default IntroText;
