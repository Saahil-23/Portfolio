import styled from 'styled-components';
import Layout from './components/layout/Layout';
import AnimatedCursor from './components/layout/AnimatedCursor';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBg};
`;

function App() {
  return (
    <AppContainer>
      <AnimatedCursor />
      <Layout>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </Layout>
    </AppContainer>
  );
}

export default App;