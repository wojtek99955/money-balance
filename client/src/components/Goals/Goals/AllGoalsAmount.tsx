import { useGetTotalAmountQuery } from "../../../api/goalSlice";
const AllGoalsAmount = () => {
  const { data: allGoalsAmount, isLoading } = useGetTotalAmountQuery(undefined);
  console.log(allGoalsAmount);
  return (
    <div>
      <h3>You saved</h3>
      <div>$ {allGoalsAmount}</div>
    </div>
  );
};

export default AllGoalsAmount;
