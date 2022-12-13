import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useDeleteGoalMutation } from "../../../api/goalSlice";
import {
  EditIcon,
  DeleteIcon,
  AdjustIcon,
  Container,
  Wrapper,
  ActionBtnsContainer,
  BtnContainer,
  HistoryIcon,
} from "./EditGoalStyle";
import EditGoalModal from "../EditGoalModal/EditGoalModal";
import GoalsDepositHistoryModal from "../GoalsDepositHistoryModal/GoalsDepositHistoryModal";

interface Props {
  id: string;
}

const EditGoal = ({ id }: Props) => {
  const [showActionBtns, setShowActionBtns] = useState(false);
  const [showEditGoalModal, setShowEditGoalModal] = useState(false);
  const [showDepositHistoryModal, setShowDepositHistoryModal] = useState(false);

  const toggleShowBtns = () => {
    setShowActionBtns((prev) => !prev);
  };

  const handleOpenEditModal = () => {
    setShowEditGoalModal(true);
    setShowActionBtns(false);
  };

  const handleShowDepositHistoryModal = () => {
    setShowDepositHistoryModal(true);
    setShowActionBtns(false);
  };

  const [deleteGoal, response] = useDeleteGoalMutation();

  const handleDeleteGoal = () => {
    deleteGoal({ id });
  };

  return (
    <Container onMouseEnter={toggleShowBtns} onMouseLeave={toggleShowBtns}>
      <Wrapper>
        <AdjustIcon />
        <AnimatePresence>
          {showActionBtns ? (
            <ActionBtnsContainer
              initial={{ right: -40, opacity: 0 }}
              animate={{ right: 0, opacity: 1 }}
              exit={{ right: -40, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <BtnContainer onClick={handleShowDepositHistoryModal}>
                <HistoryIcon />
              </BtnContainer>
              <BtnContainer onClick={handleOpenEditModal}>
                <EditIcon />
              </BtnContainer>
              <BtnContainer onClick={handleDeleteGoal}>
                <DeleteIcon />
              </BtnContainer>
            </ActionBtnsContainer>
          ) : null}
        </AnimatePresence>
      </Wrapper>
      <AnimatePresence>
        {showEditGoalModal ? (
          <EditGoalModal setShowEditGoalModal={setShowEditGoalModal} id={id} />
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {showDepositHistoryModal ? (
          <GoalsDepositHistoryModal
            id={id}
            setShowDepositHistoryModal={setShowDepositHistoryModal}
          />
        ) : null}
      </AnimatePresence>
    </Container>
  );
};

export default EditGoal;
