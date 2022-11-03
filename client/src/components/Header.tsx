import styled from "styled-components";
import Logo from "../assets/atoms/Logo";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  padding: 0.8rem 1rem;
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
  &:first-of-type {
    color: white;
    background-color: ${({ theme }) => theme.colors.main};
  }
  color: ${({ theme }) => theme.colors.main};
  border: ${({ theme }) => `2px solid ${theme.colors.main}`};
  padding: 0.4rem 1.3rem;
  margin-left: 1rem;
  border-radius: 8px;
`;

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
