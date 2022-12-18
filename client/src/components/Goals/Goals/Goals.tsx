import { RouteContainer } from "../../../assets/atoms/RouteContainer";
import { useState } from "react";
import AddGoalModal from "../AddGoalModal/AddGoalModal";
import { AnimatePresence } from "framer-motion";
import { useGetGoalsQuery } from "../../../api/goalSlice";
import GoalsList from "../GoalsList/GoalsList";
import {
  NoGoalsWrapper,
  AddGoalIcon,
  GoalsContainer,
  StyledButton,
  AddIconBtn,
} from "./GoalsStyle";
import AllGoalsAmount from "./AllGoalsAmount";
import GoalListLoader from "../GoalsList/GoalListLoader";

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
        {isLoading ? (
          <GoalListLoader />
        ) : (
          <>
            {goals?.length > 0 ? (
              <>
                <StyledButton
                  onClick={handleOpenGoalModal}
                  style={{ position: "absolute", right: 0 }}
                >
                  <AddIconBtn />
                  Add new goal
                </StyledButton>
                <AllGoalsAmount />

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
          </>
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
