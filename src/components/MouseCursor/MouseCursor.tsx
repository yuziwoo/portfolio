import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useMousePos } from '../../hooks/useMousePos';
import { useThrottle } from '../../hooks/useThrottle';
import { useMouseCursor } from '../../hooks/useMouseCursor';
import './MouseCursor.css';

const MouseCursor = () => {
  const [mouseCursorSwitch, setMouseCursorSwitch] = useState(true);

  useEffect(() => {
    const removeMouseCursorEvent = () => {
      setMouseCursorSwitch(false);
      document.body.removeEventListener('touchstart', removeMouseCursorEvent);
    };
    document.body.addEventListener('touchstart', removeMouseCursorEvent);
  }, []);

  const ref = useRef(null);
  const { x, y } = useMousePos(ref);
  const [pointList, setPointList] = useState<string[]>([]);

  const recordPoint = useCallback(({ x, y }: { x: number; y: number }) => {
    setPointList((prevList) => {
      const newList = [...prevList, `${x},${y}`];
      if (newList.length > 7) {
        newList.shift();
      }
      return newList;
    });
  }, []);

  const handleRemovePointList = useCallback(
    useThrottle({
      func: () => {
        setPointList([]);
      },
      delay: 100,
    }),
    []
  );

  useEffect(() => {
    recordPoint({ x, y });
    handleRemovePointList();
    // eslint-disable-next-line
  }, [x, y]);

  const { hovering } = useMouseCursor();
  const [radius, setRadius] = useState<number>(20);

  useEffect(() => {
    setRadius(hovering ? 40 : 20);
  }, [hovering]);

  return (
    <div id="mouse-cursor" ref={ref} style={{ display: `${mouseCursorSwitch ? 'block' : 'none'}` }}>
      <svg>
        <polyline points={pointList.join(' ')} style={{ fill: 'transparent', stroke: 'white' }} />
        <motion.circle
          className="circle-small"
          animate={{ cx: x === 0 ? -100 : x, cy: y === 0 ? -100 : y }}
          transition={{ cx: { duration: 0 }, cy: { duration: 0 } }}
          style={{ stroke: 'transparent' }}
          r={5}
        />
        <motion.circle
          className="circle-big"
          animate={{ cx: x === 0 ? -100 : x, cy: y === 0 ? -100 : y, r: radius }}
          transition={{
            cx: { duration: 0.05, ease: 'easeOut' },
            cy: { duration: 0.05, ease: 'easeOut' },
            r: { duration: 0.1 },
          }}
          style={{ fill: 'transparent' }}
        />
      </svg>
    </div>
  );
};

export default MouseCursor;
