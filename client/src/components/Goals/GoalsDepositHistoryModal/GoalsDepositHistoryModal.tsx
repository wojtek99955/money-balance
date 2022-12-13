import ReactDOM from "react-dom";
import styled from "styled-components";
import { AiOutlineEdit } from "react-icons/ai";
import { HiOutlineAdjustments } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { RiCloseCircleLine } from "react-icons/ri";

export const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
`;

export const Wrapper = styled(motion.div)`
  background-color: white;
  width: 400px;
  height: auto;
  padding: 2rem 0;
  border-radius: 12px;
  position: relative;
  gap: 1rem;

  h3 {
    text-align: center;
    font-size: 1.6rem;
    padding-bottom: 2rem;
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

interface Props {
  setShowDepositHistoryModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const GoalsDepositHistoryModal = ({ setShowDepositHistoryModal }: Props) => {
  const handleCloseModal = () => {
    setShowDepositHistoryModal(false);
  };
  return ReactDOM.createPortal(
    <Container>
      <Wrapper>
        <h3>Deposit history</h3>
        <CloseIcon onClick={handleCloseModal} />
      </Wrapper>
    </Container>,
    document.getElementById("goal-deposit-history-modal")!
  );
};

export default GoalsDepositHistoryModal;
