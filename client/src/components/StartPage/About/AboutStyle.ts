import styled from "styled-components";
import { BiWallet } from "react-icons/bi";
import { BiBarChartSquare } from "react-icons/bi";
import { BiMedal } from "react-icons/bi";
import { device } from "../../../assets/devices.js";

export const Container = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  h2 {
    color: ${({ theme }) => theme.colors.title};
    font-size: 2rem;
    text-align: center;
  }
  p {
    color: ${({ theme }) => theme.colors.grey};
    font-size: 1.2rem;
    padding-top: 2rem;

    &:first-of-type {
      max-width: 25rem;
      text-align: center;
    }
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 4rem 0;
  gap: 3rem;

  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
  }
`;
export const WalletIcon = styled(BiWallet)`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.main.default};
`;
export const ChartIcon = styled(BiBarChartSquare)`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.main.default};
`;
export const MedalIcon = styled(BiMedal)`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.main.default};
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.title};

    padding: 0.5rem 0;
  }
  p {
    color: ${({ theme }) => theme.colors.title};
    text-align: center;
    font-size: 1rem;
    width: 90%;
  }
`;
