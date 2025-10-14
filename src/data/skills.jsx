// src/data/skills.js
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaSass, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiStyledcomponents, SiMongodb, SiVite } from 'react-icons/si';

export const skillsData = [
  { name: 'JavaScript (ES6+)', icon: <SiJavascript /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'Sass', icon: <FaSass /> },
  { name: 'Styled Components', icon: <SiStyledcomponents /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Vite', icon: <SiVite /> },
  { name: 'Git', icon: <FaGitAlt /> },
  // Add more skills here
];