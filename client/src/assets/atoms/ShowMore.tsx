import styled from "styled-components";
import { CgMoreVertical } from "react-icons/cg";

const ShowMoreIcon = styled(CgMoreVertical)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.grey};
`;

const Container = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  display: flex;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.main.default};
    ${ShowMoreIcon} {
      color: ${({ theme }) => theme.colors.main.default};
    }
  }
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
