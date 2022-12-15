import ReactDOM from "react-dom";
import { Field, Formik, Form } from "formik";
import { useRef } from "react";
import { useAddGoalMutation } from "../../../api/goalSlice";
import { Button } from "../../../assets/atoms/Button";
import {
  Container,
  FormContainer,
  StyledField,
  CloseIcon,
  FormWrapper,
} from "./AddGoalModalStyle";

interface Props {
  setOpenAddGoalModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialValues = {
  description: "",
  amount: "",
  deposit: "",
  category: "home",
};

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

  const [addGoal, response] = useAddGoalMutation();

  const handleSubmit = (val: any) => {
    addGoal(val);
    setOpenAddGoalModal(false);
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
          onSubmit={(val: any) => handleSubmit(val)}
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
              <StyledField name="deposit" placeholder="deposit" />
              <Button type="submit">Add</Button>
            </FormWrapper>
          </Form>
        </Formik>
      </FormContainer>
    </Container>,
    document.getElementById("goal-modal")!
  );
};

export default AddGoalModal;
