import { useContext } from 'react';
import { MouseCursorContext } from '../components/provider/MouseCursorProvider/MouseCursorProvider';

export const useMouseCursor = () => useContext(MouseCursorContext);
