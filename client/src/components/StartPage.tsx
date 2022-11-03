import styled from "styled-components";
import { Link } from "react-router-dom";
import AnimatedStats from "../assets/svg/AnimatedStats";

const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) =>
    theme.colors.backgroundColor.lightBackground};
`;
const MainTitle = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  font-size: 2.5rem;
  margin: auto;
  text-align: center;
`;

const MainSection = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: auto;
  padding-top: 10rem;

  p {
    color: ${({ theme }) => theme.colors.grey};
    font-size: 1.2rem;
    margin-top: 3rem;
    text-align: center;
  }
`;

const AuthSection = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 5rem;
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  padding: 1rem 2.6rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  width: 12rem;
  background-color: ${({ theme }) => theme.colors.main};
  color: white;
`;
const SvgContainer = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 8rem;
`;
const StartPage = () => {
  return (
    <Container>
      <MainSection>
        <MainTitle>
          Start manage your Finances <br /> smart with Money Balance.
        </MainTitle>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus,
          placeat excepturi at molestias maxime minus aut. Ea cum iste
          voluptatum.
        </p>
        <AuthSection>
          <StyledLink to="/sign-up">Register free</StyledLink>
        </AuthSection>
      </MainSection>
      <SvgContainer>
        <AnimatedStats />
      </SvgContainer>
    </Container>
  );
};

export default StartPage;
