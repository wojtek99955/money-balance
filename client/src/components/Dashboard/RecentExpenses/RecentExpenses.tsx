import { DashboardBox } from "../../../assets/atoms/DashboardBox";
import { useGetLatestExpensesQuery } from "../../../api/apiSlice";
import { getExpenseCategoryIcon } from "../../../helpers/getExpenseCategoryIcon";
import {
  Price,
  ExpensesWrapper,
  Expense,
  ExpenseDataGroup,
} from "./ExpensesStyle";

interface ExpenseType {
  category: string;
  amount: number;
  date: string;
}

const Expenses = () => {
  const { data: expenses, isLoading } = useGetLatestExpensesQuery(undefined);
  return (
    <DashboardBox>
      <h3>Recent expenses</h3>
      {!isLoading ? (
        <ExpensesWrapper>
          {expenses?.expenses!.map((expense: ExpenseType) => {
            return (
              <Expense>
                <ExpenseDataGroup>
                  {getExpenseCategoryIcon(expense.category)}
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
