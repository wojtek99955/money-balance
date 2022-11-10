import styled from "styled-components";
import { DashboardBox } from "../../assets/atoms/DashboardBox";
import { useGetExpensesQuery } from "../../api/apiSlice";
import { Expense } from "../../Interfaces/Expense";
import { RouteContainer } from "../../assets/atoms/RouteContainer";
import { getExpenseCategoryIcon } from "../../helpers/getExpenseCategoryIcon";
import { IoMdClose } from "react-icons/io";
import { useDeleteExpenseMutation } from "../../api/apiSlice";
import { AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";
import EditExpensesModal from "./EditExpensesModal";

export const Price = styled.div`
  color: red;
  font-size: 1.4rem;
  font-weight: 600;
  margin-left: auto;
  margin-right: 3rem;
`;
const ExpenseDataGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  div {
    color: ${({ theme }) => theme.colors.title};
    font-weight: 700;
    font-size: 1.1rem;
    text-transform: capitalize;
  }
  span {
    color: ${({ theme }) => theme.colors.grey};
    font-weight: 500;
    font-size: 1rem;
  }
`;

const ExpensesContainer = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: auto;
`;

const ExpensesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
`;

const DeleteIcon = styled(IoMdClose)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1.2rem;
`;

const EditIcon = styled(AiOutlineEdit)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1.2rem;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f7fd;
  padding: 0.5rem;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background-color: #ddecff;
    ${DeleteIcon} {
      color: ${({ theme }) => theme.colors.main.default};
    }
    ${EditIcon} {
      color: ${({ theme }) => theme.colors.main.default};
    }
  }
`;
const ControllerBtns = styled.div`
  display: flex;
  gap: 1rem;
`;

const Expenses = () => {
  const { data: expenses, isLoading } = useGetExpensesQuery(undefined);
  const [deleteExpense, { isSuccess, isError, error }] =
    useDeleteExpenseMutation();

  const handleDeleteNote = async (id: string) => {
    await deleteExpense({ id: id });
  };
  const [openEditExpensesModal, setOpenEditExpensesModal] = useState(false);

  const handleOpenEditModal = () => {
    setOpenEditExpensesModal(true);
  };
  const [currentId, setCurrentId] = useState(" ");

  const handleSetCurrentId = (id: string) => {
    setCurrentId(id);
  };
  return (
    <RouteContainer>
      <ExpensesContainer>
        {expenses?.expenses.map((expense: Expense) => {
          return (
            <DashboardBox key={expense._id}>
              <ExpensesWrapper>
                <ExpenseDataGroup>
                  {getExpenseCategoryIcon(expense.category)}
                  <div>
                    <div>{expense.category}</div>
                    <span>{expense.date}</span>
                  </div>
                </ExpenseDataGroup>
                <Price> - {expense.amount} $</Price>
                <ControllerBtns>
                  <BtnContainer
                    onClick={() => {
                      handleOpenEditModal();
                      handleSetCurrentId(expense._id);
                    }}
                  >
                    <EditIcon />
                  </BtnContainer>
                  <BtnContainer
                    onClick={() => {
                      handleDeleteNote(expense._id);
                    }}
                  >
                    <DeleteIcon />
                  </BtnContainer>
                </ControllerBtns>
              </ExpensesWrapper>
              {openEditExpensesModal ? (
                <EditExpensesModal
                  currentId={currentId}
                  setOpenEditExpensesModal={setOpenEditExpensesModal}
                />
              ) : null}
            </DashboardBox>
          );
        })}
      </ExpensesContainer>
    </RouteContainer>
  );
};

export default Expenses;
