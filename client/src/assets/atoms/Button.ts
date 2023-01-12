import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.main.default};
  border: none;
  border-radius: 12px;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  min-height: 3rem;
  min-width: 7.5rem;
  color: white;
  cursor: pointer;
  &:disabled {
    background-color: #c4d8fc;
    cursor: auto;
    &:hover {
      background-color: #c4d8fc;
    }
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.main.hover};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.main.active};
  }
`;
