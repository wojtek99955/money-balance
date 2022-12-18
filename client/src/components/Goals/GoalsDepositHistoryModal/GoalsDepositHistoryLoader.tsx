import styled from "styled-components";
import LoaderContainer from "../../../assets/atoms/LoaderContainer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;
const Item = styled.div`
  position: relative;
  height: 2.5rem;
`;
const GoalsDepositHistoryLoader = () => {
  return (
    <Container>
      <Item>
        <LoaderContainer />
      </Item>
      <Item>
        <LoaderContainer />
      </Item>
      <Item>
        <LoaderContainer />
      </Item>
      <Item>
        <LoaderContainer />
      </Item>
      <Item>
        <LoaderContainer />
      </Item>
      <Item>
        <LoaderContainer />
      </Item>
    </Container>
  );
};

export default GoalsDepositHistoryLoader;
