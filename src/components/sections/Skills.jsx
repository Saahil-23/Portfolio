import styled from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedHeading from '../common/AnimatedHeading';
import { skillsData } from '../../data/skills';

const SkillsSection = styled.section`
  padding: 100px 0;
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 2rem;
  margin-top: 50px;
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
    font-size: 3rem;
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

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <AnimatedHeading number="03" title="My Tech Stack" />
      <SkillsGrid variants={gridVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {skillsData.map((skill, i) => (
          <SkillItem key={i} variants={itemVariants}>
            {skill.icon}
            <span>{skill.name}</span>
          </SkillItem>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills;