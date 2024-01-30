import { motion, Variants } from 'framer-motion';

const lineVariants: Variants = {
  off: {
    scaleX: 0,
  },
  on: {
    scaleX: 1,
  },
};

const textVariants: Variants = {
  off: {
    opacity: 0,
    y: 10,
  },
  on: {
    opacity: 1,
    y: 0,
  },
};

interface TopLinedTextBoxProps {
  children: React.ReactNode;
  width: string;
  color: string;
  dir?: 'left' | 'right';
  delay?: number;
}

const TopLinedTextBox = ({ children, width, color, dir, delay }: TopLinedTextBoxProps) => {
  const style = {
    width,
    height: '2px',
    backgroundColor: color,
    transformOrigin: `center ${dir === 'left' ? 'right' : 'left'}`,
  };

  return (
    <>
      <motion.div
        variants={lineVariants}
        initial="off"
        whileInView="on"
        viewport={{ once: true }}
        transition={{
          delay: delay ? delay : 0,
          duration: 0.3,
          ease: 'anticipate',
        }}
        style={style}
      ></motion.div>
      <motion.div
        variants={textVariants}
        initial="off"
        whileInView="on"
        viewport={{ once: true }}
        transition={{
          delay: delay ? delay + 0.3 : 0.3,
          duration: 0.4,
          ease: 'easeOut',
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default TopLinedTextBox;
