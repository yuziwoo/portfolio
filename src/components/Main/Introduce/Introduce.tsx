import styled from 'styled-components';
import IntroText from './IntroText/IntroText';
import IntroSwiperBanner from './IntroSwiperBanner/IntroSwiperBanner';

const MainSection = styled.section`
  width: calc(100% - 10rem);
  margin: auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 16rem;
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
