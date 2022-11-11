import ReactDOM from "react-dom";
import { Formik, Form, Field } from "formik";
import { Button } from "../../../assets/atoms/Button";
import { useUpdateIncomeMutation } from "../../../api/apiSlice";
import {
  Container,
  FormContainer,
  CloseIcon,
  StyledField,
  FormWrapper,
} from "./EditIncomesModalStyle";

interface Props {
  setOpenEditIncomesModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentId: string;
}

interface InitialValues {
  category: string;
  amount: string;
}

const initialValues = {
  category: "salary",
  amount: "",
};

const IncomesModal = ({ setOpenEditIncomesModal, currentId }: Props) => {
  const username = JSON.parse(localStorage.getItem("username")!);
  const [updateIncome] = useUpdateIncomeMutation();
  const handleCloseModal = () => {
    setOpenEditIncomesModal(false);
  };

  const handleUpdateIncome = (id: string, values: InitialValues) => {
    updateIncome({
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
            handleUpdateIncome(currentId, val);
            setOpenEditIncomesModal(false);
          }}
        >
          <Form>
            <FormWrapper>
              <Field as="select" name="category">
                <option value="salary">salary</option>
                <option value="prize">prize</option>
              </Field>
              <StyledField type="text" name="amount" />
              <Button type="submit">Save</Button>
            </FormWrapper>
          </Form>
        </Formik>
      </FormContainer>
    </Container>,
    document.getElementById("edit-incomes-modal")!
  );
};

export default IncomesModal;
