import Logo from "../../assets/atoms/Logo";
import { useLocation } from "react-router-dom";
import { StyledHeader, Container, Nav, StyledLink } from "./HeaderStyle";
const Header = () => {
  let location = useLocation();
  return (
    <>
      {location.pathname === "/sign-in" ||
      location.pathname === "/sign-up" ? null : (
        <>
          <StyledHeader>
            <Container>
              <Logo />
              <Nav>
                <StyledLink to="/sign-in">Sign In</StyledLink>
                <StyledLink to="/sign-up">Sign Up</StyledLink>
              </Nav>
            </Container>
          </StyledHeader>
        </>
      )}
    </>
  );
};

export default Header;
