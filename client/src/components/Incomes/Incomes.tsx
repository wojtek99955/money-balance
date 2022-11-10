import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { useGetIncomesQuery } from "../../api/apiSlice";
import { RouteContainer } from "../../assets/atoms/RouteContainer";
import { getIncomeCategoryIcon } from "../../helpers/getIncomeCategoryIcon";
import { DashboardBox } from "../../assets/atoms/DashboardBox";
import { useDeleteIncomeMutation } from "../../api/apiSlice";
import { AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";
import EditIncomesModal from "./EditIncomesModal";

const EditIcon = styled(AiOutlineEdit)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1.2rem;
`;

export const Price = styled.div`
  color: green;
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

const IncomeContainer = styled.div`
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
`;

const DeleteIcon = styled(IoMdClose)`
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

const Incomes = () => {
  const { data: income, isLoading } = useGetIncomesQuery(undefined);

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
    </RouteContainer>
  );
};

export default Incomes;
