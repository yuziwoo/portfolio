import styled from 'styled-components';
import IntroText from './IntroText/IntroText';
import IntroSwiperBanner from './IntroSwiperBanner/IntroSwiperBanner';
import IntroAppleBanner from './IntroAppleBanner/IntroAppleBanner';
import IntroWomanBanner from './IntroWomanBanner/IntroWomanBanner';

const MainSection = styled.section`
  width: 100%;
  background-image: url('../img/section1/background.jpg');
  background-size: 100% auto;
  background-position: top center;
  background-repeat: no-repeat;
  overflow: hidden;

  padding-top: 140px;
  @media screen and (max-width: 860px) {
    padding-top: 120px;
  }
  @media screen and (max-width: 430px) {
    padding-top: 80px;
  }
`;

const BannerWrapper = styled.article`
  width: 100%;
  padding: 0 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 860px) {
    padding: 0 2rem;
  }

  @media screen and (max-width: 430px) {
    padding: 0 1rem;
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
