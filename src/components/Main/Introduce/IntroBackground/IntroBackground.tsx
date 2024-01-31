import TextParallax from '../../../common/TextParallax/TextParallax';

const IntroBackground = () => {
  return (
    <div
      className="background-parallax"
      style={{
        position: 'absolute',
        opacity: 0.1,
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <TextParallax
        text="I GOT A BLUE"
        textStyle={{
          fontSize: 'var(--size-background)',
          textWrap: 'nowrap',
          fontWeight: '900',
          fontStyle: 'italic',
          lineHeight: 1.2,
        }}
        speed="200s"
      />
    </div>
  );
};

export default IntroBackground;
