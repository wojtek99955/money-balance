import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { AiOutlineEdit } from "react-icons/ai";
import { GiExpense } from "react-icons/gi";

export const Price = styled.div`
  color: red;
  font-size: 1.4rem;
  font-weight: 600;
  margin-left: auto;
  margin-right: 3rem;
`;
export const ExpenseDataGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  div {
    color: ${({ theme }) => theme.colors.title};
    font-weight: 700;
    font-size: 1.1rem;
    text-transform: capitalize;
  }
  span {
    color: ${({ theme }) => theme.colors.grey};
    font-weight: 500;
    font-size: 1rem;
  }
`;

export const ExpensesContainer = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: auto;
`;

export const ExpensesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
`;

export const DeleteIcon = styled(IoMdClose)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1.2rem;
`;

export const EditIcon = styled(AiOutlineEdit)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1.2rem;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f7fd;
  padding: 0.5rem;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background-color: #ddecff;
    ${DeleteIcon} {
      color: ${({ theme }) => theme.colors.main.default};
    }
    ${EditIcon} {
      color: ${({ theme }) => theme.colors.main.default};
    }
  }
`;
export const ControllerBtns = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ExpensesIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #ffe3e3;
  padding: 1rem;
`;
export const ExpensesIcon = styled(GiExpense)`
  font-size: 3rem;
  color: #ff9582;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  h2 {
    color: ${({ theme }) => theme.colors.main.default};
  }
  p {
    color: ${({ theme }) => theme.colors.grey};
    font-weight: 600;
  }
`;

export const PaginationBtns = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  margin-top: 4rem;
`;
