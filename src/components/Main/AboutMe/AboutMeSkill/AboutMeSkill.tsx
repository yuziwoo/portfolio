import styled from 'styled-components';
import { motion } from 'framer-motion';
import { STYLE } from '../../../../constants/style';

const Skill = styled.div`
  width: 100%;
  padding: 20rem 6rem 0;

  & .part1 {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-start;
  }

  & .part1 .text h1 {
    font-size: var(--heading-2);
    line-height: 1;
  }

  & .part1 .text .table {
    padding-top: 4rem;
  }

  & .part1 .text .table .tr {
    padding-bottom: 3rem;
    max-width: 66rem;
  }

  & .part1 .text .table .tr .th {
    font-size: 2.2rem;
    line-height: 1.4;
    font-weight: 600;
    padding-bottom: 1rem;
  }

  & .part1 .text .table .tr .td {
    font-size: 1.8rem;
    line-height: 1.4;
    font-weight: 400;
  }
  & .part1 .img1 {
    width: calc(100% - 66rem);
    overflow: hidden;
  }
  & .part2 .img2 {
    overflow: hidden;
  }
  & .part1 .img1 img,
  & .part2 .img2 img {
    width: 100%;
    display: block;
    transform-origin: center;
  }
  & .part2 {
    width: 100%;
    padding-top: 8rem;
  }

  @media screen and (max-width: 1280px) {
    & .part1 {
      flex-direction: column-reverse;
      align-items: flex-start;
    }
    & .part1 .text {
      padding-top: 18rem;
    }
    & .part1 .text h1 {
      font-size: var(--heading-2-fixed);
    }
    & .part1 .text .table {
      padding-top: 40px;
    }
    & .part1 .text .table .tr {
      padding-bottom: 30px;
      max-width: none;
    }
    & .part1 .text .table .tr .th {
      font-size: 22px;
      padding-bottom: 10px;
    }
    & .part1 .text .table .tr .td {
      font-size: 18px;
    }
    & .part1 .img1 {
      width: 100%;
    }
    & .part2 {
      display: none;
    }
  }

  @media screen and (max-width: 860px) {
    padding: 6rem 2rem 0;
    & .part1 .text {
      padding-top: 14rem;
    }
    & .part1 .text .table .tr {
      flex-direction: column;
      padding-bottom: 25px;
    }
    & .part1 .text .table .tr .th {
      padding-bottom: 8px;
      font-size: 20px;
    }
    & .part1 .text .table .tr .td {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 430px) {
    padding: 6rem 1rem 0;
    & .part1 .text {
      padding-top: 8rem;
    }
    & .part1 .text .table {
      padding-top: 4rem;
    }
    & .part1 .text .table .tr .th {
      padding-bottom: 8px;
      font-size: 20px;
    }
    & .part1 .text .table .tr {
      padding-bottom: 3.2rem;
    }
  }

  & .part1 .text .table .tr:last-child {
    padding-bottom: 0;
  }
`;

const skillList = [
  {
    title: 'BEST ✨',
    content: 'Pure JavaScript, TypeScript, React',
  },
  {
    title: 'DEVELOPMENT',
    content: 'JavaScript, TypeScript, React, Next.js, Redux',
  },
  {
    title: 'PUBLISHING',
    content:
      'HTML, CSS, SASS(SCSS), Styled-Components, Tailwind , jQuery, GSAP, LottieFiles, Spline, Swiper, Framer-motion',
  },
  {
    title: 'TOOLS',
    content: 'Adobe XD, Photoshop, Illustrator, Figma, Github, Notion, Slack, Trello',
  },
  {
    title: 'CERTIFICATE',
    content: 'GTQ 1급, GTQi 1급',
  },
];

const AboutMeSkill = () => {
  return (
    <Skill>
      <div>
        <div className="part1">
          <div className="text">
            <div style={{ overflow: 'hidden' }}>
              <motion.h1
                initial={{ y: '100%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  ease: STYLE.easeInout,
                }}
                viewport={{ once: true, amount: 'some' }}
              >
                #SKILL
              </motion.h1>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: STYLE.easeInout,
              }}
              viewport={{ once: true, amount: 'some' }}
              className="table"
            >
              {skillList.map((skill, idx) => (
                <div className="tr" key={idx}>
                  <p className="th">{skill.title}</p>
                  <p className="td">{skill.content}</p>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="img1">
            <motion.img
              initial={{ y: -50, scale: 1.2, opacity: 0 }}
              whileInView={{ y: 0, scale: 1, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: STYLE.easeInout,
                scale: { duration: 0.7 },
              }}
              viewport={{ once: true }}
              src="../img/section2/aboutme-skill-img1.jpg"
              alt="스케이트보드 이미지"
            />
          </div>
        </div>
        <div className="part2">
          <div className="img2">
            <motion.img
              initial={{ y: -50, scale: 1.2, opacity: 0 }}
              whileInView={{ y: 0, scale: 1, opacity: 1 }}
              transition={{
                duration: 0.7,
                ease: STYLE.easeIn,
                scale: { duration: 0.7, delay: 0.2 },
              }}
              viewport={{ once: true }}
              src="../img/section2/aboutme-skill-img2.jpg"
              alt="스케이트보드 이미지"
            />
          </div>
        </div>
      </div>
    </Skill>
  );
};

export default AboutMeSkill;
