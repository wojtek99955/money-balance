import styled from "styled-components";
import { AiOutlineEdit } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { GiReceiveMoney } from "react-icons/gi";

export const IncomeIcon = styled(GiReceiveMoney)`
  font-size: 3rem;
  color: #25c196;
`;

export const IncomeIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #a6eeda;
  padding: 1rem;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  h2 {
    color: ${({ theme }) => theme.colors.main.default};
  }
  p {
    color: ${({ theme }) => theme.colors.grey};
    font-weight: 600;
  }
`;

export const EditIcon = styled(AiOutlineEdit)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1.2rem;
`;

export const Price = styled.div`
  color: #009f5f;
  font-size: 1.4rem;
  font-weight: 600;
  margin-left: auto;
  margin-right: 3rem;
`;
export const ExpenseDataGroup = styled.div`
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

export const IncomeContainer = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: auto;
  margin-bottom: 4rem;
`;

export const ExpensesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
`;

export const DeleteIcon = styled(IoMdClose)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1.2rem;
`;

export const BtnContainer = styled.div`
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
export const ControllerBtns = styled.div`
  display: flex;
  gap: 1rem;
`;

export const PaginationBtns = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const Wrapper = styled.div`
  position: relative;
  min-height: 100%;
`;
