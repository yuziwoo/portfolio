import { useState } from 'react';
import { useMouseCursor } from '../../../hooks/useMouseCursor';

interface CustomButtonProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onClick?: () => void;
}

const CustomButton = ({ className, style, children, onClick }: CustomButtonProps) => {
  const handleClickButton = () => {
    if (onClick) onClick();
  };

  const { toggleHovering } = useMouseCursor();
  const [isHover, setIsHover] = useState(false);

  return (
    <button
      className={`${className ? className : ''}${isHover ? ' hover' : ''}`}
      style={style ? style : {}}
      onClick={handleClickButton}
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
    </button>
  );
};

export default CustomButton;
