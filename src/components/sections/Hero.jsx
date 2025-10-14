import styled from 'styled-components';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import FuturisticButton from '../common/FuturisticButton';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 70px; // To offset navbar
`;

const Name = styled(motion.h1)`
  font-size: clamp(40px, 8vw, 80px);
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: 600;
  margin: 0;
`;

const Title = styled(motion.h2)`
  font-size: clamp(40px, 8vw, 70px);
  color: ${({ theme }) => theme.colors.textDark};
  font-weight: 600;
  margin: 0;
  margin-top: 10px;
`;

const Subtitle = styled(motion.p)`
  margin-top: 25px;
  max-width: 580px;
  color: ${({ theme }) => theme.colors.textDark};
  line-height: 1.6;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <HeroSection id="hero">
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants}>
          <TypeAnimation
            sequence={['Hi, my name is', 1000]}
            wrapper="h3"
            speed={50}
            style={{ 
              fontSize: '1rem', 
              fontFamily: 'var(--font-mono)', 
              color: 'var(--primary)' // Corrected to use the variable from GlobalStyles
            }}
          />
        </motion.div>

        <Name variants={itemVariants}>Saahil Sawant.</Name>
        <Title variants={itemVariants}>I build secure & elegant code.</Title>
        
        <Subtitle variants={itemVariants}>
          I'm a Developer and competitive CTF player specializing in building
          high-performance web applications with a sharp focus on security.
          My background in competitive programming and security challenges
          drives me to create robust, elegant, and secure digital experiences.
        </Subtitle>
        
        <motion.div variants={itemVariants} style={{ marginTop: '50px' }}>
          {/* Make sure to place your resume in the 'public' folder */}
          <FuturisticButton href={`${import.meta.env.BASE_URL}resume.pdf`}>
             View My Resume
          </FuturisticButton>
        </motion.div>
      </motion.div>
    </HeroSection>
  );
};

export default Hero;