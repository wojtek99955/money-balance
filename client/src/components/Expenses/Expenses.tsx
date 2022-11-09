import { DashboardBox } from "../../assets/atoms/DashboardBox";
import { useGetExpensesQuery } from "../../api/ExpensesApiSlice";
import { getCategoryIcon } from "../../helpers/getCategoryIcon";
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
  const { data: expenses, isLoading } = useGetExpensesQuery(undefined);
  console.log(expenses);
  return (
    <DashboardBox>
      <h3>Recent expenses</h3>
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
