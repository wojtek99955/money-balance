import Logo from "../../../assets/atoms/Logo";
import { StyledHeader, Container, Nav, StyledLink } from "./HeaderStyle";
const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Logo />
        <Nav>
          <StyledLink to="/sign-in">Sign In</StyledLink>
          <StyledLink to="/sign-up">Sign Up</StyledLink>
        </Nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
