import { useEffect, useRef } from 'react';

export const useThrottle = <T extends any[]>({
  func,
  delay,
}: {
  func: (...args: T) => void;
  delay: number;
}): ((...args: T) => void) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const throttledFunc = (...args: T) => {
    clearTimeout(timeoutRef.current as NodeJS.Timeout);

    timeoutRef.current = setTimeout(() => {
      func(...args);
    }, delay);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current as NodeJS.Timeout);
    };
  }, [delay]);

  return throttledFunc;
};
