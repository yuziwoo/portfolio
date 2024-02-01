import styled from 'styled-components';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import TextParallax from '../../../common/TextParallax/TextParallax';

const Banner = styled.section`
  position: relative;
  --size-parallax: 12rem;
  width: 50%;

  & .layer {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  & img {
    display: block;
    width: 100%;
  }

  & .layer-object img {
    position: absolute;
    left: 0;
    top: 0;
    animation-name: blink;
    animation-duration: 1.8s;
    animation-iteration-count: infinite;
  }

  & .layer-object img:first-child {
    position: relative;
  }

  & .layer-parallax {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media screen and (max-width: 860px) {
    --size-parallax: 11.4rem;
    width: 100%;
  }

  @media screen and (max-width: 430px) {
    --size-parallax: 5.8rem;
  }
`;

const IntroWomanBanner = () => {
  const imgSrc = '../img/section1/main-banner3-';
  const imgs = [1, 2, 3, 4];

  return (
    <Banner>
      <Swiper
        slidesPerView={1}
        effect="fade"
        loop={true}
        autoplay={{ delay: 1000 }}
        speed={600}
        modules={[Autoplay, EffectFade]}
      >
        {imgs.map((num) => (
          <SwiperSlide key={num}>
            <img src={`${imgSrc}${num}.jpg`} alt="배너이미지" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="layer layer-object">
        {imgs.map((num) => (
          <img
            src={`${imgSrc}object${num}.png`}
            alt="오브젝트 이미지"
            style={{ animationDelay: `${num * 0.3}s` }}
            key={num}
          />
        ))}
      </div>

      <div className="layer layer-parallax">
        <TextParallax
          text="CHALLENGE OF CREATING"
          textStyle={{
            fontSize: 'var(--size-parallax)',
            textWrap: 'nowrap',
            fontWeight: '700',
            fontStyle: 'italic',
            lineHeight: 1.2,
          }}
          speed="30s"
        />
        <TextParallax
          text="CHALLENGE OF CREATING"
          textStyle={{
            fontSize: 'var(--size-parallax)',
            textWrap: 'nowrap',
            fontWeight: '700',
            fontStyle: 'italic',
            lineHeight: 1.2,
          }}
          speed="30s"
          dir="right"
        />
      </div>
    </Banner>
  );
};

export default IntroWomanBanner;
