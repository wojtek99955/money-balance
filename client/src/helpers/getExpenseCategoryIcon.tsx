import styled from "styled-components";
import { BsCupStraw } from "react-icons/bs";
import { BsBagDash } from "react-icons/bs";
import { BsCreditCard } from "react-icons/bs";
import { BsGift } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineCar } from "react-icons/ai";

interface StyleProps {
  color: string;
}

const RestaurantsIcon = styled(BsCupStraw)`
  font-size: 1.4rem;
  color: #397ef6;
`;

const ShoppingIcon = styled(BsBagDash)`
  font-size: 1.4rem;
  color: #917be8;
`;

const CreditsIcon = styled(BsCreditCard)`
  font-size: 1.4rem;
`;

const GiftIcon = styled(BsGift)`
  font-size: 1.4rem;
  color: #ff9999;
`;

const TransportationIcon = styled(AiOutlineCar)`
  font-size: 1.6rem;
  color: #e3b940;
`;

const IconContainer = styled.div<StyleProps>`
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 12%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
`;

export const getExpenseCategoryIcon = (category: string) => {
  switch (category) {
    case "restaurants":
      return (
        <IconContainer color="#b4cefc">
          <RestaurantsIcon />
        </IconContainer>
      );
    case "shopping":
      return (
        <IconContainer color="#f3f1ff">
          <ShoppingIcon />
        </IconContainer>
      );
    case "credit/loans":
      return <CreditsIcon />;
    case "gifts":
      return (
        <IconContainer color="#ffe3e3">
          <GiftIcon />
        </IconContainer>
      );
    case "transportation":
      return (
        <IconContainer color="#fef8e6">
          <TransportationIcon />
        </IconContainer>
      );
  }
};
