import AboutMeHeader from './AboutMeHeader/AboutMeHeader';
import AboutMeHistory from './AboutMeHistory/AboutMeHistory';
import AboutMeMessage from './AboutMeMessage/AboutMeMessage';
import AboutMeSkill from './AboutMeSkill/AboutMeSkill';

const AboutMe = () => {
  return (
    <section>
      <AboutMeHeader />
      <AboutMeSkill />
      <AboutMeHistory />
      <AboutMeMessage />
    </section>
  );
};

export default AboutMe;
