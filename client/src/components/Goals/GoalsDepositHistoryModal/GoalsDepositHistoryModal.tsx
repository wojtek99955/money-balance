import ReactDOM from "react-dom";
import styled from "styled-components";
import { AiOutlineEdit } from "react-icons/ai";
import { HiOutlineAdjustments } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { RiCloseCircleLine } from "react-icons/ri";
import { useGetGoalPaymentQuery } from "../../../api/goalPaymentApiSlice";
import { useState } from "react";

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

export const PaymentsContainer = styled.div`
  padding: 1rem;
`;

const Deposit = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

interface Props {
  setShowDepositHistoryModal: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}

const GoalsDepositHistoryModal = ({
  setShowDepositHistoryModal,
  id,
}: Props) => {
  const handleCloseModal = () => {
    setShowDepositHistoryModal(false);
  };

  const { data: goalsDepositHistory, isLoading } = useGetGoalPaymentQuery({
    id,
  });

  console.log(goalsDepositHistory);
  return ReactDOM.createPortal(
    <Container>
      <Wrapper>
        <h3>Deposit history</h3>
        <CloseIcon onClick={handleCloseModal} />
        <PaymentsContainer>
          {goalsDepositHistory ? (
            goalsDepositHistory.map((deposit: any) => {
              return (
                <Deposit>
                  <span>{deposit.date}</span>
                  <span>+ ${deposit.deposit}</span>
                </Deposit>
              );
            })
          ) : (
            <p>no depos yet</p>
          )}
        </PaymentsContainer>
      </Wrapper>
    </Container>,
    document.getElementById("goal-deposit-history-modal")!
  );
};

export default GoalsDepositHistoryModal;
