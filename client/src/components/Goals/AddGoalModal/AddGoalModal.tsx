import ReactDOM from "react-dom";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { useRef } from "react";
import { useAddGoalMutation } from "../../../api/goalSlice";
import { Button } from "../../../assets/atoms/Button";
import {
  Container,
  FormContainer,
  StyledField,
  CloseIcon,
  FormWrapper,
  StyledDateField,
  DateFieldContainer,
  DatePlaceholder,
} from "./AddGoalModalStyle";
import * as yup from "yup";
import ValidationErrorMsg from "../../../assets/atoms/ValidationErrorMsg";
import LoadingSpinner from "../../../assets/atoms/LoadingSpinner";

interface Props {
  setOpenAddGoalModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialValues = {
  description: "",
  amount: "",
  deposit: "",
  category: "home",
  targetDate: "",
};

const validationSchema = yup.object().shape({
  category: yup.string().required("Required"),
  amount: yup.number().typeError("Only numbers").required("Required"),
  deposit: yup.number().typeError("Only numbers").required("Required"),
  description: yup.string().required("Required"),
  targetDate: yup.string().required("Required"),
});

const AddGoalModal = ({ setOpenAddGoalModal }: Props) => {
  const handleCloseModal = () => {
    setOpenAddGoalModal(false);
  };
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: any) => {
    if (e.target === containerRef.current) {
      setOpenAddGoalModal(false);
    }
  };

  const [addGoal, { isLoading }] = useAddGoalMutation();

  const handleSubmit = (val: any) => {
    addGoal(val);
    if (!isLoading) setOpenAddGoalModal(false);
  };
  return ReactDOM.createPortal(
    <Container
      ref={containerRef}
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
        <h3>Add Goal</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(val: any) => handleSubmit(val)}
        >
          {({ values }) => (
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
                <ErrorMessage
                  name="description"
                  component={ValidationErrorMsg}
                />
                <StyledField name="amount" placeholder="amount" />
                <ErrorMessage name="amount" component={ValidationErrorMsg} />
                <StyledField name="deposit" placeholder="initial deposit" />
                <ErrorMessage name="deposit" component={ValidationErrorMsg} />
                <DateFieldContainer>
                  <StyledDateField
                    type="date"
                    name="targetDate"
                    placeholder="target date"
                  />
                  {values.targetDate ? (
                    <span>{values.targetDate}</span>
                  ) : (
                    <DatePlaceholder>Target date</DatePlaceholder>
                  )}
                </DateFieldContainer>
                <ErrorMessage
                  name="targetDate"
                  component={ValidationErrorMsg}
                />
                <Button type="submit">
                  {isLoading ? <LoadingSpinner /> : "Add"}
                </Button>
              </FormWrapper>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </Container>,
    document.getElementById("goal-modal")!
  );
};

export default AddGoalModal;
