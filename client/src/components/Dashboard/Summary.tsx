import styled from "styled-components";
import { TbWallet } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { GiExpense } from "react-icons/gi";
import { IoMdAddCircleOutline } from "react-icons/io";

interface IconContainerProps {
  color: string;
}

const DashBoardBox = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 1rem;
`;

const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  background-color: ${({ color }) => color};
  border-radius: 12px;
`;
const WalletIcon = styled(TbWallet)`
  font-size: 2rem;
  color: #ff9999;
`;

const IncomeIcon = styled(GiReceiveMoney)`
  font-size: 2rem;
  color: #25c196;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  h3 {
    color: ${({ theme }) => theme.colors.grey};
  }
`;

const ExpenseIcon = styled(GiExpense)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.main.default};
`;

const AddIcon = styled(IoMdAddCircleOutline)`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.grey};
  cursor: pointer;
`;
const Summary = () => {
  return (
    <DashBoardBox>
      <BoxWrapper>
        <ItemContainer>
          <IconContainer color="#ffe3e3">
            <WalletIcon />
          </IconContainer>
          <h3>Wallet</h3>
          <AddIcon />
        </ItemContainer>
        <ItemContainer>
          <IconContainer color="#a6eeda">
            <IncomeIcon />
          </IconContainer>
          <h3>Income</h3>
          <AddIcon />
        </ItemContainer>
        <ItemContainer>
          <IconContainer color="#b4cefc">
            <ExpenseIcon />
          </IconContainer>
          <h3>Expenses</h3>
          <AddIcon />
        </ItemContainer>
      </BoxWrapper>
    </DashBoardBox>
  );
};

export default Summary;
