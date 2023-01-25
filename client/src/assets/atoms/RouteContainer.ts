import styled from "styled-components";
import { device } from "../../assets/devices.js";

export const RouteContainer = styled.div`
  width: 100%;

  background-color: ${({ theme }) =>
    theme.colors.backgroundColor.lightBackground};
  padding: 1rem;
  padding-top: 1rem;
  position: relative;
  min-height: 100vh;

  @media ${device.tablet} {
    width: calc(100% - 12rem);
  }
`;
