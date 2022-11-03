import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
`;
const MainTitle = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  font-size: 2.5rem;
  margin: auto;
`;

const MainSection = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
`;

const AuthSection = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 5rem;
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  padding: 0.8rem 2.5rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  width: 12rem;

  &:first-of-type {
    background-color: ${({ theme }) => theme.colors.main};
    color: white;
  }
  color: ${({ theme }) => theme.colors.main};
  border: ${({ theme }) => `2px solid ${theme.colors.main}`};
`;

const StartPage = () => {
  return (
    <Container>
      <MainSection>
        <MainTitle>
          Start manage your Finances <br /> smart with Money Balance.
        </MainTitle>
        <AuthSection>
          <StyledLink to="/sign-up">Register free</StyledLink>
          <StyledLink to="/sign-in">Sign in</StyledLink>
        </AuthSection>
      </MainSection>
    </Container>
  );
};

export default StartPage;
