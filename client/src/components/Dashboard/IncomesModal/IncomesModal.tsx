import ReactDOM from "react-dom";
import styled from "styled-components";
import { RiCloseCircleLine } from "react-icons/ri";
import { Formik, Form, Field } from "formik";
import { Button } from "../../../assets/atoms/Button";
import { useAddIncomesMutation } from "../../../api/apiSlice";
import { getDate } from "../../../helpers/getDate";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  background-color: white;
  width: 400px;
  height: auto;
  padding: 2rem 0;
  border-radius: 12px;
  position: relative;

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

const CloseIcon = styled(RiCloseCircleLine)`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.grey};
  cursor: pointer;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

const StyledField = styled(Field)`
  display: block;
  border: ${({ theme }) => `2px solid ${theme.colors.grey}`};
  border-radius: 12px;
  padding: 1rem;
  width: 80%;
  font-size: 1rem;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

interface Props {
  setOpenIncomesModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialValues = {
  category: "",
  amount: "",
};

const IncomesModal = ({ setOpenIncomesModal }: Props) => {
  const username = JSON.parse(localStorage.getItem("username")!);
  const [addIncome, response] = useAddIncomesMutation();
  const handleCloseModal = () => {
    setOpenIncomesModal(false);
  };
  return ReactDOM.createPortal(
    <Container>
      <FormContainer>
        <CloseIcon onClick={handleCloseModal} />
        <h3>Add Income</h3>
        <Formik
          initialValues={initialValues}
          onSubmit={(val) => {
            addIncome({
              category: val.category,
              amount: +val.amount,
              username: username,
              date: getDate(),
            });
            setOpenIncomesModal(false);
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
    document.getElementById("incomes-modal")!
  );
};

export default IncomesModal;
