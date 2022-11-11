import { useGetIncomesQuery } from "../../api/apiSlice";
import { RouteContainer } from "../../assets/atoms/RouteContainer";
import { getIncomeCategoryIcon } from "../../helpers/getIncomeCategoryIcon";
import { DashboardBox } from "../../assets/atoms/DashboardBox";
import { useDeleteIncomeMutation } from "../../api/apiSlice";
import { useState } from "react";
import EditIncomesModal from "./EditIncomesModal/EditIncomesModal";
import { Button } from "../../assets/atoms/Button";
import {
  EditIcon,
  Price,
  ExpenseDataGroup,
  IncomeContainer,
  ExpensesWrapper,
  DeleteIcon,
  BtnContainer,
  ControllerBtns,
  PaginationBtns,
} from "./IncomesListStyle";

const IncomesList = () => {
  const [page, setPage] = useState<number>(1);

  const { data: income, isLoading } = useGetIncomesQuery(page);

  const [deleteIncome, { isSuccess, isError, error }] =
    useDeleteIncomeMutation();

  const handleDeleteIncome = async (id: string) => {
    await deleteIncome({ id: id });
  };

  const [openEditIncomesModal, setOpenEditIncomesModal] = useState(false);
  const handleOpenEditModal = () => {
    setOpenEditIncomesModal(true);
  };

  const [currentId, setCurrentId] = useState("");

  const goNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const goPrevPage = () => {
    setPage((prev) => prev - 1);
  };

  return (
    <RouteContainer>
      <IncomeContainer>
        {income?.incomes!.map((income: any) => {
          return (
            <DashboardBox key={income._id}>
              <ExpensesWrapper>
                <ExpenseDataGroup>
                  {getIncomeCategoryIcon(income.category)}
                  <div>
                    <div>{income.category}</div>
                    <span>{income.date}</span>
                  </div>
                </ExpenseDataGroup>
                <Price> + {income.amount} $</Price>
                <ControllerBtns>
                  <BtnContainer>
                    <EditIcon
                      onClick={() => {
                        handleOpenEditModal();
                        setCurrentId(income._id);
                      }}
                    />
                  </BtnContainer>
                  <BtnContainer>
                    <DeleteIcon
                      onClick={() => {
                        handleDeleteIncome(income._id);
                      }}
                    />
                  </BtnContainer>
                </ControllerBtns>
              </ExpensesWrapper>
              {openEditIncomesModal ? (
                <EditIncomesModal
                  currentId={currentId}
                  setOpenEditIncomesModal={setOpenEditIncomesModal}
                />
              ) : null}
            </DashboardBox>
          );
        })}
      </IncomeContainer>
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
          disabled={page >= income?.totalPages}
        >
          Next
        </Button>
      </PaginationBtns>
    </RouteContainer>
  );
};

export default IncomesList;
