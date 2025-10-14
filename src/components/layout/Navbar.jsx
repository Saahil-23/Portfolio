import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// --- Styled Components ---

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background: ${({ theme }) => theme.colors.navBg};
  backdrop-filter: blur(10px);
  z-index: 100;
`;

const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1.5rem;
  text-decoration: none;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary_tint};
    transform: translate(-3px, -3px);
    box-shadow: 3px 3px 0 0 ${({ theme }) => theme.colors.primary};
  }
`;

const DesktopNavLinks = styled(motion.ul)`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.li)`
  color: ${({ theme }) => theme.colors.textLight};
  font-family: ${({ theme }) => theme.fonts.mono};
  cursor: pointer;
  transition: color 0.3s;
  font-size: 0.9rem;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ResumeButton = styled.a`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.8rem;
  text-decoration: none;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary_tint};
  }
`;

// --- Mobile Navigation ---

const HamburgerMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 101;

    div {
      width: 2rem;
      height: 0.25rem;
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;
    }
  }
`;

const MobileNavMenu = styled(motion.div)`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.lightBg};
    height: 100vh;
    width: 75vw;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 99;
  }
`;

const MobileNavLinks = styled.ul`
  list-style: none;
  text-align: center;
  li {
    margin: 2rem 0;
  }
`;

// --- Animation Variants ---

const navVariants = {
  hidden: { y: -100 },
  visible: { y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
};

const navLinksContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const navLinkItemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const mobileMenuVariants = {
  hidden: { x: '100vw' },
  visible: { x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { x: '100vw', transition: { duration: 0.3, ease: 'easeIn' } }
};


// --- The Component ---

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const links = ['About', 'Projects', 'Skills', 'Contact'];

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <Nav variants={navVariants} initial="hidden" animate="visible">
        <LogoWrapper href="#hero">
          SS
        </LogoWrapper>
        
        {/* --- Desktop Navigation --- */}
        <DesktopNavLinks variants={navLinksContainerVariants} initial="hidden" animate="visible">
          {links.map((link, i) => (
            <NavLink key={link} variants={navLinkItemVariants}>
              <a href={`#${link.toLowerCase()}`}>{`0${i + 1}. ${link}`}</a>
            </NavLink>
          ))}
          <motion.div variants={navLinkItemVariants}>
            <ResumeButton href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </ResumeButton>
          </motion.div>
        </DesktopNavLinks>

        {/* --- Hamburger Icon --- */}
        <HamburgerMenu onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          <div />
          <div />
          <div />
        </HamburgerMenu>
      </Nav>

      {/* --- Mobile Menu --- */}
      {isMobileMenuOpen && (
        <MobileNavMenu
          variants={mobileMenuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <MobileNavLinks>
            {links.map((link, i) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)}>
                  <span style={{ color: 'var(--primary)' }}>0{i+1}. </span>{link}
                </a>
              </li>
            ))}
             <li>
                <ResumeButton href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{fontSize: '1rem', padding: '1rem 2rem'}}>
                  Resume
                </ResumeButton>
            </li>
          </MobileNavLinks>
        </MobileNavMenu>
      )}
    </>
  );
};

export default Navbar;