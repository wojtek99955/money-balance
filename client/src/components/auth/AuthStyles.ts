import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 50%;
  padding: 0 2rem 0 3rem;

  h1 {
    color: ${({ theme }) => theme.colors.title};
    font-size: 2.5rem;
    font-weight: 700;
  }
  input {
    display: block;
    width: 100%;
    margin: 1rem 0;
    padding: 0.6rem;
    border: ${({ theme }) => `2px solid ${theme.colors.lightGrey}`};
    font-size: 1.2rem;
    border-radius: 8px;
    height: 3.8rem;
  }
  button {
    background-color: ${({ theme }) => theme.colors.main.default};
    border: none;
    color: white;
    padding: 1rem 0;
    width: 100%;
    font-size: 1.2rem;
    border-radius: 8px;
    cursor: pointer;
    height: 3.8rem;
    &:hover {
      background-color: ${({ theme }) => theme.colors.main.hover};
    }
    &:active {
      background-color: ${({ theme }) => theme.colors.main.active};
    }
  }
  label {
    color: #8894a9;
    font-weight: 600;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.main.default};
    &:hover {
      color: ${({ theme }) => theme.colors.main.hover};
    }
  }
  div {
    &:first-of-type {
      text-transform: uppercase;
    }
    margin: 1rem 0;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const FormWrapper = styled.div`
  padding-top: 2rem;
`;

export const SvgContainer = styled.div`
  width: 100%;
  max-width: 700px;
`;
export const Wrapper = styled.div`
  width: 50%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lightBackground};
  align-items: center;
`;
export const Description = styled.div`
  p {
    color: ${({ theme }) => theme.colors.grey};
    padding: 2rem 0;
    width: 70%;
    font-size: 1.1rem;
  }
  margin-bottom: 10rem;
`;
