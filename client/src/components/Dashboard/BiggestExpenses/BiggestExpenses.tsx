import styled from "styled-components";
import { useGetSumCategoryExpensesQuery } from "../../../api/expenseApiSlice";
import { DashboardBox } from "../../../assets/atoms/DashboardBox";
import { getExpenseCategoryIcon } from "../../../helpers/getExpenseCategoryIcon";
import { Price } from "../RecentExpenses/ExpensesStyle";
import LoaderContainer from "../../../assets/atoms/LoaderContainer";

interface BiggestExpense {
  category: string;
  amount: number;
}

const Container = styled.div`
  h3 {
    margin: 2rem 0;
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

const LoadingBox = styled.div`
  min-height: 10rem;
  position: relative;
  width: 100%;
`;
interface StyleProps {
  isLoading: boolean;
}
const LoaderWrapper = styled.div<StyleProps>`
  min-height: 10rem;
  opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};
`;
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
