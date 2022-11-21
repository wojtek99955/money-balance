import { DashboardBox } from "../../../assets/atoms/DashboardBox";
import { useState } from "react";
import styled from "styled-components";
import RecentExpensesChart from "./RecentExpensesChart";
import RecentIncomesChart from "./RecentIncomesChart";

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 0.6rem 0.8rem;
  cursor: pointer;
`;
const BtnsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Wrapper = styled.div`
  padding: 1rem 0;
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
      <Wrapper>
        <BtnsContainer>
          <Button onClick={showExpensesChart}>Expenses</Button>
          <Button onClick={showIncomesChart}>Incomes</Button>
        </BtnsContainer>
        {currentChart === "expenses" ? (
          <RecentExpensesChart />
        ) : (
          <RecentIncomesChart />
        )}
      </Wrapper>
    </DashboardBox>
  );
};

export default RecentTransactionsCharts;
