import ReactDOM from "react-dom";
import { Formik, Form, ErrorMessage } from "formik";
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
import * as yup from "yup";
import ValidationErrorMsg from "../../../assets/atoms/ValidationErrorMsg";
import LoadingSpinner from "../../../assets/atoms/LoadingSpinner";

interface Props {
  setOpenAddDepositModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentId: string;
}

const AddDepositModal = ({ setOpenAddDepositModal, currentId }: Props) => {
  const initialValues = {
    deposit: "",
  };

  const validationSchema = yup.object().shape({
    deposit: yup.number().typeError("Only numbers").required("Required"),
  });
  const handleCloseModal = () => {
    setOpenAddDepositModal(false);
  };

  const [updateDeposit, { isLoading, isSuccess }] = useAddGoalPaymentMutation();

  const containerRef = useRef(null);

  const handleClickOutside = (e: any) => {
    if (e.target === containerRef.current) {
      setOpenAddDepositModal(false);
    }
  };

  if (isSuccess) {
    setOpenAddDepositModal(false);
  }

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
          validationSchema={validationSchema}
          onSubmit={(val: any) => {
            updateDeposit({ id: currentId, deposit: +val.deposit });
          }}
        >
          <Form>
            <FormWrapper>
              <StyledField name="deposit" placeholder="deposit" />
              <ErrorMessage name="deposit" component={ValidationErrorMsg} />
              <Button type="submit">
                {isLoading ? <LoadingSpinner /> : "Add"}
              </Button>
            </FormWrapper>
          </Form>
        </Formik>
      </FormContainer>
    </Container>,
    document.getElementById("add-deposit-modal")!
  );
};

export default AddDepositModal;
