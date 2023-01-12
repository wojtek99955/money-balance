import ReactDOM from "react-dom";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { Button } from "../../../assets/atoms/Button";
import { useUpdateGoalMutation } from "../../../api/goalSlice";
import {
  Container,
  FormContainer,
  CloseIcon,
  StyledField,
  FormWrapper,
} from "./EditGoalModalStyle";
import { useRef } from "react";
import * as yup from "yup";
import ValidationErrorMsg from "../../../assets/atoms/ValidationErrorMsg";
import LoadingSpinner from "../../../assets/atoms/LoadingSpinner";

interface InitialValues {
  description: string;
  amount: string;
  category: string;
}

const initialValues = {
  description: "",
  amount: "",
  category: "home",
};

const validationSchema = yup.object().shape({
  category: yup.string().required("Required"),
  amount: yup.number().typeError("Only numbers").required("Required"),
  description: yup.string().required("Required"),
});

interface Props {
  setShowEditGoalModal: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}

const UpdateGoalModal = ({ setShowEditGoalModal, id }: Props) => {
  const handleCloseModal = () => {
    setShowEditGoalModal(false);
  };

  const [updateGoal, { isLoading }] = useUpdateGoalMutation();

  const handleUpdateGoal = (values: InitialValues) => {
    updateGoal({
      id,
      ...values,
    });
  };

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: any) => {
    if (e.target === wrapperRef.current) {
      setShowEditGoalModal(false);
    }
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
        <h3>Edit Goal</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(val: any) => {
            handleUpdateGoal(val);
            if (!isLoading) setShowEditGoalModal(false);
          }}
        >
          <Form>
            <FormWrapper>
              <Field as="select" name="category">
                <option value="home">home</option>
                <option value="vacation">vacation</option>
                <option value="retirement">retirement</option>
                <option value="car">car</option>
                <option value="education">education</option>
                <option value="other">other</option>
              </Field>
              <ErrorMessage name="category" component={ValidationErrorMsg} />
              <StyledField name="description" placeholder="description" />
              <ErrorMessage name="description" component={ValidationErrorMsg} />
              <StyledField name="amount" placeholder="amount" />
              <ErrorMessage name="amount" component={ValidationErrorMsg} />
              <Button type="submit">
                {isLoading ? <LoadingSpinner /> : "Save"}
              </Button>
            </FormWrapper>
          </Form>
        </Formik>
      </FormContainer>
    </Container>,
    document.getElementById("edit-goal-modal")!
  );
};

export default UpdateGoalModal;
