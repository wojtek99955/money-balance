import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { useGetIncomesQuery } from "../../api/apiSlice";
import { RouteContainer } from "../../assets/atoms/RouteContainer";
import { getIncomeCategoryIcon } from "../../helpers/getIncomeCategoryIcon";
import { DashboardBox } from "../../assets/atoms/DashboardBox";
import { useDeleteIncomeMutation } from "../../api/apiSlice";

export const Price = styled.div`
  color: green;
  font-size: 1.4rem;
  font-weight: 600;
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

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f7fd;
  padding: 0.5rem;
  border-radius: 12px;
  cursor: pointer;
`;
const ControllerBtns = styled.div``;

const DeleteIcon = styled(IoMdClose)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1.2rem;
`;

const Incomes = () => {
  const { data: income, isLoading } = useGetIncomesQuery(undefined);

  const [deleteIncome, { isSuccess, isError, error }] =
    useDeleteIncomeMutation();

  const handleDeleteIncome = async (id: string) => {
    await deleteIncome({ id: id });
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
                    <DeleteIcon
                      onClick={() => {
                        handleDeleteIncome(income._id);
                      }}
                    />
                  </BtnContainer>
                </ControllerBtns>
              </ExpensesWrapper>
            </DashboardBox>
          );
        })}
      </IncomeContainer>
    </RouteContainer>
  );
};

export default Incomes;