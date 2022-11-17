import styled from "styled-components";
import LoaderContainer from "../atoms/LoaderContainer";

import { DashboardBox } from "../atoms/DashboardBox";

const Container = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: auto;
`;

const StyledDashboardBox = styled(DashboardBox)`
  height: 6rem;
`;

const BudgetItemLoader = () => {
  return (
    <Container>
      <StyledDashboardBox>
        <LoaderContainer />
      </StyledDashboardBox>
      <StyledDashboardBox>
        <LoaderContainer />
      </StyledDashboardBox>
      <StyledDashboardBox>
        <LoaderContainer />
      </StyledDashboardBox>
      <StyledDashboardBox>
        <LoaderContainer />
      </StyledDashboardBox>
      <StyledDashboardBox>
        <LoaderContainer />
      </StyledDashboardBox>
    </Container>
  );
};

export default BudgetItemLoader;
