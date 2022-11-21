import { DashboardBox } from "../../../assets/atoms/DashboardBox";
import { useState } from "react";
import styled from "styled-components";
import RecentExpensesChart from "./RecentExpensesChart";

const Button = styled.button``;
const BtnsContainer = styled.div`
  display: flex;
`;
const RecentTransactionsCharts = () => {
  return (
    <DashboardBox>
      <BtnsContainer>
        <Button>Expenses</Button>
        <Button>Incomes</Button>
      </BtnsContainer>
      <RecentExpensesChart />
    </DashboardBox>
  );
};

export default RecentTransactionsCharts;
