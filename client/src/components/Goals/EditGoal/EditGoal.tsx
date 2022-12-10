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
} from "./EditGoalStyle";

interface Props {
  id: string;
}

const EditGoal = ({ id }: Props) => {
  const [showActionBtns, setShowActionBtns] = useState(false);

  const toggleShowBtns = () => {
    setShowActionBtns((prev) => !prev);
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
              <BtnContainer>
                <EditIcon />
              </BtnContainer>
              <BtnContainer
                onClick={() => {
                  console.log(id);
                  handleDeleteGoal();
                }}
              >
                <DeleteIcon />
              </BtnContainer>
            </ActionBtnsContainer>
          ) : null}
        </AnimatePresence>
      </Wrapper>
    </Container>
  );
};

export default EditGoal;
