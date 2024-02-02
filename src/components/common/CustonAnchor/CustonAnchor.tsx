import { useState } from 'react';
import { useMouseCursor } from '../../../hooks/useMouseCursor';

interface CustomAnchorProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const CustomAnchor = ({ children, href, className, style }: CustomAnchorProps) => {
  const { toggleHovering } = useMouseCursor();
  const [isHover, setIsHover] = useState(false);

  return (
    <a
      href={href}
      className={`${className ? className : ''}${isHover ? ' hover' : ''}`}
      style={style ? style : {}}
      target="_blank"
      rel='noreferrer'
      onPointerEnter={() => {
        toggleHovering(true);
        setIsHover(true);
      }}
      onPointerLeave={() => {
        toggleHovering(false);
        setIsHover(false);
      }}
    >
      {children}
    </a>
  );
};

export default CustomAnchor;
