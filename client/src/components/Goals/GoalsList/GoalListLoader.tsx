import styled from "styled-components";
import LoaderContainer from "../../../assets/atoms/LoaderContainer";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 1rem;
`;

const GridItem = styled.div`
  height: 12rem;
  position: relative;
  border-radius: 12px;
`;

const GoalListLoader = () => {
  return (
    <GridContainer>
      <GridItem>
        <LoaderContainer />
      </GridItem>
      <GridItem>
        <LoaderContainer />
      </GridItem>
      <GridItem>
        <LoaderContainer />
      </GridItem>
      <GridItem>
        <LoaderContainer />
      </GridItem>
      <GridItem>
        <LoaderContainer />
      </GridItem>
      <GridItem>
        <LoaderContainer />
      </GridItem>
      <GridItem>
        <LoaderContainer />
      </GridItem>
      <GridItem>
        <LoaderContainer />
      </GridItem>
    </GridContainer>
  );
};

export default GoalListLoader;
