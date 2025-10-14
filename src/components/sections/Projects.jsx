import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import AnimatedHeading from '../common/AnimatedHeading';
import { projectsData } from '../../data/projects';

// --- STYLED COMPONENTS (Unified Grid Layout) ---

const ProjectsSection = styled.section`
  padding: 100px 0;
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
  margin-top: 50px;
`;

const ProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.lightBg};
  padding: 2rem 1.75rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  transition: ${({ theme }) => theme.transition};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  &:hover {
    transform: translateY(-7px);
    box-shadow: 0 10px 30px -15px ${({ theme }) => theme.colors.primary_tint};
    h3 { // The title lights up on hover!
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const FolderIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
`;

const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  a {
    color: ${({ theme }) => theme.colors.textMedium};
    transition: color 0.3s;
    padding: 5px;
    svg { width: 22px; height: 22px; }
    &:hover { color: ${({ theme }) => theme.colors.primary}; }
  }
`;

const ProjectTitle = styled.h3`
  font-size: clamp(20px, 5vw, 22px);
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.textLight};
  transition: ${({ theme }) => theme.transition};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.textDark};
  font-size: 0.95rem;
  line-height: 1.5;
`;

const ProjectTechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin-top: 20px;
  gap: 15px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textDark};
`;

// --- THE COMPONENT ---

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <AnimatedHeading number="02" title="Some Things I've Built" />

      <ProjectsGrid>
        {projectsData.map((project, i) => (
          <ProjectCard 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div>
              <CardHeader>
                <FolderIcon><FiFolder size={40}/></FolderIcon>
                <ProjectLinks>
                  {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer"><FiGithub /></a>}
                  {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer"><FiExternalLink /></a>}
                </ProjectLinks>
              </CardHeader>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </div>
            <ProjectTechList>
              {project.tech.map((tech, j) => <li key={j}>{tech}</li>)}
            </ProjectTechList>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;