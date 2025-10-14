import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

const MainContent = styled.main`
  padding: 0 150px; // Adjust padding as needed
  margin: 0 auto;
  max-width: 1600px;
  min-height: 100vh;

  @media (max-width: 1080px) {
    padding: 0 100px;
  }
  @media (max-width: 768px) {
    padding: 0 50px;
  }
  @media (max-width: 480px) {
    padding: 0 25px;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <MainContent>{children}</MainContent>
      <Footer />
    </>
  );
};

export default Layout;