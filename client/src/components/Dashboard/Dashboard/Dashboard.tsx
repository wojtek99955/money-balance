import styled from "styled-components";
import Summary from "../Summary/Summary";
import Expenses from "../RecentExpenses/RecentExpenses";
import { RouteContainer } from "../../../assets/atoms/RouteContainer";
import Incomes from "../RecentIncomes/RecentIncomes";
import BiggestExpenses from "../BiggestExpenses/BiggestExpenses";
import RecentTransactionsCharts from "../RecentTransactionsCharts/RecentTransactionsCharts";
import { useGetUserQuery } from "../../../api/userSlice";
import { useGetAvatarQuery } from "../../../api/avatarSlice";
import { useNavigate } from "react-router-dom";
import {
  Title,
  TopSection,
  RouteWrapper,
  InputContainer,
  Profile,
  RecentOperations,
} from "./DashboardStyle";

const Dashboard = () => {
  const { data: userData, isLoading: userDataLoading } =
    useGetUserQuery(undefined);

  const username = userData ? userData[0].username : null;

  const { data: avatar, isLoading } = useGetAvatarQuery(undefined);
  const path = avatar ? avatar[0]?.path : null;
  const imgPath = `http://localhost:3500/${path}`;

  let navigate = useNavigate();

  const goToProfile = () => {
    navigate("/profile");
  };

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
          <Profile onClick={goToProfile}>
            <img src={imgPath} alt="avatar" />
            <span>{username}</span>
          </Profile>
        </TopSection>
        <Summary />
        <RecentOperations>
          <Expenses />
          <Incomes />
        </RecentOperations>
        <RecentTransactionsCharts />
        <BiggestExpenses />
      </RouteWrapper>
    </RouteContainer>
  );
};

export default Dashboard;
