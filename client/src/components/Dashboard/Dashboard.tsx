import styled from "styled-components";
import Sidebar from "./Sidebar/Sidebar";
import Summary from "./Summary";
import { useState } from "react";
import ExpensesModal from "../ExpensesModal/ExpensesModal";
import Expenses from "../Expenses/Expenses";

const RouteContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) =>
    theme.colors.backgroundColor.lightBackground};
  padding: 1rem;
`;

const Title = styled.div`
  h2 {
    color: ${({ theme }) => theme.colors.title};
  }
  p {
    color: ${({ theme }) => theme.colors.grey};
  }
`;

const TopSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;
const RouteWrapper = styled.div`
  width: 100%;
`;
const InputContainer = styled.div`
  width: 14rem;
  input {
    display: block;
    border-radius: 12px;
    border: none;
    width: 100%;
    padding: 0.4rem;
  }
`;

const Profile = styled.div`
  span {
    font-weight: 600;
  }
`;

const Dashboard = () => {
  const username = JSON.parse(localStorage.getItem("username")!);

  return (
    <RouteContainer>
      <RouteWrapper>
        <TopSection>
          <Title>
            <h2>Dashboard</h2>
            <p>detailed information about your expenses</p>
          </Title>
          <InputContainer>
            <input type="text" placeholder="Search..." />
          </InputContainer>
          <Profile>
            <span>{username}</span>
          </Profile>
        </TopSection>
        <Summary />
        <Expenses />
      </RouteWrapper>
    </RouteContainer>
  );
};

export default Dashboard;
