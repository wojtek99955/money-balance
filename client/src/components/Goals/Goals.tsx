import styled from "styled-components";
import { RouteContainer } from "../../assets/atoms/RouteContainer";
import { IoMdAddCircleOutline } from "react-icons/io";

const NoGoalsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoGoalsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    font-size: 2rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: center;

    span {
      font-size: 1.2rem;
    }
  }
`;

const AddGoalIcon = styled(IoMdAddCircleOutline)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.main.default};
`;

const Goals = () => {
  return (
    <RouteContainer>
      <h2>Your goals</h2>
      <NoGoalsContainer>
        <NoGoalsWrapper>
          <h3>You did not set any goals yet</h3>
          <div>
            <AddGoalIcon />
            <span>Set new goal</span>
          </div>
        </NoGoalsWrapper>
      </NoGoalsContainer>
    </RouteContainer>
  );
};

export default Goals;
