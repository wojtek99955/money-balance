import { useState } from "react";
import ExpensesModal from "../ExpensesModal/ExpensesModal";
import IncomesModal from "../IncomesModal/IncomesModal";
import { DashboardBox } from "../../../assets/atoms/DashboardBox";
import { useGetTotalIncomeQuery } from "../../../api/incomeApiSlice";
import { useGetTotalExpenseQuery } from "../../../api/expenseApiSlice";
import {
  BoxWrapper,
  IconContainer,
  WalletIcon,
  IncomeIcon,
  ItemContainer,
  ExpenseIcon,
  AddIcon,
  Value,
  ValueContainer,
} from "./SummaryStyle";
import LoaderContainer from "../../../assets/atoms/LoaderContainer";

const Summary = () => {
  const [openExpensesModal, setOpenExpensesModal] = useState(false);
  const [openIncomesModal, setOpenIncomesModal] = useState(false);
  const handleOpenExpensesModal = () => {
    setOpenExpensesModal(true);
  };
  const hnadleOpenIncomesModal = () => {
    setOpenIncomesModal(true);
  };

  const { data: totalIncome, isLoading: loadingIncome } =
    useGetTotalIncomeQuery(undefined);

  const { data: totalExpense, isLoading: loadingExpense } =
    useGetTotalExpenseQuery(undefined);

  const totalIncomeData = totalIncome?.totalIncome[0]?.totalIncome;
  const totalExpenseData = totalExpense?.totalExpense[0]?.totalExpense;

  const getWalletValue = () => {
    if (!totalExpenseData) {
      return totalIncomeData - 0;
    } else if (!totalIncomeData) {
      return 0 - totalExpenseData;
    } else {
      return totalIncomeData - totalExpenseData;
    }
  };

  const walletValue = getWalletValue();

  const loadingSummary = loadingIncome && loadingExpense;

  return (
    <DashboardBox>
      {loadingSummary ? <LoaderContainer /> : null}
      <BoxWrapper>
        <ItemContainer>
          <IconContainer color="#ffe3e3">
            <WalletIcon />
          </IconContainer>
          <ValueContainer>
            <h3>Wallet</h3>
            <Value>${walletValue ? walletValue : 0}</Value>
          </ValueContainer>
        </ItemContainer>
        <ItemContainer onClick={hnadleOpenIncomesModal}>
          <IconContainer color="#a6eeda">
            <IncomeIcon />
          </IconContainer>
          <ValueContainer>
            <h3>Income</h3>
            <Value color="#009F5F">
              ${totalIncomeData ? totalIncomeData : "0"}
            </Value>
          </ValueContainer>
          <AddIcon />
        </ItemContainer>
        <ItemContainer onClick={handleOpenExpensesModal}>
          <IconContainer color="#b4cefc">
            <ExpenseIcon />
          </IconContainer>
          <ValueContainer>
            <h3>Expenses</h3>
            <Value color="#E65016">
              ${totalExpenseData ? totalExpenseData : "0"}
            </Value>
          </ValueContainer>
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
