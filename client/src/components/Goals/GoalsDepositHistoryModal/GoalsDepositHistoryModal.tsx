import ReactDOM from "react-dom";
import { useGetGoalPaymentQuery } from "../../../api/goalPaymentApiSlice";
import {
  Container,
  Wrapper,
  CloseIcon,
  PaymentsContainer,
  Deposit,
  PaginationBtns,
} from "./GoalsDepositHisotryModalStyle";
import { useRef, useState } from "react";
import { GoalPayment } from "../../../Interfaces/GoalPayment";
import { Button } from "../../../assets/atoms/Button";

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

  const [page, setPage] = useState(0);

  const { data: goalsDepositHistory, isLoading } = useGetGoalPaymentQuery({
    id,
    page,
  });

  const containerRef = useRef(null);

  const handleClickOutside = (e: any) => {
    if (e.target === containerRef.current) {
      setShowDepositHistoryModal(false);
    }
  };

  const goPrevPage = () => {
    setPage((prev) => prev - 1);
  };

  const goNextPage = () => {
    setPage((prev) => prev + 1);
  };

  console.log(goalsDepositHistory?.totalPages);

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
            goalsDepositHistory.payments.map((deposit: GoalPayment) => {
              return (
                <Deposit key={deposit._id}>
                  <span>{deposit.date}</span>
                  <strong>+ ${deposit.deposit}</strong>
                </Deposit>
              );
            })
          ) : (
            <p>no depos yet</p>
          )}
        </PaymentsContainer>
        <PaginationBtns>
          <Button onClick={goPrevPage} disabled={page === 0}>
            prev
          </Button>
          <Button
            onClick={goNextPage}
            disabled={page === goalsDepositHistory?.totalPages - 1}
          >
            next
          </Button>
        </PaginationBtns>
      </Wrapper>
    </Container>,
    document.getElementById("goal-deposit-history-modal")!
  );
};

export default GoalsDepositHistoryModal;
