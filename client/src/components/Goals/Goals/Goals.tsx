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
  BtnContainer,
} from "./GoalsStyle";
import AllGoalsAmount from "./AllGoalsAmount";
import GoalListLoader from "../GoalsList/GoalListLoader";
import GoalFilterDropdown from "../GoalFilterDropdown/GoalFilterDropdown";

const Goals = () => {
  const [openAddGoalModal, setOpenAddGoalModal] = useState(false);
  const handleOpenGoalModal = () => {
    setOpenAddGoalModal(true);
  };

  const [filterData, setFilterData] = useState({
    acheived: false,
  });

  const { acheived } = filterData;

  const { data: goals, isLoading } = useGetGoalsQuery({ acheived });

  return (
    <RouteContainer>
      <GoalsContainer>
        <h2>Your goals</h2>
        {isLoading ? (
          <GoalListLoader />
        ) : (
          <>
            {goals!.length > 0 ? (
              <>
                <BtnContainer>
                  <GoalFilterDropdown
                    filterData={filterData}
                    setFilterData={setFilterData}
                  />
                  <StyledButton onClick={handleOpenGoalModal}>
                    <AddIconBtn />
                    Add new goal
                  </StyledButton>
                </BtnContainer>
                <AllGoalsAmount />
                <GoalsList goals={goals} />
              </>
            ) : (
              <>
                <GoalFilterDropdown
                  filterData={filterData}
                  setFilterData={setFilterData}
                />
                <NoGoalsWrapper>
                  <h3>You did not set any goals yet</h3>
                  <div>
                    <AddGoalIcon onClick={handleOpenGoalModal} />
                    <span>Set new goal</span>
                  </div>
                </NoGoalsWrapper>
              </>
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
