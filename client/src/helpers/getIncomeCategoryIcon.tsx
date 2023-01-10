import styled from "styled-components";
import { FaMoneyBillWave } from "react-icons/fa";
import { BiMedal } from "react-icons/bi";
import { BsBarChartLine } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";

interface StyleProps {
  color: string;
}

const IconContainer = styled.div<StyleProps>`
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 12%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
`;

const SalaryIcon = styled(FaMoneyBillWave)`
  font-size: 1.4rem;
  color: #397ef6;
`;

const PrizeIcon = styled(BiMedal)`
  font-size: 1.4rem;
  color: #917be8;
`;

const InvestmentsIcon = styled(BsBarChartLine)`
  font-size: 1.4rem;
  color: #ff9999;
`;

const OtherIcon = styled(BsThreeDots)`
  width: 2.6rem;
  height: 2.6rem;
  color: #767882;
`;

export const getIncomeCategoryIcon = (category: string) => {
  switch (category) {
    case "salary":
      return (
        <IconContainer color="#b4cefc">
          <SalaryIcon />
        </IconContainer>
      );
    case "prize":
      return (
        <IconContainer color="#f3f1ff">
          <PrizeIcon />
        </IconContainer>
      );
    case "investments":
      return (
        <IconContainer color="#ffe3e3">
          <InvestmentsIcon />
        </IconContainer>
      );
    case "other":
      return (
        <IconContainer color="#BFC0C5">
          <OtherIcon />
        </IconContainer>
      );
  }
};
