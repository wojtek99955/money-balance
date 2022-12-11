import ReactDOM from "react-dom";
import { Field, Formik, Form } from "formik";
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

interface Props {
  setShowEditGoalModal: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}

const UpdateGoalModal = ({ setShowEditGoalModal, id }: Props) => {
  const handleCloseModal = () => {
    setShowEditGoalModal(false);
  };

  const [updateGoal] = useUpdateGoalMutation();

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
          onSubmit={(val: any) => {
            handleUpdateGoal(val);
            setShowEditGoalModal(false);
          }}
        >
          <Form>
            <FormWrapper>
              <Field as="select" name="category">
                <option value="home">home</option>
                <option value="vacation">vacation</option>
                <option value="other">other</option>
              </Field>
              <StyledField name="description" placeholder="description" />
              <StyledField name="amount" placeholder="amount" />
              <Button type="submit">Add</Button>
            </FormWrapper>
          </Form>
        </Formik>
      </FormContainer>
    </Container>,
    document.getElementById("edit-goal-modal")!
  );
};

export default UpdateGoalModal;
