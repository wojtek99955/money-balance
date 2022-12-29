import { useGetSumCategoryExpensesQuery } from "../../../api/expenseApiSlice";
import { DashboardBox } from "../../../assets/atoms/DashboardBox";
import { getExpenseCategoryIcon } from "../../../helpers/getExpenseCategoryIcon";
import { Price } from "../RecentExpenses/ExpensesStyle";
import LoaderContainer from "../../../assets/atoms/LoaderContainer";
import {
  Container,
  ExpensesWrapper,
  Category,
  LoadingBox,
} from "./BiggestExpensesStyle";

interface BiggestExpense {
  category: string;
  amount: number;
}

const BiggestExpenses = () => {
  const { data: sumCategories, isLoading } =
    useGetSumCategoryExpensesQuery(undefined);

  let loading = isLoading ? (
    <>
      <LoadingBox>
        <LoaderContainer />
      </LoadingBox>
      <LoadingBox>
        <LoaderContainer />
      </LoadingBox>
      <LoadingBox>
        <LoaderContainer />
      </LoadingBox>
      <LoadingBox>
        <LoaderContainer />
      </LoadingBox>
    </>
  ) : null;

  return (
    <Container>
      <ExpensesWrapper>
        {loading}
        {sumCategories?.map((cat: BiggestExpense) => {
          return (
            <DashboardBox key={cat.category}>
              {loading}
              <Category>
                {getExpenseCategoryIcon(cat.category)}
                <h3>{cat.category}</h3>
                <Price>{cat.amount === 0 ? "$0" : `- $${cat.amount}`}</Price>
              </Category>
            </DashboardBox>
          );
        })}
      </ExpensesWrapper>
    </Container>
  );
};

export default BiggestExpenses;
