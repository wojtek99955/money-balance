import styled from "styled-components";
export const RouteContainer = styled.div`
  width: calc(100% - 13rem);
  background-color: ${({ theme }) =>
    theme.colors.backgroundColor.lightBackground};
  padding: 1rem;
  padding-top: 1rem;
  position: relative;
`;
