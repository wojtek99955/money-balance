import ReactDOM from "react-dom";
import { Formik, Form, Field } from "formik";
import { Button } from "../../../assets/atoms/Button";
import { useAddIncomesMutation } from "../../../api/incomeApiSlice";
import { getCurrentDate } from "../../../helpers/getCurrentDate";
import { useRef } from "react";
import {
  Container,
  FormContainer,
  CloseIcon,
  StyledField,
  FormWrapper,
} from "./IncomesModalStyle";
import LoadingSpinner from "../../../assets/atoms/LoadingSpinner";
interface Props {
  setOpenIncomesModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialValues = {
  category: "salary",
  amount: "",
};

const IncomesModal = ({ setOpenIncomesModal }: Props) => {
  const username = JSON.parse(localStorage.getItem("username")!);
  const [addIncome, { isLoading }] = useAddIncomesMutation();
  const handleCloseModal = () => {
    setOpenIncomesModal(false);
  };
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: any) => {
    if (e.target === wrapperRef.current) {
      setOpenIncomesModal(false);
    }
  };

  return ReactDOM.createPortal(
    <Container
      ref={wrapperRef}
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
        <h3>Add Income</h3>
        <Formik
          initialValues={initialValues}
          onSubmit={(val) => {
            addIncome({
              category: val.category,
              amount: +val.amount,
              username: username,
              date: getCurrentDate(),
            });
            if (!isLoading) setOpenIncomesModal(false);
          }}
        >
          <Form>
            <FormWrapper>
              <Field as="select" name="category">
                <option value="salary">salary</option>
                <option value="prize">prize</option>
                <option value="other">other</option>
              </Field>
              <StyledField type="text" name="amount" placeholder="amount" />
              <Button type="submit">
                {isLoading ? <LoadingSpinner /> : "Add"}
              </Button>
            </FormWrapper>
          </Form>
        </Formik>
      </FormContainer>
    </Container>,
    document.getElementById("incomes-modal")!
  );
};

export default IncomesModal;
