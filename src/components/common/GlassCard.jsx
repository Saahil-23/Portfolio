import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardWrapper = styled(motion.div)`
  background: ${({ theme }) => theme.colors.glassBg};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  
  // Use a theme variable for the border for consistency
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  border-radius: 10px;
  padding: 1.5rem;
  width: 100%;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  
  // Add a smooth transition for our new hover effects
  transition: 
    transform 0.3s ease, 
    border-color 0.3s ease, 
    box-shadow 0.3s ease;

  // The new "lift and glow" hover effect
  &:hover {
    transform: translateY(-5px) scale(1.02);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 
      0 10px 40px rgba(0, 0, 0, 0.2), 
      0 0 20px ${({ theme }) => theme.colors.primary_tint};
  }
`;

// This component is now more flexible. The parent component is responsible for
// passing in the animation variants, making it highly reusable.
const GlassCard = ({ children, className, variants, ...rest }) => {
  return (
    <CardWrapper
      className={className}
      // Pass down the variants and any other framer-motion props
      variants={variants}
      {...rest}
    >
      {children}
    </CardWrapper>
  );
};

export default GlassCard;