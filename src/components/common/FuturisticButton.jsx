import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledButton = styled(motion.a)`
  display: inline-block;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.75rem 1.5rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.9rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary_tint};
    box-shadow: 0 0 15px ${({ theme }) => theme.colors.primary};
  }
`;

const FuturisticButton = ({ children, href }) => {
  return (
    <StyledButton
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </StyledButton>
  );
};

export default FuturisticButton;