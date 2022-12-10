import styled from "styled-components";

export const GoalContainer = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 1rem;
  position: relative;
`;

export const ListContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 6rem 0;
`;

export const ChartContainer = styled.div`
  width: 5rem;
  position: absolute;
  right: 1rem;
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
  padding-top: 2rem;
`;
