import ReactDOM from "react-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "../../../assets/atoms/Button";
import { useAddExpensesMutation } from "../../../api/expenseApiSlice";
import { getCurrentDate } from "../../../helpers/getCurrentDate";
import { useRef } from "react";
import {
  Container,
  FormContainer,
  CloseIcon,
  StyledField,
  FormWrapper,
} from "./ExpensesModalStyle";
import LoadingSpinner from "../../../assets/atoms/LoadingSpinner";
import * as yup from "yup";
import ValidationErrorMsg from "../../../assets/atoms/ValidationErrorMsg";

interface Props {
  setOpenExpensesModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialValues = {
  category: "shopping",
  amount: "",
};

const validationSchema = yup.object().shape({
  amount: yup.number().typeError("Only numbers").required("Required"),
});

const ExpensesModal = ({ setOpenExpensesModal }: Props) => {
  const username = JSON.parse(localStorage.getItem("username")!);
  const [addExpense, { isSuccess, isLoading }] = useAddExpensesMutation();
  const handleCloseModal = () => {
    setOpenExpensesModal(false);
  };

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: any) => {
    if (e.target === wrapperRef.current) {
      setOpenExpensesModal(false);
    }
  };
  if (isSuccess) {
    setOpenExpensesModal(false);
  }
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
        <h3>Add Expense</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(val) => {
            addExpense({
              category: val.category,
              amount: +val.amount,
              username: username,
              date: getCurrentDate(),
            });
          }}
        >
          <Form>
            <FormWrapper>
              <Field as="select" name="category">
                <option value="shopping">shopping</option>
                <option value="restaurants">restaurants</option>
                <option value="gift">gift</option>
                <option value="transportation">transportation</option>
                <option value="other">other</option>
              </Field>
              <StyledField type="text" name="amount" placeholder="amount" />
              <ErrorMessage name="amount" component={ValidationErrorMsg} />
              <Button type="submit">
                {isLoading ? <LoadingSpinner /> : "Add"}
              </Button>
            </FormWrapper>
          </Form>
        </Formik>
      </FormContainer>
    </Container>,
    document.getElementById("expenses-modal")!
  );
};

export default ExpensesModal;
