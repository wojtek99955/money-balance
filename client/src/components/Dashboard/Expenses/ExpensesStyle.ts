import styled from "styled-components";

export const Price = styled.div`
  color: red;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const ExpensesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  width: 30%;
  gap: 1rem;
`;

export const Expense = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
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
