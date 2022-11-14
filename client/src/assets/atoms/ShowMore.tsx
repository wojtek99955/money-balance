import styled from "styled-components";
import { CgMoreVertical } from "react-icons/cg";

const ShowMoreIcon = styled(CgMoreVertical)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.grey};
`;

const Container = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const ShowMore = () => {
  return (
    <Container>
      <ShowMoreIcon />
      More
    </Container>
  );
};

export default ShowMore;
