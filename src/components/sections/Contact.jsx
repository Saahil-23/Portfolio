import styled from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedHeading from '../common/AnimatedHeading';
import FuturisticButton from '../common/FuturisticButton';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';

// --- STYLED COMPONENTS ---

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

// New: Social media links wrapper
const SocialLinksWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;

  a {
    color: ${({ theme }) => theme.colors.textMedium};
    padding: 0.5rem;
    transition: ${({ theme }) => theme.transition};

    svg {
      width: 24px;
      height: 24px;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      transform: translateY(-3px);
    }
  }
`;

// --- ANIMATION VARIANTS ---

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// --- THE COMPONENT ---

const Contact = () => {
  // Array of your social links for cleaner code
  const socialLinks = [
    { url: 'https://github.com/Saahil-23', icon: <FiGithub />, label: 'GitHub' },
    { url: 'https://www.linkedin.com/in/saahil-sawant-9b88b6302/', icon: <FiLinkedin />, label: 'LinkedIn' },
    { url: 'https://www.instagram.com/saahil_sawant_/', icon: <FiInstagram />, label: 'Instagram' },
    { url: 'https://discord.com/users/zennon0638', icon: <FaDiscord />, label: 'Discord' },
  ];

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

        <SocialLinksWrapper variants={itemVariants}>
          {socialLinks.map((social) => (
            <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
              {social.icon}
            </a>
          ))}
        </SocialLinksWrapper>
      </motion.div>
    </ContactSection>
  );
};

export default Contact;