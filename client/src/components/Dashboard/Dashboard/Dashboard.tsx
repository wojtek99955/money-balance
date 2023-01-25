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
  AvatarContainer,
  TopSectionWrapper,
} from "./DashboardStyle";
import LoaderContainer from "../../../assets/atoms/LoaderContainer";
import ShowDataDropdown from "../ShowDataDropdown/ShowDataDropdown";
import Hamburger from "../../../assets/atoms/Hamburger";

const Dashboard = () => {
  const { data: userData, isLoading: userDataLoading } =
    useGetUserQuery(undefined);

  const username = userData ? userData[0].username : null;

  const { data: avatar, isLoading: isAvatarLoading } =
    useGetAvatarQuery(undefined);

  let navigate = useNavigate();

  const goToProfile = () => {
    navigate("/profile");
  };

  return (
    <RouteContainer>
      <RouteWrapper>
        <TopSectionWrapper>
          <Hamburger />
          <TopSection>
            <Title>
              <h2>Dashboard</h2>
              <p>detailed information about your expenses</p>
            </Title>
            <InputContainer>
              <input type="text" placeholder="Search..." />
            </InputContainer>
            <Profile onClick={goToProfile}>
              <AvatarContainer>
                {isAvatarLoading ? <LoaderContainer /> : null}
                {avatar ? <img src={avatar[0]?.file} /> : null}
              </AvatarContainer>
              <span>{username}</span>
            </Profile>
          </TopSection>
        </TopSectionWrapper>
        <ShowDataDropdown />
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
