import styled from "styled-components";
import { TbLayoutDashboard } from "react-icons/tb";
import { Link } from "react-router-dom";
import { TbChartBar } from "react-icons/tb";
import { TbCalendar } from "react-icons/tb";
import { MdOutlineSavings } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { GiReceiveMoney } from "react-icons/gi";
import { GiExpense } from "react-icons/gi";
import { device } from "../../../assets/devices.js";
import { GrClose } from "react-icons/gr";

interface Style {
  showSidebar: boolean;
}

export const Container = styled.aside<Style>`
  height: 100vh;
  width: 12rem;
  background-color: white;
  position: fixed;
  z-index: 110;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: sticky;
  }
  display: ${({ showSidebar }) => (!showSidebar ? "none" : "flex")};
`;

export const CloseIcon = styled(GrClose)`
  @media ${device.tablet} {
    display: none;
  }
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
`;

export const ExpensesIcon = styled(GiExpense)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.main.default};
`;

export const Nav = styled.nav`
  margin-top: 2rem;
`;

export const DashboardIcon = styled(TbLayoutDashboard)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.main.default};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: ${({ theme }) => theme.colors.title};
  font-size: 1.1rem;
  margin-bottom: 1rem;
  user-select: none;
`;

export const ChartIcon = styled(TbChartBar)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.main.default};
`;

export const CalendarIcon = styled(TbCalendar)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.main.default};
`;

export const SavingsIcon = styled(MdOutlineSavings)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.main.default};
`;

export const AddIcon = styled(IoMdAddCircleOutline)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.main.default};
`;

export const IncomesIcon = styled(GiReceiveMoney)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.main.default};
`;

export const SidebarWrapper = styled.div`
  position: fixed;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
`;

export const SideBarMobileContainer = styled.div<Style>`
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  top: 0;
  display: ${({ showSidebar }) => (!showSidebar ? "none" : "block")};
  @media ${device.tablet} {
    display: none;
  }
  z-index: 110;
`;
