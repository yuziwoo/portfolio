import styled from 'styled-components';
import { motion } from 'framer-motion';
import { STYLE } from '../../../../constants/style';

const History = styled.div`
  padding: 10rem 6rem 0;
  display: inline-block;
  overflow: hidden;

  & .title {
    font-size: var(--heading-2);
    line-height: 1;
    width: max-content;
  }
  & .table {
    padding-top: 6rem;
  }
  & .table .tr {
    padding: 4rem 0;
    border-bottom: 1px solid white;
  }
  & .table .tr:first-child {
    border-top: 1px solid white;
  }
  & .table p {
    font-size: 1.8rem;
    line-height: 1.4;
  }
  & .table .tr .th {
    font-weight: 600;
  }
  & .table .tr .td {
    text-align: right;
  }
  @media screen and (max-width: 1280px) {
    padding: 14rem 6rem 0;

    & .title {
      font-size: var(--heading-2-fixed);
    }
    & .table {
      padding-top: 40px;
    }
    & .table p {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 860px) {
    display: block;
    padding: 15rem 2rem 0;
    & .title {
      width: 100%;
      text-align: right;
    }
    & .table {
      padding-top: 4rem;
    }
    & .table .tr {
      padding: 5rem 0;
      display: block;
    }
    & .table .tr .th {
      padding-bottom: 1rem;
    }
  }
  @media screen and (max-width: 430px) {
    padding: 8rem 1rem 0;

    & .table p {
      font-size: 16px;
    }
  }
`;

const AboutMeHistory = () => {
  return (
    <History>
      <div style={{ overflow: 'hidden' }}>
        <motion.h1
          className="title"
          initial={{ y: '100%', opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: STYLE.easeInout,
          }}
          viewport={{ once: true, amount: 'some' }}
        >
          #HISTORY
        </motion.h1>
      </div>
      <motion.div
        className="table"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        viewport={{ once: true, amount: 'some' }}
      >
        <div className="tr">
          <p className="th">
            FRONTEND
            <br />
            우아한형제들
          </p>
          <p className="td">
            2023.10 - 2023.11
            <br />
            우아한 테크 코스 프론트엔드 6기 프리코스 과정 이수
          </p>
        </div>

        <div className="tr">
          <p className="th">
            PUBLISHER
            <br />
            디코드
          </p>
          <p className="td">
            2022.04 - 2023.07
            <br />
            명품 패션 이커머스
            <br />
            패션 룩북 페이지, 이벤트 페이지 등<br />
            1000개 이상의 인터렉티브한 웹 페이지 구현
          </p>
        </div>

        <div className="tr">
          <p className="th">
            PUBLISHER
            <br />
            메버
          </p>
          <p className="td">
            2022.02 - 2022.03
            <br />
            메타버스 개발 회사
            <br />
            회사 웹사이트 퍼블리싱
          </p>
        </div>

        <div className="tr">
          <p className="th">
            DESIGNER
            <br />
            윈코 커뮤니케이션
          </p>
          <p className="td">
            2021.07 - 2022.01
            <br />
            웹 에이전시
            <br />
            다양한 웹 어플리케이션 디자인
          </p>
        </div>

        <div className="tr">
          <p className="th">
            EDUCATED
            <br />
            국비지원 교육
          </p>
          <p className="td">
            2020.10 - 2021.03
            <br />
            국비지원 그린컴퓨터 아카데미
            <br />
            반응형 웹 디자인, 퍼블리셔 교육 과정 이수
          </p>
        </div>
      </motion.div>
    </History>
  );
};

export default AboutMeHistory;
