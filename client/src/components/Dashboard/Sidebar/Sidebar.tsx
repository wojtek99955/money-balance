import styled from "styled-components";
import Logo from "../../../assets/atoms/Logo";
import { TbLayoutDashboard } from "react-icons/tb";
import { Link } from "react-router-dom";
import { TbChartBar } from "react-icons/tb";
import { TbCalendar } from "react-icons/tb";
import { TbWallet } from "react-icons/tb";
import { FaListUl } from "react-icons/fa";
import Profile from "../../Profile/Profile";
import { IoMdAddCircleOutline } from "react-icons/io";

const Container = styled.aside`
  height: 100vh;
  width: 13rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: white; ;
`;

const Nav = styled.nav`
  margin-top: 2rem;
`;

const DashboardIcon = styled(TbLayoutDashboard)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.main.default};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: ${({ theme }) => theme.colors.title};
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const ChartIcon = styled(TbChartBar)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.main.default};
`;

const CalendarIcon = styled(TbCalendar)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.main.default};
`;

const WalletIcon = styled(TbWallet)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.main.default};
`;

const CategoryIcon = styled(FaListUl)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.main.default};
`;

const AddIcon = styled(IoMdAddCircleOutline)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.main.default};
`;

const CategoryDropdown = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: ${({ theme }) => theme.colors.title};
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const links = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    route: "/dashboard",
  },
  {
    text: "Add",
    icon: <AddIcon />,
    route: "/",
  },
  {
    text: "Statistics",
    icon: <ChartIcon />,
    route: "/",
  },
  {
    text: "Calendar",
    icon: <CalendarIcon />,
    route: "/",
  },
  {
    text: "Wallet",
    icon: <WalletIcon />,
    route: "/",
  },
];

const Sidebar = () => {
  return (
    <Container>
      <Logo />
      <Nav>
        {links.map((link) => {
          return (
            <StyledLink to={link.route}>
              {link.icon}
              {link.text}
            </StyledLink>
          );
        })}
      </Nav>
      <CategoryDropdown>
        <CategoryIcon /> Categories
      </CategoryDropdown>
      <Profile />
    </Container>
  );
};

export default Sidebar;
