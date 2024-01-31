import styled from 'styled-components';
import IntroText from './IntroText/IntroText';
import IntroSwiperBanner from './IntroSwiperBanner/IntroSwiperBanner';
import IntroAppleBanner from './IntroAppleBanner/IntroAppleBanner';
import IntroWomanBanner from './IntroWomanBanner/IntroWomanBanner';

const MainSection = styled.section`
  width: 100%;
  margin: auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16rem 10rem 20rem;

  @media screen and (max-width: 1600px) {
    padding: 16rem 4rem 20rem;
  }
  @media screen and (max-width: 1140px) {
    padding: 8rem 3rem 16rem;
  }
  @media screen and (max-width: 1040px) {
    flex-direction: column;
  }
  @media screen and (max-width: 860px) {
    padding: 0rem 0rem 16rem;
  }
`;

const BannerWrapper = styled.article`
  width: 50%;

  @media screen and (max-width: 1040px) {
    width: 100%;
    max-width: 860px;
    margin: auto;
    padding: 8rem 2.325581vw 0;
  }
  @media screen and (max-width: 500px) {
    padding: 2rem 2.325581vw 0;
  }
`;

const Introduce = () => {
  return (
    <MainSection className="main-section intro">
      <IntroText />
      <BannerWrapper>
        <IntroSwiperBanner />
        <IntroAppleBanner />
        <IntroWomanBanner />
      </BannerWrapper>
    </MainSection>
  );
};

export default Introduce;
