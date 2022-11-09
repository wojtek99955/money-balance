import styled from "styled-components";
import { DashboardBox } from "../../assets/atoms/DashboardBox";
import { useGetExpensesQuery } from "../../api/ExpensesApiSlice";
import { getCategoryIcon } from "../../helpers/getCategoryIcon";

interface ExpenseType {
  category: string;
  amount: number;
  date: string;
}

const Price = styled.div`
  color: red;
  font-size: 1.2rem;
  font-weight: 600;
`;

const ExpensesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  width: 30%;
  gap: 1rem;
`;

const Expense = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const Date = styled.div``;

const ExpenseDataGroup = styled.div`
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

const ExpenseWrapper = styled.div``;

const Expenses = () => {
  const { data: expenses, isLoading } = useGetExpensesQuery(undefined);
  console.log(expenses);
  return (
    <DashboardBox>
      <h3>Expenses</h3>
      {!isLoading ? (
        <ExpensesWrapper>
          {expenses?.expenses!.map((expense: ExpenseType) => {
            return (
              <Expense>
                <ExpenseDataGroup>
                  {getCategoryIcon(expense.category)}
                  <div>
                    <div>{expense.category}</div>
                    <span>{expense.date}</span>
                  </div>
                </ExpenseDataGroup>
                <Price> - {expense.amount} $</Price>
              </Expense>
            );
          })}
        </ExpensesWrapper>
      ) : null}
    </DashboardBox>
  );
};

export default Expenses;
