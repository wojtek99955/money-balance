import { DashboardBox } from "../../../assets/atoms/DashboardBox";
import { useGetIncomesQuery } from "../../../api/apiSlice";
import { getIncomeCategoryIcon } from "../../../helpers/getIncomeCategoryIcon";

const RecentIncomes = () => {
  const { data: incomes, isLoading } = useGetIncomesQuery(undefined);
  console.log(incomes);
  return (
    <DashboardBox>
      <h3>Recent incomes</h3>
      {incomes?.incomes!.map((income: any) => {
        return (
          <div>
            <div>{getIncomeCategoryIcon(income.category)}</div>
            <div>{income.category}</div>
          </div>
        );
      })}
    </DashboardBox>
  );
};

export default RecentIncomes;
