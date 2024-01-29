import { RefObject, useEffect, useState } from 'react';

export const useMousePos = (ref: RefObject<HTMLElement>) => {
  const [point, setPoint] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;

      setPoint({ x, y });
    };

    window.addEventListener('pointermove', handlePointerMove);

    return () => window.removeEventListener('pointermove', handlePointerMove);
    // eslint-disable-next-line
  }, []);

  return point;
};
