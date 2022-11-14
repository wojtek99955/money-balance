import ReactDOM from "react-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "../../../assets/atoms/Button";
import { useUpdateIncomeMutation } from "../../../api/incomeApiSlice";
import {
  Container,
  FormContainer,
  CloseIcon,
  StyledField,
  FormWrapper,
} from "./EditIncomesModalStyle";
import * as yup from "yup";
import ValidationErrorMsg from "../../../assets/atoms/ValidationErrorMsg";
import { useRef } from "react";

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

const validationSchema = yup.object().shape({
  amount: yup.number().typeError("Only numbers").required("Required"),
});

const IncomesModal = ({ setOpenEditIncomesModal, currentId }: Props) => {
  const username = JSON.parse(localStorage.getItem("username")!);

  const [updateIncome] = useUpdateIncomeMutation();

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
  };

  return ReactDOM.createPortal(
    <Container onClickCapture={handleClickOutside} ref={wrapperRef}>
      <FormContainer>
        <CloseIcon onClick={handleCloseModal} />
        <h3>Edit Expense</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
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
              <ErrorMessage name="amount" component={ValidationErrorMsg} />
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
