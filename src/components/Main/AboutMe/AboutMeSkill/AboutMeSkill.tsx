import styled from 'styled-components';
import { motion } from 'framer-motion';
import { STYLE } from '../../../../constants/style';

const Skill = styled.div`
  width: 100%;
  padding: 20rem 6rem 0;

  & .part1 {
    width: 100%;
    display: flex;
    flex-wrap: no-wrap;
    justify-content: space-between;
  }

  & .part1 .text h1 {
    font-size: var(--heading-2-fixed);
    line-height: 1;
  }

  & .part1 .text .table {
    padding-top: 40px;
  }
  & .part1 .text .table .tr {
    display: flex;
    padding-bottom: 10px;
  }
  & .part1 .text .table .tr p {
    font-size: 18px;
    line-height: 1.4;
  }
  & .part1 .text .table .tr .th {
    flex: 1 158px;
    max-width: 158px;
    font-weight: 500;
  }
  & .part1 .text .table .tr .td {
    flex: 1 462px;
    max-width: 462px;
    font-weight: 400;
  }
  & .part1 .img1 {
    width: calc(100% - 650px);
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
    }
    & .part1 .text {
      padding-top: 12rem;
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
      padding-top: 10rem;
    }
    & .part1 .text .table .tr {
      flex-direction: column;
      padding-bottom: 25px;
    }
    & .part1 .text .table .tr .th {
      flex: none;
      max-width: none;
      padding-bottom: 5px;
      opacity: 0.5;
    }
    & .part1 .text .table .tr .td {
      flex: none;
      max-width: none;
    }
  }

  @media screen and (max-width: 430px) {
    padding: 6rem 1rem 0;
    & .part1 .text {
      padding-top: 6rem;
    }
    & .part1 .text .table .tr {
      flex-direction: column;
      padding-bottom: 20px;
    }
    & .part1 .text .table .tr p {
      font-size: 16px;
    }
    & .part1 .text .table .tr .th {
      flex: none;
      max-width: none;
      padding-bottom: 6px;
    }
    & .part1 .text .table .tr .td {
      flex: none;
      max-width: none;
    }
  }
`;

const skillList = [
  {
    title: 'BEST',
    content: 'Pure JavaScript ✨, TypeScript, React',
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
    title: 'DESIGN',
    content: 'Adobe XD, Photoshop, Illustrator, Figma',
  },
  {
    title: 'WORK TOOL',
    content: 'Github, Notion, Slack, Trello',
  },
  {
    title: 'CERTIFICATE',
    content: 'GTQ 1급, GTQi 1급 📝',
  },
];

const AboutMeSkill = () => {
  return (
    <Skill>
      <div>
        <div className="part1">
          <div className="text">
            <h1>#SKILL</h1>
            <div className="table">
              {skillList.map((skill, idx) => (
                <div className="tr" key={idx}>
                  <p className="th">{skill.title}</p>
                  <p className="td">{skill.content}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="img1">
            <motion.img
              initial={{ y: -50, scale: 1.2, opacity: 0 }}
              whileInView={{ y: 0, scale: 1, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0,
                ease: STYLE.easeInout,
                scale: { duration: 1.1 },
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
                scale: { duration: 1.1, delay: 0.2 },
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
