import Logo from "../../../assets/atoms/Logo";
import Profile from "../../Profile/Profile";
import {
  Container,
  Nav,
  DashboardIcon,
  StyledLink,
  ChartIcon,
  CalendarIcon,
  WalletIcon,
  CategoryIcon,
  AddIcon,
  CategoryDropdown,
  SidebarWrapper,
} from "./SidebarStyle";

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
        <CategoryDropdown>
          <CategoryIcon /> Categories
        </CategoryDropdown>
        <Profile />
      </SidebarWrapper>
    </Container>
  );
};

export default Sidebar;
