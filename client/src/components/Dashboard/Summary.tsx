import styled from "styled-components";
import { TbWallet } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { GiExpense } from "react-icons/gi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useState } from "react";
import ExpensesModal from "./ExpensesModal/ExpensesModal";
import { useNavigate } from "react-router-dom";
import IncomesModal from "./IncomesModal/IncomesModal";
import { DashboardBox } from "../../assets/atoms/DashboardBox";

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

const Summary = () => {
  const [openExpensesModal, setOpenExpensesModal] = useState(false);
  const [openIncomesModal, setOpenIncomesModal] = useState(false);
  const handleOpenExpensesModal = () => {
    setOpenExpensesModal(true);
  };
  const hnadleOpenIncomesModal = () => {
    setOpenIncomesModal(true);
  };
  let navigate = useNavigate();
  const goToExpenses = () => {
    navigate("/expenses");
  };
  const goToIncomes = () => {
    navigate("/incomes");
  };
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
        <ItemContainer>
          <IconContainer color="#a6eeda" onClick={goToIncomes}>
            <IncomeIcon />
          </IconContainer>
          <h3>Income</h3>
          <AddIcon onClick={hnadleOpenIncomesModal} />
        </ItemContainer>
        <ItemContainer>
          <IconContainer color="#b4cefc" onClick={goToExpenses}>
            <ExpenseIcon />
          </IconContainer>
          <h3>Expenses</h3>
          <AddIcon onClick={handleOpenExpensesModal} />
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
