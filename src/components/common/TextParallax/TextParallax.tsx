import './TextParallax.css';

interface TextParallaxProps {
  text: string;
  textStyle?: React.CSSProperties;
  speed?: string;
  dir?: 'left' | 'right';
}

const TextParallax = ({ text, textStyle, speed, dir }: TextParallaxProps) => {
  const animationDuration = `${speed ? speed : '20s'}`;
  const style = { ...textStyle, animationDuration };

  return (
    <div className={`text-parallax ${dir ? dir : 'left'}`}>
      <p style={style}>{text}</p>
      <p style={style}>{text}</p>
      <p style={style}>{text}</p>
      <p style={style}>{text}</p>
      <p style={style}>{text}</p>
    </div>
  );
};

export default TextParallax;
