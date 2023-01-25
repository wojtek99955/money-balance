import { DashboardBox } from "../../../assets/atoms/DashboardBox";
import { useGetExpensesQuery } from "../../../api/expenseApiSlice";
import { ExpenseType } from "../../../Interfaces/Expense";
import { RouteContainer } from "../../../assets/atoms/RouteContainer";
import { getExpenseCategoryIcon } from "../../../helpers/getExpenseCategoryIcon";
import { useDeleteExpenseMutation } from "../../../api/expenseApiSlice";
import { useState } from "react";
import EditExpensesModal from "../EditExpensesModal/EditExpensesModal";
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
  Wrapper,
} from "./ExpensesListStyle";
import { FilterWallet } from "../../../Interfaces/FilterWallet";
import BudgetItemLoader from "../../../assets/molecules/BudgetItemLoader";
import { AnimatePresence } from "framer-motion";
import { useUpdateExpenseMutation } from "../../../api/expenseApiSlice";

const ExpensesList = () => {
  const [page, setPage] = useState<number>(0);

  const [filterData, setFilterData] = useState<FilterWallet>({
    category: "all",
    amount: "",
    timestamp: -1,
    limit: 5,
    date: "",
  });

  const { category, amount, timestamp, limit, date } = filterData;

  const {
    data: expenses,
    isLoading,
    isFetching,
  } = useGetExpensesQuery({
    page,
    category,
    amount,
    timestamp,
    limit,
    date,
  });
  const [deleteExpense] = useDeleteExpenseMutation();

  const handleDeleteNote = async (id: string) => {
    await deleteExpense({ id: id });
  };
  const [openEditExpensesModal, setOpenEditExpensesModal] = useState(false);

  const [updateExpense, { isLoading: isupdateLoading }] =
    useUpdateExpenseMutation();

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

  let content;

  content = expenses?.expenses.map((expense: ExpenseType) => {
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
          <Price> - ${expense.amount} </Price>
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
        <AnimatePresence>
          {openEditExpensesModal || isupdateLoading ? (
            <EditExpensesModal
              updateExpense={updateExpense}
              isLoading={isupdateLoading}
              currentId={currentId}
              setOpenEditExpensesModal={setOpenEditExpensesModal}
            />
          ) : null}
        </AnimatePresence>
      </DashboardBox>
    );
  });

  if (isLoading || isFetching) content = <BudgetItemLoader />;
  return (
    <RouteContainer>
      <Wrapper>
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
          <ExpensesFilterDropdown
            setFilterData={setFilterData}
            filterData={filterData}
          />
          {content}
        </ExpensesContainer>
        <PaginationBtns>
          <Button
            onClick={goPrevPage}
            style={{ width: "9rem" }}
            disabled={page === 0}
          >
            Previous
          </Button>
          <Button
            onClick={goNextPage}
            style={{ width: "9rem" }}
            disabled={page >= expenses?.totalPages! - 1}
          >
            Next
          </Button>
        </PaginationBtns>
      </Wrapper>
    </RouteContainer>
  );
};

export default ExpensesList;
