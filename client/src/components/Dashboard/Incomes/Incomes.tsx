import { DashboardBox } from "../../../assets/atoms/DashboardBox";
import { useGetIncomesQuery } from "../../../api/apiSlice";

const Incomes = () => {
  const { data: incomes, isLoading } = useGetIncomesQuery(undefined);
  console.log(incomes);
  return (
    <DashboardBox>
      <h3>Recent incomes</h3>
    </DashboardBox>
  );
};

export default Incomes;
