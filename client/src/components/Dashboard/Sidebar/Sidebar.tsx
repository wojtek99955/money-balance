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
} from "./SidebarStyle";

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
    text: "Statistics",
    icon: <ChartIcon />,
    route: "/",
  },
  {
    text: "Goals",
    icon: <SavingsIcon />,
    route: "/",
  },
];

const Sidebar = () => {
  return (
    <Container>
      <SidebarWrapper>
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
        <Profile />
      </SidebarWrapper>
    </Container>
  );
};

export default Sidebar;
