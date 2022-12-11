import styled from "styled-components";
import ReactDOM from "react-dom";
import { RiCloseCircleLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { Field, Formik, Form } from "formik";
import { Button } from "../../../assets/atoms/Button";
import { useUpdateGoalMutation } from "../../../api/goalSlice";

export const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
`;

export const FormContainer = styled(motion.div)`
  background-color: white;
  width: 400px;
  height: auto;
  padding: 2rem 0;
  border-radius: 12px;
  position: relative;
  gap: 1rem;

  h3 {
    text-align: center;
    font-size: 1.6rem;
    padding-bottom: 2rem;
  }

  select {
    display: block;
    border: ${({ theme }) => `2px solid ${theme.colors.grey}`};
    border-radius: 12px;
    padding: 1rem;
    width: 80%;
    font-size: 1rem;
  }
`;

export const CloseIcon = styled(RiCloseCircleLine)`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.grey};
  cursor: pointer;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

export const StyledField = styled(Field)`
  display: block;
  border: ${({ theme }) => `2px solid ${theme.colors.grey}`};
  border-radius: 12px;
  padding: 1rem;
  width: 80%;
  font-size: 1rem;
  margin: auto;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

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
  return ReactDOM.createPortal(
    <Container>
      <FormContainer>
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
