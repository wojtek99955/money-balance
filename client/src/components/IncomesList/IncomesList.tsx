import { useGetIncomesQuery } from "../../api/incomeApiSlice";
import { RouteContainer } from "../../assets/atoms/RouteContainer";
import { getIncomeCategoryIcon } from "../../helpers/getIncomeCategoryIcon";
import { DashboardBox } from "../../assets/atoms/DashboardBox";
import { useDeleteIncomeMutation } from "../../api/incomeApiSlice";
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
  Title,
  IncomeIcon,
  IncomeIconContainer,
} from "./IncomesListStyle";
import { FilterWallet } from "../../Interfaces/FilterWallet";
import IncomesFilterDropdown from "./IncomesFilterDropdown/IncomesFilterDropdown";
import BudgetItemLoader from "../../assets/molecules/BudgetItemLoader";

const IncomesList = () => {
  const [page, setPage] = useState<number>(0);

  const [filterData, setFilterData] = useState<FilterWallet>({
    category: "all",
    amount: "",
    timestamp: -1,
    limit: 5,
    date: "",
  });

  const { category, amount, timestamp, limit, date } = filterData;

  const { data: income, isLoading } = useGetIncomesQuery({
    page,
    category,
    amount,
    timestamp,
    limit,
    date,
  });

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
        <Title>
          <IncomeIconContainer>
            <IncomeIcon />
          </IncomeIconContainer>
          <div>
            <h2>Incomes</h2>
            <p>Browse your incomes history</p>
          </div>
        </Title>
        <IncomesFilterDropdown
          setFilterData={setFilterData}
          filterData={filterData}
        />
        {income?.incomes.map((income: any) => {
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
                <Price> + ${income.amount}</Price>
                <ControllerBtns>
                  <BtnContainer
                    onClick={() => {
                      handleOpenEditModal();
                      setCurrentId(income._id);
                    }}
                  >
                    <EditIcon />
                  </BtnContainer>
                  <BtnContainer
                    onClick={() => {
                      handleDeleteIncome(income._id);
                    }}
                  >
                    <DeleteIcon />
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
        {isLoading ? <BudgetItemLoader /> : null}
      </IncomeContainer>
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
          disabled={page >= income?.totalPages}
        >
          Next
        </Button>
      </PaginationBtns>
    </RouteContainer>
  );
};

export default IncomesList;
