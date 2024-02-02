import AboutMeHeader from './AboutMeHeader/AboutMeHeader';
import AboutMeHistory from './AboutMeHistory/AboutMeHistory';
import AboutMeMessage from './AboutMeMessage/AboutMeMessage';
import AboutMeSkill from './AboutMeSkill/AboutMeSkill';
import AboutMeMan from './AboutMeMan/AboutMeMan';

const AboutMe = () => {
  return (
    <section style={{ position: 'relative', zIndex: '1' }}>
      <AboutMeHeader />
      <AboutMeSkill />
      <AboutMeHistory />
      <AboutMeMessage />
      <AboutMeMan />
    </section>
  );
};

export default AboutMe;
