import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Cursor = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 24px;
  height: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  pointer-events: none; /* Crucial */
  z-index: 9999;
  mix-blend-mode: difference;
`;

const AnimatedCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 12, // center the cursor
      y: mousePosition.y - 12,
    },
  };

  return <Cursor variants={variants} animate="default" />;
};

export default AnimatedCursor;