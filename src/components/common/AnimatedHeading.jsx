import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeadingWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  width: 100%;
`;

const Number = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 2rem;
  font-weight: 600;
  white-space: nowrap;
`;

const Line = styled(motion.div)`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.textDark};
  width: 100%;
  margin-left: 1rem;
`;

const headingVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const lineVariants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: { scaleX: 1, originX: 0, transition: { duration: 0.8, delay: 0.3 } },
};

const AnimatedHeading = ({ number, title }) => {
  return (
    <HeadingWrapper
      variants={headingVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Number>{number}.</Number>
      <Title>{title}</Title>
      <Line variants={lineVariants} />
    </HeadingWrapper>
  );
};

export default AnimatedHeading;