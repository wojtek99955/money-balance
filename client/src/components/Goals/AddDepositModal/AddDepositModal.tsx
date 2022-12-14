import ReactDOM from "react-dom";
import { Formik, Form } from "formik";
import { Button } from "../../../assets/atoms/Button";
import { useAddGoalPaymentMutation } from "../../../api/goalPaymentApiSlice";
import { useRef } from "react";
import {
  Container,
  FormContainer,
  CloseIcon,
  FormWrapper,
  StyledField,
} from "./AddDepositModalStyle";

const initialValues = {
  deposit: "",
};

interface Props {
  setOpenAddDepositModal: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}

const AddDepositModal = ({ setOpenAddDepositModal, id }: Props) => {
  const handleCloseModal = () => {
    setOpenAddDepositModal(false);
  };

  const [updateDeposit] = useAddGoalPaymentMutation();

  const containerRef = useRef(null);

  const handleClickOutside = (e: any) => {
    if (e.target === containerRef.current) {
      setOpenAddDepositModal(false);
    }
  };

  return ReactDOM.createPortal(
    <Container
      ref={containerRef}
      onClick={handleClickOutside}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
    >
      <FormContainer>
        <CloseIcon onClick={handleCloseModal} />
        <h3>Add deposit</h3>
        <Formik
          initialValues={initialValues}
          onSubmit={(val: any) => {
            updateDeposit({ id, deposit: val.deposit });
            setOpenAddDepositModal(false);
          }}
        >
          <Form>
            <FormWrapper>
              <StyledField name="deposit" placeholder="deposit" />
              <Button type="submit">Add</Button>
            </FormWrapper>
          </Form>
        </Formik>
      </FormContainer>
    </Container>,
    document.getElementById("add-deposit-modal")!
  );
};

export default AddDepositModal;
