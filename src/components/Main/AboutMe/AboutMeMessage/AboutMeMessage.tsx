import { motion } from 'framer-motion';
import styled from 'styled-components';

const Message = styled.div`
  padding: 10rem 6rem 0;

  & .wrap {
    overflow: hidden;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }

  & .wrap h1 {
    font-size: var(--heading-1);
    line-height: 1;
    font-weight: 700;
  }

  & .wrap .img {
    overflow: hidden;
    height: 19rem;
  }

  & .wrap .img img {
    height: 100%;
  }

  & .wrap:last-child h1 {
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

  & .wrap:nth-child(3) .img {
    padding-left: 4rem;
  }

  & .wrap:nth-child(4) .img {
    padding: 0 4rem 0 14rem;
  }

  @media screen and (max-width: 860px) {
    padding: 12rem 2rem 0;
    & .wrap .img {
      height: 8.3rem;
    }
    & .wrap:nth-child(3) .img {
      padding-left: 2rem;
    }
    & .wrap:nth-child(4) .img {
      padding: 0 2rem 0 5.2rem;
    }
  }

  @media screen and (max-width: 430px) {
    padding: 11rem 1rem 0;
    & .wrap .img {
      height: 4.2rem;
    }
    & .wrap:nth-child(3) .img {
      padding-left: 1rem;
    }
    & .wrap:nth-child(4) .img {
      padding: 0 1rem 0 3.2rem;
    }
  }
`;

const initialStyle = { y: '100%' };
const viewStyle = { y: 0 };
const transition = { duration: 0.7, ease: 'easeInOut' };

const h1Variants = {
  off: {
    y: '100%',
  },
  on: {
    y: 0,
  },
};
const divVariants = {
  off: {
    clipPath: 'inset(50% 0 50% 0)',
  },
  on: {
    clipPath: 'inset(0)',
  },
};
const imgVariants = {
  off: {
    scale: 1.2,
  },
  on: {
    scale: 1,
  },
};

const AboutMeMessage = () => {
  return (
    <Message>
      <div className="wrap" style={{ justifyContent: 'flex-end' }}>
        <motion.h1
          initial={initialStyle}
          whileInView={viewStyle}
          transition={transition}
          viewport={{ once: true, amount: 'some' }}
        >
          AND I'M
        </motion.h1>
      </div>
      <div className="wrap">
        <motion.h1
          initial={initialStyle}
          whileInView={viewStyle}
          transition={{ ...transition, delay: 0.1 }}
          viewport={{ once: true, amount: 'some' }}
        >
          LOOKING FOR
        </motion.h1>
      </div>
      <motion.div
        className="wrap"
        initial="off"
        whileInView="on"
        viewport={{ once: true, amount: 'some' }}
      >
        <motion.h1 variants={h1Variants} transition={{ ...transition, delay: 0.2 }}>
          NEXT
        </motion.h1>
        <motion.div
          className="img"
          variants={divVariants}
          transition={{ ...transition, delay: 0.2 }}
        >
          <motion.img
            src="img/section2/about-message-1.jpg"
            alt="message img"
            variants={imgVariants}
            transition={{ ...transition, delay: 0.2 }}
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="wrap"
        initial="off"
        whileInView="on"
        viewport={{ once: true, amount: 'some' }}
      >
        <motion.div
          className="img"
          variants={divVariants}
          transition={{ ...transition, delay: 0.3 }}
        >
          <motion.img
            src="img/section2/about-message-2.jpg"
            alt="message img"
            variants={imgVariants}
            transition={{ ...transition, delay: 0.3 }}
          />
        </motion.div>
        <motion.h1 variants={h1Variants} transition={{ ...transition, delay: 0.3 }}>
          PLACE
        </motion.h1>
      </motion.div>
    </Message>
  );
};

export default AboutMeMessage;
