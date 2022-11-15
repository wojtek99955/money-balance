import { DashboardBox } from "../../../assets/atoms/DashboardBox";
import { useGetLatestExpensesQuery } from "../../../api/expenseApiSlice";
import { getExpenseCategoryIcon } from "../../../helpers/getExpenseCategoryIcon";
import {
  Price,
  ExpensesWrapper,
  Expense,
  ExpenseDataGroup,
  StyledH3,
  TopSection,
} from "./ExpensesStyle";
import ShowMore from "../../../assets/atoms/ShowMore";
import { useNavigate } from "react-router-dom";
import { ExpenseType } from "../../../Interfaces/Expense";
const Expenses = () => {
  const { data: expenses, isLoading } = useGetLatestExpensesQuery(undefined);

  let navigate = useNavigate();

  const goToExpenses = () => {
    navigate("/expenses");
  };

  return (
    <DashboardBox>
      <TopSection>
        <StyledH3>Recent expenses</StyledH3>
        <div onClick={goToExpenses}>
          <ShowMore />
        </div>
      </TopSection>
      {!isLoading ? (
        <ExpensesWrapper>
          {expenses?.expenses!.map((expense: ExpenseType) => {
            return (
              <Expense key={expense._id}>
                <ExpenseDataGroup>
                  {getExpenseCategoryIcon(expense.category)}
                  <div>
                    <div>{expense.category}</div>
                    <span>{expense.date}</span>
                  </div>
                </ExpenseDataGroup>
                <Price> - ${expense.amount}</Price>
              </Expense>
            );
          })}
        </ExpensesWrapper>
      ) : null}
    </DashboardBox>
  );
};

export default Expenses;
