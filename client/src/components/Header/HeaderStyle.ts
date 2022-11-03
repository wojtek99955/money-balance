import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  padding: 0.8rem 1rem;
  border-bottom: 1px solid #e1e4e7;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.nav``;

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:first-of-type {
    color: white;
    background-color: ${({ theme }) => theme.colors.main.default};
    border: ${({ theme }) => `2px solid ${theme.colors.main.default}`};
    &:hover {
      background-color: ${({ theme }) => theme.colors.main.hover};
      border: ${({ theme }) => `2px solid ${theme.colors.main.hover}`};
    }
    &:active {
      background-color: ${({ theme }) => theme.colors.main.active};
      border: ${({ theme }) => `2px solid ${theme.colors.main.active}`};
    }
  }
  &:last-of-type {
    color: ${({ theme }) => theme.colors.main.default};
    border: ${({ theme }) => `2px solid ${theme.colors.main.default}`};
    &:hover {
      background-color: ${({ theme }) => theme.colors.main.hover};
      border: ${({ theme }) => `2px solid ${theme.colors.main.hover}`};
      color: white;
    }
    &:active {
      background-color: ${({ theme }) => theme.colors.main.active};
      border: ${({ theme }) => `2px solid ${theme.colors.main.active}`};
    }
  }
  padding: 0.4rem 1.3rem;
  margin-left: 1rem;
  border-radius: 8px;
`;
