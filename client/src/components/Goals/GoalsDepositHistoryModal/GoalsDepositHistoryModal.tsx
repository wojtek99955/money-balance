import ReactDOM from "react-dom";
import { useGetGoalPaymentQuery } from "../../../api/goalPaymentApiSlice";
import {
  Container,
  Wrapper,
  CloseIcon,
  PaymentsContainer,
  Deposit,
} from "./GoalsDepositHisotryModalStyle";
import { useRef } from "react";

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

  const containerRef = useRef(null);

  const handleClickOutside = (e: any) => {
    if (e.target === containerRef.current) {
      setShowDepositHistoryModal(false);
    }
  };

  console.log(goalsDepositHistory);
  return ReactDOM.createPortal(
    <Container
      ref={containerRef}
      onClick={handleClickOutside}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
    >
      <Wrapper
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.5 }}
        transition={{ duration: 0.1 }}
      >
        <h3>Deposit history</h3>
        <CloseIcon onClick={handleCloseModal} />
        <PaymentsContainer>
          {goalsDepositHistory ? (
            goalsDepositHistory.map((deposit: any) => {
              return (
                <Deposit>
                  <span>{deposit.date}</span>
                  <strong>+ ${deposit.deposit}</strong>
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
