import { motion } from 'framer-motion';
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
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: delay ? delay : 0,
          duration: 0.3,
          ease: 'anticipate',
        }}
        style={style}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
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
