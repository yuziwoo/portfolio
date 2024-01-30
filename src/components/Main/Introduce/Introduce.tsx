import styled from 'styled-components';
import IntroText from './IntroText/IntroText';
import IntroSwiperBanner from './IntroSwiperBanner/IntroSwiperBanner';

const MainSection = styled.section`
  width: 100%;
  margin: auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16rem 10rem 0;
  background-image: url('../img/section1/background.jpg');
  background-size: cover;
`;

const BannerWrapper = styled.article`
  width: 50%;
`;

const Introduce = () => {
  return (
    <MainSection className="main-section intro">
      <IntroText />
      <BannerWrapper>
        <IntroSwiperBanner />
      </BannerWrapper>
    </MainSection>
  );
};

export default Introduce;
