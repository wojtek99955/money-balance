import ReactDOM from "react-dom";
import { Formik, Form, Field } from "formik";
import { Button } from "../../../assets/atoms/Button";
import { useUpdateExpenseMutation } from "../../../api/apiSlice";
import {
  Container,
  FormContainer,
  CloseIcon,
  StyledField,
  FormWrapper,
} from "./EditExpensesModalStyle";

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

const ExpensesModal = ({ setOpenEditExpensesModal, currentId }: Props) => {
  const username = JSON.parse(localStorage.getItem("username")!);
  const [updateExpense] = useUpdateExpenseMutation();
  const handleCloseModal = () => {
    setOpenEditExpensesModal(false);
  };

  const handleUpdateExpense = (id: string, values: InitialValues) => {
    updateExpense({
      id: id,
      ...values,
      username: username,
    });
  };
  return ReactDOM.createPortal(
    <Container>
      <FormContainer>
        <CloseIcon onClick={handleCloseModal} />
        <h3>Edit Expense</h3>
        <Formik
          initialValues={initialValues}
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
