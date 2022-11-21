import { DashboardBox } from "../../../assets/atoms/DashboardBox";
import { useState } from "react";
import styled from "styled-components";
import RecentExpensesChart from "./RecentExpensesChart";
import RecentIncomesChart from "./RecentIncomesChart";

const Button = styled.button``;
const BtnsContainer = styled.div`
  display: flex;
`;
const RecentTransactionsCharts = () => {
  const [currentChart, setCurrentChart] = useState<"expenses" | "incomes">(
    "expenses"
  );

  const showExpensesChart = () => {
    setCurrentChart("expenses");
  };
  const showIncomesChart = () => {
    setCurrentChart("incomes");
  };
  return (
    <DashboardBox>
      <BtnsContainer>
        <Button onClick={showExpensesChart}>Expenses</Button>
        <Button onClick={showIncomesChart}>Incomes</Button>
      </BtnsContainer>
      {currentChart === "expenses" ? (
        <RecentExpensesChart />
      ) : (
        <RecentIncomesChart />
      )}
    </DashboardBox>
  );
};

export default RecentTransactionsCharts;
