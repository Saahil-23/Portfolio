// src/data/skills.jsx
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDocker, FaPython, FaGitAlt, FaAws } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiStyledcomponents, SiVite, SiExpress, SiMongodb, SiGnubash, SiKalilinux, SiWireshark, SiMetasploit, SiGithubactions } from 'react-icons/si';
import { VscTerminalCmd } from 'react-icons/vsc'; // A good icon for Burp Suite
import { FaMicrochip } from 'react-icons/fa6'; // A good icon for Ghidra

// New, categorized structure
export const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { name: 'JavaScript (ES6+)', icon: <SiJavascript /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3 / SCSS', icon: <FaCss3Alt /> },
    ]
  },
  {
    category: "Backend & Databases",
    skills: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
    ]
  },
  {
    category: "Cybersecurity & Pentesting",
    skills: [
      { name: 'Kali Linux', icon: <SiKalilinux /> },
      { name: 'Burp Suite', icon: <VscTerminalCmd /> },
      { name: 'Ghidra', icon: <FaMicrochip /> },
      { name: 'Metasploit', icon: <SiMetasploit /> },
      { name: 'Wireshark', icon: <SiWireshark /> },
    ]
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: 'Git & GitHub', icon: <FaGitAlt /> },
      { name: 'Docker', icon: <FaDocker /> },
    ]
  }
];