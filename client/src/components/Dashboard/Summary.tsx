import styled from "styled-components";
import { TbWallet } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { GiExpense } from "react-icons/gi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import ExpensesModal from "./ExpensesModal/ExpensesModal";
import IncomesModal from "./IncomesModal/IncomesModal";
import { DashboardBox } from "../../assets/atoms/DashboardBox";
import { useGetTotalIncomeQuery } from "../../api/apiSlice";

const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  background-color: ${({ color }) => color};
  border-radius: 12px;
  cursor: pointer;
`;
const WalletIcon = styled(TbWallet)`
  font-size: 2rem;
  color: #ff9999;
`;

const IncomeIcon = styled(GiReceiveMoney)`
  font-size: 2rem;
  color: #25c196;
`;

const ItemContainer = styled.div`
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

const ExpenseIcon = styled(GiExpense)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.main.default};
`;

const AddIcon = styled(IoMdAddCircleOutline)`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.grey};
  cursor: pointer;
`;

const Value = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.title};
`;

const ValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Summary = () => {
  const [openExpensesModal, setOpenExpensesModal] = useState(false);
  const [openIncomesModal, setOpenIncomesModal] = useState(false);
  const handleOpenExpensesModal = () => {
    setOpenExpensesModal(true);
  };
  const hnadleOpenIncomesModal = () => {
    setOpenIncomesModal(true);
  };

  const { data: totalIncome } = useGetTotalIncomeQuery(undefined);

  return (
    <DashboardBox>
      <BoxWrapper>
        <ItemContainer>
          <IconContainer color="#ffe3e3">
            <WalletIcon />
          </IconContainer>
          <h3>Wallet</h3>
          <AddIcon />
        </ItemContainer>
        <ItemContainer onClick={hnadleOpenIncomesModal}>
          <IconContainer color="#a6eeda">
            <IncomeIcon />
          </IconContainer>
          <ValueContainer>
            <h3>Income</h3>
            <Value>${totalIncome?.totalIncome[0]?.totalIncome}</Value>
          </ValueContainer>
          <AddIcon />
        </ItemContainer>
        <ItemContainer onClick={handleOpenExpensesModal}>
          <IconContainer color="#b4cefc">
            <ExpenseIcon />
          </IconContainer>
          <h3>Expenses</h3>
          <AddIcon />
        </ItemContainer>
      </BoxWrapper>
      {openExpensesModal ? (
        <ExpensesModal setOpenExpensesModal={setOpenExpensesModal} />
      ) : null}
      {openIncomesModal ? (
        <IncomesModal setOpenIncomesModal={setOpenIncomesModal} />
      ) : null}
    </DashboardBox>
  );
};

export default Summary;
