import styled from "styled-components";
import { BiWallet } from "react-icons/bi";
import { BiBarChartSquare } from "react-icons/bi";
import { BiMedal } from "react-icons/bi";

export const Container = styled.div`
  margin: 2rem 1rem;
  h2 {
    color: ${({ theme }) => theme.colors.title};
    font-size: 2rem;
    text-align: center;
  }
  p {
    color: ${({ theme }) => theme.colors.grey};
    font-size: 1.2rem;
    width: 20rem;
    margin: auto;
    padding-top: 2rem;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 4rem 0;
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
    padding: 0.5rem 0;
  }
  p {
    margin-top: 2rem;
    color: ${({ theme }) => theme.colors.title};
    text-align: center;
    font-size: 1rem;
  }
`;
