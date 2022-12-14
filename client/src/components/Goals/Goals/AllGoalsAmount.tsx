import { useGetTotalAmountQuery } from "../../../api/goalSlice";
import styled from "styled-components";

const Container = styled.div`
  max-width: 20rem;
  margin: auto;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: ${({ theme }) => theme.colors.grey};
  }
  div {
    font-size: 2rem;
  }
`;
const AllGoalsAmount = () => {
  const { data: allGoalsAmount, isLoading } = useGetTotalAmountQuery(undefined);
  console.log(allGoalsAmount);
  return (
    <Container>
      <h3>You saved</h3>
      <div>$ {allGoalsAmount}</div>
    </Container>
  );
};

export default AllGoalsAmount;
