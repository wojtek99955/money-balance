import ReactDOM from "react-dom";
import styled from "styled-components";
import { AiOutlineEdit } from "react-icons/ai";
import { HiOutlineAdjustments } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { Field, Formik, Form } from "formik";
import { RiCloseCircleLine } from "react-icons/ri";
import { Button } from "../../../assets/atoms/Button";
import { useAddGoalPaymentMutation } from "../../../api/goalPaymentApiSlice";

export const EditIcon = styled(AiOutlineEdit)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1.2rem;
  &:hover {
    color: ${({ theme }) => theme.colors.main.default};
  }
`;

export const DeleteIcon = styled(IoMdClose)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1.2rem;
  &:hover {
    color: ${({ theme }) => theme.colors.main.default};
  }
`;

export const AdjustIcon = styled(HiOutlineAdjustments)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1.2rem;
  position: relative;
  z-index: 10;
`;

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

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ActionBtnsContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  padding-right: 2.5rem;
  margin: auto 0;
  border-radius: 12px;
  height: 2.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 9;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f7fd;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 12px;

  &:hover {
    background-color: #ddecff;

    ${EditIcon} {
      color: ${({ theme }) => theme.colors.main.default};
    }
    ${DeleteIcon} {
      color: ${({ theme }) => theme.colors.main.default};
    }
  }
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
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
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

const initialValues = {
  deposit: "",
};

interface Props {
  setOpenAddDepositModal: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}

const AddDepositModal = ({ setOpenAddDepositModal, id }: Props) => {
  const handleCloseModal = () => {
    setOpenAddDepositModal(false);
  };

  const [updateDeposit] = useAddGoalPaymentMutation();

  return ReactDOM.createPortal(
    <Container>
      <FormContainer>
        <CloseIcon onClick={handleCloseModal} />
        <h3>Edit Goal</h3>
        <Formik
          initialValues={initialValues}
          onSubmit={(val: any) => {
            updateDeposit({ id, deposit: val.deposit });
            setOpenAddDepositModal(false);
          }}
        >
          <Form>
            <FormWrapper>
              <StyledField name="deposit" placeholder="deposit" />
              <Button type="submit">Add</Button>
            </FormWrapper>
          </Form>
        </Formik>
      </FormContainer>
    </Container>,
    document.getElementById("add-deposit-modal")!
  );
};

export default AddDepositModal;
