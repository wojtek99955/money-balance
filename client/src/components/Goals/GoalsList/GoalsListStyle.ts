import styled from "styled-components";
import { IoMdCheckmark } from "react-icons/io";
import { IoMdAddCircleOutline } from "react-icons/io";

export const GoalContainer = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 1rem 1rem;
  position: relative;
`;

export const ListContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 1rem;
  padding: 6rem 0;
`;

export const ChartContainer = styled.div`
  width: 5rem;
  position: absolute;
  right: 2rem;
  top: 0;
  bottom: 0;
  margin: auto 0;
  display: flex;
  align-items: center;
`;

export const Category = styled.h3`
  text-transform: capitalize;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.grey};
`;

export const Amount = styled.p`
  padding-top: 5rem;
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const AcheivedGoal = styled.div`
  width: 100%;
  background-color: #a6eeda;
  border-radius: 50%;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AcheivedIcon = styled(IoMdCheckmark)`
  font-size: 2rem;
  color: #009f5f;
`;

export const AddDepositIcon = styled(IoMdAddCircleOutline)`
  color: ${({ theme }) => theme.colors.main.default};
  font-size: 2rem;
  cursor: pointer;
`;

export const DaysLeft = styled.div`
  color: ${({ theme }) => theme.colors.grey};
`;
