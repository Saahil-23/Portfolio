import styled from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedHeading from '../common/AnimatedHeading';
import { skillsData } from '../../data/skills.jsx'; // Make sure this path is correct

const SkillsSection = styled.section`
  padding: 100px 0;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 50px;
`;

const CategoryWrapper = styled.div`
  width: 100%;
`;

const CategoryTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textLight};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1.5rem;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1.5rem 1rem;
  background: ${({ theme }) => theme.colors.lightBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: ${({ theme }) => theme.transition};
  
  svg {
    font-size: 2.5rem; // Slightly smaller for a cleaner look
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.textMedium};
    transition: color 0.3s;
  }
  
  span {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textDark};
    transition: color 0.3s;
  }

  &:hover {
    transform: translateY(-5px);
    background-color: ${({ theme }) => theme.colors.primary_tint};
    svg {
      color: ${({ theme }) => theme.colors.primary};
    }
    span {
      color: ${({ theme }) => theme.colors.textLight};
    }
  }
`;

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <AnimatedHeading number="04" title="My Tech & Tools" />
      <SkillsContainer>
        {skillsData.map((category, index) => (
          <CategoryWrapper key={index}>
            <CategoryTitle>{category.category}</CategoryTitle>
            <SkillsGrid
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {category.skills.map((skill, skillIndex) => (
                <SkillItem key={skillIndex} variants={itemVariants}>
                  {skill.icon}
                  <span>{skill.name}</span>
                </SkillItem>
              ))}
            </SkillsGrid>
          </CategoryWrapper>
        ))}
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;