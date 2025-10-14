import styled from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedHeading from '../common/AnimatedHeading';
import FuturisticButton from '../common/FuturisticButton';

const ContactSection = styled.section`
  padding: 100px 0;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 400;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: clamp(40px, 5vw, 60px);
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textDark};
  line-height: 1.6;
  margin-bottom: 3rem;
`;

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <ContactSection id="contact">
      <motion.div
        style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants}>
          <Subtitle>04. What’s Next?</Subtitle>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Title>Get In Touch</Title>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Description>
            My inbox is always open. Whether you have a question, a project proposal, or just want to
            say hello, I’ll get back to you! Feel free to reach out about any opportunities.
          </Description>
        </motion.div>
        <motion.div variants={itemVariants}>
          <FuturisticButton href="mailto:saahil.sawant24@gmail.com">
            Say Hello
          </FuturisticButton>
        </motion.div>
      </motion.div>
    </ContactSection>
  );
};

export default Contact;