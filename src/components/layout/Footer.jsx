import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 1.5rem;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.textDark};
  font-size: 0.8rem;

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>Designed & Built by Saahil Sawant</div>
      <div>
        <a href="https://github.com/Saahil-23/Portfolio" target="_blank" rel="noopener noreferrer">
          View Source on GitHub
        </a>
      </div>
    </StyledFooter>
  );
};

export default Footer;