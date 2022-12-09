import styled from "styled-components";
import { RouteContainer } from "../../assets/atoms/RouteContainer";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useState } from "react";
import AddGoalModal from "./AddGoalModal";
import { AnimatePresence } from "framer-motion";
import { useGetGoalsQuery } from "../../api/goalSlice";
import GoalsList from "./GoalsList/GoalsList";
import { Button } from "../../assets/atoms/Button";
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
  cursor: pointer;
`;

const GoalsContainer = styled.div`
  max-width: 1200px;
  margin: auto;
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
            <Button onClick={handleOpenGoalModal}>Add new goal</Button>
            <GoalsList goals={goals} />
          </>
        ) : (
          <NoGoalsContainer>
            <NoGoalsWrapper>
              <h3>You did not set any goals yet</h3>
              <div>
                <AddGoalIcon onClick={handleOpenGoalModal} />
                <span>Set new goal</span>
              </div>
            </NoGoalsWrapper>
          </NoGoalsContainer>
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
