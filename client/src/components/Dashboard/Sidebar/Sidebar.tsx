import Logo from "../../../assets/atoms/Logo";
import Profile from "./Profile/Profile";
import {
  Container,
  Nav,
  DashboardIcon,
  StyledLink,
  ChartIcon,
  SavingsIcon,
  SidebarWrapper,
  IncomesIcon,
  ExpensesIcon,
  CloseIcon,
  SideBarMobileContainer,
} from "./SidebarStyle";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../../sidebarSlice";

const links = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    route: "/dashboard",
  },
  {
    text: "Incomes",
    icon: <IncomesIcon />,
    route: "/incomes",
  },
  {
    text: "Expenses",
    icon: <ExpensesIcon />,
    route: "/expenses",
  },
  {
    text: "Goals",
    icon: <SavingsIcon />,
    route: "/goals",
  },
];

const Sidebar = () => {
  const dispatch = useDispatch();

  let showSidebar = useSelector((state: any) => state.sideBar.showSidebar);
  const closeSideBar = () => {
    dispatch(toggleSidebar(false));
  };
  return (
    <>
      <SideBarMobileContainer
        showSidebar={showSidebar}
        onClick={closeSideBar}
      />

      <Container showSidebar={showSidebar}>
        <CloseIcon onClick={closeSideBar} />
        <SidebarWrapper>
          <Logo />
          <Nav>
            {links.map((link) => {
              return (
                <StyledLink to={link.route} onClick={closeSideBar}>
                  {link.icon}
                  {link.text}
                </StyledLink>
              );
            })}
          </Nav>
          <Profile />
        </SidebarWrapper>
      </Container>
    </>
  );
};

export default Sidebar;
