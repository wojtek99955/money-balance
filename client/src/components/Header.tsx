import styled from "styled-components";
import Logo from "../assets/atoms/Logo";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  padding: 0.3rem 1rem;
  border-bottom: 1px solid #e1e4e7;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav``;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

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
