import styled from "styled-components";
import { RouteContainer } from "../../assets/atoms/RouteContainer";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useState } from "react";
import AddGoalModal from "./AddGoalModal";
import { AnimatePresence } from "framer-motion";
import { useGetGoalsQuery } from "../../api/goalSlice";
import GoalsList from "./GoalsList/GoalsList";
import { Button } from "../../assets/atoms/Button";

const NoGoalsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 4rem;
  h3 {
    font-size: 2rem;
    text-align: center;
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
  cursor: pointer;
`;

const GoalsContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  position: relative;
`;

const StyledButton = styled(Button)`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AddIconBtn = styled(IoMdAddCircleOutline)`
  color: white;
  font-size: 2rem;
`;

const Goals = () => {
  const [openAddGoalModal, setOpenAddGoalModal] = useState(false);
  const handleOpenGoalModal = () => {
    setOpenAddGoalModal(true);
  };

  const { data: goals, isLoading } = useGetGoalsQuery(undefined);
  console.log(goals);
  return (
    <RouteContainer>
      <GoalsContainer>
        <h2>Your goals</h2>
        {goals?.length > 0 ? (
          <>
            <StyledButton
              onClick={handleOpenGoalModal}
              style={{ position: "absolute", right: 0 }}
            >
              <AddIconBtn />
              Add new goal
            </StyledButton>
            <GoalsList goals={goals} />
          </>
        ) : (
          <NoGoalsWrapper>
            <h3>You did not set any goals yet</h3>
            <div>
              <AddGoalIcon onClick={handleOpenGoalModal} />
              <span>Set new goal</span>
            </div>
          </NoGoalsWrapper>
        )}
        <AnimatePresence>
          {openAddGoalModal ? (
            <AddGoalModal setOpenAddGoalModal={setOpenAddGoalModal} />
          ) : null}
        </AnimatePresence>
      </GoalsContainer>
    </RouteContainer>
  );
};

export default Goals;
