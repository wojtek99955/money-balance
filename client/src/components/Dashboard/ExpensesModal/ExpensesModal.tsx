import ReactDOM from "react-dom";
import styled from "styled-components";
import { RiCloseCircleLine } from "react-icons/ri";
import { Formik, Form, Field } from "formik";
import { Button } from "../../../assets/atoms/Button";
import { useAddExpensesMutation } from "../../../api/expenseApiSlice";
import { getDate } from "../../../helpers/getDate";
import { useState, useRef } from "react";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
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
  setOpenExpensesModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialValues = {
  category: "shopping",
  amount: "",
};

const ExpensesModal = ({ setOpenExpensesModal }: Props) => {
  const username = JSON.parse(localStorage.getItem("username")!);
  const [addExpense, response] = useAddExpensesMutation();
  const handleCloseModal = () => {
    setOpenExpensesModal(false);
  };
  const [values, setValues] = useState<any>("");

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: any) => {
    if (e.target === wrapperRef.current) {
      setOpenExpensesModal(false);
    }
  };

  return ReactDOM.createPortal(
    <Container ref={wrapperRef} onClick={handleClickOutside}>
      <FormContainer>
        <CloseIcon onClick={handleCloseModal} />
        <h3>Add Expense</h3>
        <Formik
          initialValues={initialValues}
          onSubmit={(val) => {
            addExpense({
              category: val.category,
              amount: +val.amount,
              username: username,
              date: getDate(),
            });
            setValues(val.category);
            setOpenExpensesModal(false);
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
    document.getElementById("expenses-modal")!
  );
};

export default ExpensesModal;
