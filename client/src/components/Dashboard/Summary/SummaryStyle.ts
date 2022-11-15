import styled from "styled-components";
import { TbWallet } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { GiExpense } from "react-icons/gi";
import { IoMdAddCircleOutline } from "react-icons/io";

export const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  background-color: ${({ color }) => color};
  border-radius: 12px;
  cursor: pointer;
`;
export const WalletIcon = styled(TbWallet)`
  font-size: 2rem;
  color: #ff9999;
`;

export const IncomeIcon = styled(GiReceiveMoney)`
  font-size: 2rem;
  color: #25c196;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  h3 {
    color: ${({ theme }) => theme.colors.grey};
  }
  &:not(:first-of-type) {
    cursor: pointer;
  }
`;

export const ExpenseIcon = styled(GiExpense)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.main.default};
`;

export const AddIcon = styled(IoMdAddCircleOutline)`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.grey};
  cursor: pointer;
`;

export const Value = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.title};
  font-weight: 700;
  color: ${({ color }) => color};
`;

export const ValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
