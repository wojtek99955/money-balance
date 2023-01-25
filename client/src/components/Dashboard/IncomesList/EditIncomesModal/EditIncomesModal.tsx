import ReactDOM from "react-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "../../../../assets/atoms/Button";
import {
  Container,
  FormContainer,
  CloseIcon,
  StyledField,
  FormWrapper,
} from "./EditIncomesModalStyle";
import * as yup from "yup";
import ValidationErrorMsg from "../../../../assets/atoms/ValidationErrorMsg";
import { useRef } from "react";
import LoadingSpinner from "../../../../assets/atoms/LoadingSpinner";

interface Props {
  setOpenEditIncomesModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentId: string;
  isLoading: boolean;
  updateIncome: any;
}

interface InitialValues {
  category: string;
  amount: string;
}

const initialValues = {
  category: "salary",
  amount: "",
};

const validationSchema = yup.object().shape({
  amount: yup.number().typeError("Only numbers").required("Required"),
});

const IncomesModal = ({
  setOpenEditIncomesModal,
  currentId,
  isLoading,
  updateIncome,
}: Props) => {
  const username = JSON.parse(localStorage.getItem("username")!);

  const handleCloseModal = (e: any) => {
    setOpenEditIncomesModal(false);
  };

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: any) => {
    if (e.target === wrapperRef.current) {
      setOpenEditIncomesModal(false);
    }
  };

  const handleUpdateIncome = (id: string, values: InitialValues) => {
    updateIncome({
      id: id,
      ...values,
      username: username,
    });
    if (!isLoading) setOpenEditIncomesModal(false);
  };

  return ReactDOM.createPortal(
    <Container
      onClickCapture={handleClickOutside}
      ref={wrapperRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
    >
      <FormContainer
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.5 }}
        transition={{ duration: 0.1 }}
      >
        <CloseIcon onClick={handleCloseModal} />
        <h3>Edit Income</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(val) => {
            handleUpdateIncome(currentId, val);
          }}
        >
          <Form>
            <FormWrapper>
              <Field as="select" name="category">
                <option value="salary">salary</option>
                <option value="prize">prize</option>
              </Field>
              <StyledField type="text" name="amount" placeholder="amount" />
              <ErrorMessage name="amount" component={ValidationErrorMsg} />
              <Button type="submit">
                {isLoading ? <LoadingSpinner /> : "Save"}
              </Button>
            </FormWrapper>
          </Form>
        </Formik>
      </FormContainer>
    </Container>,
    document.getElementById("edit-incomes-modal")!
  );
};

export default IncomesModal;
