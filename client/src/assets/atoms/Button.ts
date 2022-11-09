import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.main.default};
  border: none;
  border-radius: 12px;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  color: white;
`;
