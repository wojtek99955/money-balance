import styled from "styled-components";

export const IncomesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  width: 100%;
  gap: 1rem;
`;
export const Income = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

export const IncomeDataGroup = styled.div`
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

export const Amount = styled.div`
  color: #009f5f;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const StyledH3 = styled.h3`
  user-select: none;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
`;
