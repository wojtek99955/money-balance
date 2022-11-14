import { DashboardBox } from "../../../assets/atoms/DashboardBox";
import { useGetLatestIncomesQuery } from "../../../api/apiSlice";
import { getIncomeCategoryIcon } from "../../../helpers/getIncomeCategoryIcon";
import { IncomeType } from "../../../Interfaces/Income";
import {
  IncomesWrapper,
  Income,
  IncomeDataGroup,
  Amount,
  StyledH3,
  TopSection,
} from "./RecentIncomesStyle";
import ShowMore from "../../../assets/atoms/ShowMore";
import { useNavigate } from "react-router-dom";

const RecentIncomes = () => {
  const { data: incomes, isLoading } = useGetLatestIncomesQuery(undefined);
  console.log(incomes);

  let navigate = useNavigate();
  const goToIncomes = () => {
    navigate("/incomes");
  };
  return (
    <DashboardBox>
      <TopSection>
        <StyledH3>Recent incomes</StyledH3>
        <div onClick={goToIncomes}>
          <ShowMore />
        </div>
      </TopSection>
      <IncomesWrapper>
        {incomes?.incomes!.map((income: IncomeType) => {
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
