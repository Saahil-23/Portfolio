import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import GlassCard from '../common/GlassCard'; // Import the GlassCard

// --- STYLED COMPONENTS (New "Sexy & Futuristic" Design) ---

const ContactSection = styled.section`
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;

// A new container that uses the GlassCard for the futuristic panel effect
const ContactCard = styled(GlassCard)`
  max-width: 650px;
  text-align: center;
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
  font-size: clamp(36px, 5vw, 50px);
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textDark};
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 90%;
`;

// A glowing, futuristic button to replace the simple text link
const StyledEmailButton = styled(motion.a)`
  display: inline-block;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.85rem 1.75rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary_tint};
    box-shadow: 0 0 15px ${({ theme }) => theme.colors.primary};
  }
`;

// An integrated social bar with a separator line
const SocialBar = styled(motion.div)`
  width: 100%;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.glassBorder};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  a {
    color: ${({ theme }) => theme.colors.textMedium};
    padding: 0.5rem;
    transition: ${({ theme }) => theme.transition};

    svg {
      width: 30px;
      height: 30px;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      transform: translateY(-5px);
    }
  }
`;

// --- ANIMATION VARIANTS ---

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // A smoother, more dynamic ease
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// --- THE COMPONENT ---

const Contact = () => {
  const socialLinks = [
    { url: 'https://github.com/Saahil-23', icon: <FiGithub />, label: 'GitHub' },
    { url: 'https://www.linkedin.com/in/saahil-sawant-9b88b6302/', icon: <FiLinkedin />, label: 'LinkedIn' },
    { url: 'https://www.instagram.com/saahil_sawant_/', icon: <FiInstagram />, label: 'Instagram' },
    { url: 'https://discord.com/users/zennon0638', icon: <FaDiscord />, label: 'Discord' },
  ];

  return (
    <ContactSection id="contact">
      <ContactCard
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants}>
          <Subtitle>04. What’s Next?</Subtitle>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Title>Initiate Contact</Title>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Description>
            I'm currently seeking new opportunities and am always open to interesting collaborations. My inbox is ready for your transmission.
          </Description>
        </motion.div>

        <motion.div variants={itemVariants}>
          <StyledEmailButton href="mailto:saahil.sawant24@gmail.com">
            saahil.sawant24@gmail.com
          </StyledEmailButton>
        </motion.div>

        <SocialBar variants={itemVariants}>
          {socialLinks.map((social) => (
            <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
              {social.icon}
            </a>
          ))}
        </SocialBar>
      </ContactCard>
    </ContactSection>
  );
};

export default Contact;