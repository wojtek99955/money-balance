import { DashboardBox } from "../../../assets/atoms/DashboardBox";
import { useGetLatestIncomesQuery } from "../../../api/apiSlice";
import { getIncomeCategoryIcon } from "../../../helpers/getIncomeCategoryIcon";
import styled from "styled-components";

export const IncomesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  width: 100%;
  gap: 1rem;
`;
export const Income = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const IncomeDataGroup = styled.div`
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

const Amount = styled.div`
  color: green;
  font-size: 1.2rem;
  font-weight: 600;
`;

const StyledH3 = styled.h3`
  user-select: none;
`;

const RecentIncomes = () => {
  const { data: incomes, isLoading } = useGetLatestIncomesQuery(undefined);
  console.log(incomes);
  return (
    <DashboardBox>
      <StyledH3>Recent incomes</StyledH3>
      <IncomesWrapper>
        {incomes?.incomes!.map((income: any) => {
          return (
            <Income>
              <IncomeDataGroup>
                {getIncomeCategoryIcon(income.category)}
                <div>
                  <div>{income.category}</div>
                  <span>{income.date}</span>
                </div>
              </IncomeDataGroup>
              <Amount> + {income.amount} $</Amount>
            </Income>
          );
        })}
      </IncomesWrapper>
    </DashboardBox>
  );
};

export default RecentIncomes;
