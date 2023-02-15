import AnimatedStats from "../../../assets/svg/AnimatedStats";
import {
  Container,
  MainTitle,
  MainSection,
  AuthSection,
  StyledLink,
  SvgContainer,
} from "./MainStyle";

const Main = () => {
  return (
    <Container>
      <MainSection>
        <MainTitle>
          Start manage your finance <br /> smart with Money Balance.
        </MainTitle>
        <p>
          Discover how money balance can change the way you think about your
          finances.
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

export default Main;
