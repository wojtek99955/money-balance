import ReactDOM from "react-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "../../../assets/atoms/Button";
import { useUpdateExpenseMutation } from "../../../api/expenseApiSlice";
import {
  Container,
  FormContainer,
  CloseIcon,
  StyledField,
  FormWrapper,
} from "./EditExpensesModalStyle";
import * as yup from "yup";
import ValidationErrorMsg from "../../../assets/atoms/ValidationErrorMsg";
import { useRef } from "react";

interface Props {
  setOpenEditExpensesModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentId: string;
}

interface InitialValues {
  category: string;
  amount: string;
}

const initialValues = {
  category: "shopping",
  amount: "",
};

const validationSchema = yup.object().shape({
  amount: yup.number().typeError("Only numbers").required("Required"),
});

const ExpensesModal = ({ setOpenEditExpensesModal, currentId }: Props) => {
  const username = JSON.parse(localStorage.getItem("username")!);

  const [updateExpense] = useUpdateExpenseMutation();

  const handleCloseModal = () => {
    setOpenEditExpensesModal(false);
  };

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: any) => {
    if (e.target === wrapperRef.current) {
      setOpenEditExpensesModal(false);
    }
  };

  const handleUpdateExpense = (id: string, values: InitialValues) => {
    updateExpense({
      id: id,
      ...values,
      username: username,
    });
  };
  return ReactDOM.createPortal(
    <Container
      ref={wrapperRef}
      onClick={handleClickOutside}
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
        <h3>Edit Expense</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(val) => {
            handleUpdateExpense(currentId, val);
            setOpenEditExpensesModal(false);
          }}
        >
          <Form>
            <FormWrapper>
              <Field as="select" name="category">
                <option value="shopping">shopping</option>
                <option value="restaurants">restaurants</option>
                <option value="gift">gift</option>
                <option value="transportation">transportation</option>
              </Field>
              <StyledField type="text" name="amount" />
              <ErrorMessage name="amount" component={ValidationErrorMsg} />
              <Button type="submit">Save</Button>
            </FormWrapper>
          </Form>
        </Formik>
      </FormContainer>
    </Container>,
    document.getElementById("edit-expenses-modal")!
  );
};

export default ExpensesModal;
