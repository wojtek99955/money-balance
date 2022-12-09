import styled from "styled-components";
import { TbLayoutDashboard } from "react-icons/tb";
import { Link } from "react-router-dom";
import { TbChartBar } from "react-icons/tb";
import { TbCalendar } from "react-icons/tb";
import { MdOutlineSavings } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { GiReceiveMoney } from "react-icons/gi";
import { GiExpense } from "react-icons/gi";

export const Container = styled.aside`
  height: 100vh;
  width: 13rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: white;
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

export const CategoryIcon = styled(FaListUl)`
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

export const CategoryDropdown = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: ${({ theme }) => theme.colors.title};
  font-size: 1.1rem;
  margin-bottom: 1rem;
  user-select: none;
`;

export const SidebarWrapper = styled.div`
  position: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
`;
