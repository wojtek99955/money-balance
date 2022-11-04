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

export default Main;
