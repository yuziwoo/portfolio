import './TextParallax.css';

interface TextParallaxProps {
  text: string;
  textStyle?: React.CSSProperties;
  speed?: string;
}

const TextParallax = ({ text, textStyle, speed }: TextParallaxProps) => {
  const animationDuration = `${speed ? speed : '20s'}`;
  const style = { ...textStyle, animationDuration };

  return (
    <div className="text-parallax">
      <p style={style}>{text}</p>
      <p style={style}>{text}</p>
      <p style={style}>{text}</p>
      <p style={style}>{text}</p>
      <p style={style}>{text}</p>
    </div>
  );
};

export default TextParallax;
