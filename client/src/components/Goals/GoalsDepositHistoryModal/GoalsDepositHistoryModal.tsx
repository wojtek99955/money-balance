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
    <Container ref={containerRef} onClick={handleClickOutside}>
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
