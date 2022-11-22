import styled from "styled-components";

export const Container = styled.div`
  h3 {
    margin: 2rem 0;
  }
`;

export const ExpensesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoadingBox = styled.div`
  min-height: 10rem;
  position: relative;
  width: 100%;
`;
