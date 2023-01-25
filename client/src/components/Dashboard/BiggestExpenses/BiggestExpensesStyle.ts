import styled from "styled-components";
import { device } from "../../../assets/devices.js";

export const Container = styled.div`
  h3 {
    margin: 2rem 0;
  }
`;

export const ExpensesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoadingBox = styled.div`
  min-height: 10rem;
  position: relative;
  width: 100%;
`;
