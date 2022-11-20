import styled from "styled-components";
import { useGetSumCategoryExpensesQuery } from "../../../api/expenseApiSlice";
import { DashboardBox } from "../../../assets/atoms/DashboardBox";
import { getExpenseCategoryIcon } from "../../../helpers/getExpenseCategoryIcon";
import { Price } from "../RecentExpenses/ExpensesStyle";

interface BiggestExpense {
  category: string;
  amount: number;
}

const Container = styled.div`
  h3 {
    margin-bottom: 2rem;
  }
`;

const ExpensesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BiggestExpenses = () => {
  const { data: sumCategories, isLoading } =
    useGetSumCategoryExpensesQuery(undefined);

  return (
    <Container>
      <h3>Categories with biggest expense</h3>

      <ExpensesWrapper>
        {sumCategories?.map((cat: BiggestExpense) => {
          return (
            <DashboardBox>
              <Category>
                {getExpenseCategoryIcon(cat.category)}
                <h3>{cat.category}</h3>
                <Price>- ${cat.amount}</Price>
              </Category>
            </DashboardBox>
          );
        })}
      </ExpensesWrapper>
    </Container>
  );
};

export default BiggestExpenses;
