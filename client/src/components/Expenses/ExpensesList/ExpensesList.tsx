import { DashboardBox } from "../../../assets/atoms/DashboardBox";
import { useGetExpensesQuery } from "../../../api/apiSlice";
import { Expense } from "../../../Interfaces/Expense";
import { RouteContainer } from "../../../assets/atoms/RouteContainer";
import { getExpenseCategoryIcon } from "../../../helpers/getExpenseCategoryIcon";
import { useDeleteExpenseMutation } from "../../../api/apiSlice";
import { useState } from "react";
import EditExpensesModal from "../EditExpensesModal";
import ExpensesFilterDropdown from "../ExpensesFilterDropdown/ExpensesFilterDropdown";
import { Button } from "../../../assets/atoms/Button";
import {
  Price,
  ExpenseDataGroup,
  ExpensesContainer,
  DeleteIcon,
  EditIcon,
  BtnContainer,
  ControllerBtns,
  ExpensesIconContainer,
  ExpensesIcon,
  Title,
  ExpensesWrapper,
  PaginationBtns,
} from "./ExpensesListStyle";

const ExpensesList = () => {
  const [page, setPage] = useState<number>(1);

  const { data: expenses, isLoading } = useGetExpensesQuery(page);
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

  const goNextPage = () => {
    setPage((prev) => prev + 1);
  };
  const goPrevPage = () => {
    setPage((prev) => prev - 1);
  };
  console.log(expenses);

  return (
    <RouteContainer>
      <ExpensesContainer>
        <Title>
          <ExpensesIconContainer>
            <ExpensesIcon />
          </ExpensesIconContainer>
          <div>
            <h2>Expenses</h2>
            <p>Browse your expenses history</p>
          </div>
        </Title>
        <ExpensesFilterDropdown />
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
      <PaginationBtns>
        <Button
          onClick={goPrevPage}
          style={{ width: "9rem" }}
          disabled={page === 1}
        >
          Previous
        </Button>
        <Button
          onClick={goNextPage}
          style={{ width: "9rem" }}
          disabled={page >= expenses?.totalPages}
        >
          Next
        </Button>
      </PaginationBtns>
    </RouteContainer>
  );
};

export default ExpensesList;
