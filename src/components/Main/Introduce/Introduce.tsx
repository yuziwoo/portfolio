import styled from 'styled-components';
import IntroText from './IntroText/IntroText';

const MainSection = styled.section`
  width: calc(100% - 10rem);
  max-width: 1720px;
  margin: auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 16rem;
`;

const BannerWrapper = styled.article`
  width: 50%;
  max-width: 860px;
`;

const Introduce = () => {
  return (
    <MainSection className="main-section intro">
      <IntroText />
      <BannerWrapper></BannerWrapper>
    </MainSection>
  );
};

export default Introduce;
