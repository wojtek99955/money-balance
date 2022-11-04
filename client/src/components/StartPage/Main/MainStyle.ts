import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) =>
    theme.colors.backgroundColor.lightBackground};
  min-height: 100vh;
`;
export const MainTitle = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  font-size: 2.5rem;
  margin: auto;
  text-align: center;
`;

export const MainSection = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: auto;
  padding-top: 8rem;

  p {
    color: ${({ theme }) => theme.colors.grey};
    font-size: 1.2rem;
    margin-top: 2rem;
    text-align: center;
  }
`;

export const AuthSection = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
`;

export const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  padding: 1rem 2.6rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  width: 12rem;
  background-color: ${({ theme }) => theme.colors.main.default};
  color: white;
  &:hover {
    background-color: ${({ theme }) => theme.colors.main.hover};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.main.active};
  }
`;
export const SvgContainer = styled.div`
  width: 70%;
  margin: auto;
  padding: 4rem 0;
`;
