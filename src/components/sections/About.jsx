import styled from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedHeading from '../common/AnimatedHeading';
import profilePic from '../../assets/images/PFP.jpeg';

const AboutSection = styled.section`
  min-height: 80vh;
  padding: 100px 0;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;

  @media (max-width: 768px) {
    display: block; // Stack vertically on smaller screens
  }
`;

const TextBlock = styled(motion.div)`
  color: ${({ theme }) => theme.colors.textDark};
  font-size: 1.1rem;
  line-height: 1.6;

  p {
    margin-bottom: 15px;
  }
`;

// --- NEW STYLED PICTURE COMPONENT ---
// This is where all the magic happens
const StyledPic = styled(motion.div)`
  position: relative;
  max-width: 300px;
  width: 100%;

  @media (max-width: 768px) {
    margin: 50px auto 0;
  }

  // This wrapper constrains the image to a good aspect ratio
  .image-wrapper {
    display: block;
    position: relative;
    width: 100%;
    padding-bottom: 100%; // Key Change: This creates a perfect square aspect ratio
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.primary};
    
    // The clean border that appears on hover
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid ${({ theme }) => theme.colors.primary};
      border-radius: ${({ theme }) => theme.borderRadius};
      transition: ${({ theme }) => theme.transition};
      transform: translate(15px, 15px);
      z-index: -1;
      
      @media (max-width: 768px) {
        transform: translate(10px, 10px);
      }
    }

    // The dark overlay that fades away on hover
    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: ${({ theme }) => theme.borderRadius};
      background-color: ${({ theme }) => theme.colors.darkBg};
      opacity: 0.5; // Key Change: Subtle overlay instead of harsh filters
      transition: ${({ theme }) => theme.transition};
    }
    
    &:hover, &:focus {
      &::after {
        opacity: 0; // The overlay disappears
      }
      &::before {
        transform: translate(10px, 10px); // The border moves in slightly
      }
    }
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; // Key Change: This crops the image to fit the container perfectly
    border-radius: ${({ theme }) => theme.borderRadius};
    z-index: 1;
  }
`;

const About = () => {
  return (
   <AboutSection id="about">
  <AnimatedHeading number="01" title="About Me" />
  <AboutContent>
    <TextBlock
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <p>
        Hello! I%apos%m Saahil Sawant, a passionate Developer and Cyber Security enthusiast currently studying at Shah and Anchor Kutchhi Engineering College. I actively participate in Capture The Flag (CTF) competitions and hackathons, where I enjoy tackling real-world security and development challenges.
      </p>
      <p>
        My background as a former rifle shooter has instilled in me a deep appreciation for precision and focus, qualities I bring to every line of code. I thrive in high-pressure environments, having placed in the top 10 at hackathons and consistently ranking among the top 20 in CTF competitions.
      </p>
      <p>
        I%apos%m driven by the thrill of understanding how systems work and making them better, creating applications that are not only functional and elegant but also performant and secure.
      </p>
    </TextBlock>

        <StyledPic
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="image-wrapper">
            <img src={profilePic} alt="Headshot of Saahil Sawant" />
          </div>
        </StyledPic>
      </AboutContent>
    </AboutSection>

  );
};

export default About;