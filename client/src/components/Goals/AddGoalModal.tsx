import styled from "styled-components";
import ReactDOM from "react-dom";
import { Field } from "formik";
import { motion } from "framer-motion";
import { RiCloseCircleLine } from "react-icons/ri";
import { useRef } from "react";

export const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled(motion.div)`
  background-color: white;
  width: 400px;
  height: auto;
  padding: 2rem 0;
  border-radius: 12px;
  position: relative;

  h3 {
    text-align: center;
    font-size: 1.6rem;
    padding-bottom: 2rem;
  }

  select {
    display: block;
    border: ${({ theme }) => `2px solid ${theme.colors.grey}`};
    border-radius: 12px;
    padding: 1rem;
    width: 80%;
    font-size: 1rem;
  }
`;

export const CloseIcon = styled(RiCloseCircleLine)`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.grey};
  cursor: pointer;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

export const StyledField = styled(Field)`
  display: block;
  border: ${({ theme }) => `2px solid ${theme.colors.grey}`};
  border-radius: 12px;
  padding: 1rem;
  width: 80%;
  font-size: 1rem;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

interface Props {
  setOpenAddGoalModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddGoalModal = ({ setOpenAddGoalModal }: Props) => {
  const handleCloseModal = () => {
    setOpenAddGoalModal(false);
  };
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: any) => {
    if (e.target === containerRef.current) {
      setOpenAddGoalModal(false);
    }
  };
  return ReactDOM.createPortal(
    <Container
      ref={containerRef}
      onClick={handleClickOutside}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <FormContainer
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.5 }}
        transition={{ duration: 0.2 }}
      >
        <CloseIcon onClick={handleCloseModal} />
        <h3>Add Goal</h3>
      </FormContainer>
    </Container>,
    document.getElementById("goal-modal")!
  );
};

export default AddGoalModal;
