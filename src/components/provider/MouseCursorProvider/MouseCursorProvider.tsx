import { createContext, useState } from 'react';
import React from 'react';

const initialState = false;

export const MouseCursorContext = createContext({
  hovering: initialState,
  toggleHovering: (value: boolean) => {},
});

export const MouseCursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [hovering, setHovering] = useState(initialState);
  const toggleHovering = (value: boolean) => {
    setHovering(value);
  };

  return (
    <MouseCursorContext.Provider value={{ hovering, toggleHovering }}>
      {children}
    </MouseCursorContext.Provider>
  );
};
