import { Variants, motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import TextParallax from '../../../common/TextParallax/TextParallax';

import 'swiper/swiper-bundle.css';
import './IntroSwiperBanner.css';

const IntroSwiperBanner = () => {
  const imgSrc = '../img/section1/main-banner1-';
  const imgs = [1, 2, 3, 4];

  const smallTextVariants: Variants = {
    off: {
      y: 10,
      opacity: 0,
    },
    on: {
      y: 0,
      opacity: 1,
    },
  };
  const smallText = ['EXTREME', 'EFFICIENCY', 'WEBSITES'];

  return (
    <section className="intro-swiper-banner">
      <Swiper
        slidesPerView={1}
        effect="fade"
        loop={true}
        autoplay={{ delay: 1800 }}
        speed={1200}
        modules={[EffectFade, Autoplay]}
      >
        {imgs.map((num) => (
          <SwiperSlide key={num}>
            <img src={`${imgSrc}${num}.jpg`} alt="배너이미지" />
          </SwiperSlide>
        ))}
        <SwiperSlide></SwiperSlide>
      </Swiper>

      <div className="layer parallax">
        <TextParallax
          text="CODE. CREATE. CAPTIVATE. "
          textStyle={{
            fontSize: '6.25vw',
            textWrap: 'nowrap',
            fontWeight: '700',
            fontStyle: 'italic',
          }}
        />
      </div>

      <div className="layer decoration">
        <div className="text">
          <div className="text-big">
            <h1 data-name="WEB">WEB</h1>
            <h1 data-name="CHECK">CHECK</h1>
          </div>
          <div className="text-small">
            {smallText.map((text, index) => (
              <motion.p
                key={index}
                variants={smallTextVariants}
                initial="off"
                whileInView="on"
                viewport={{ once: true }}
                transition={{ duration: 0.3, ease: 'backOut', delay: 0.2 + index * 0.08 }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
      <img className="layer text-img" src={`${imgSrc}text.png`} alt="고정된 배너 이미지" />
    </section>
  );
};

export default IntroSwiperBanner;
