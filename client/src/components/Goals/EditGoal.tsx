import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import styled from "styled-components";

const EditIcon = styled(AiOutlineEdit)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1.2rem;
`;

const Container = styled.div`
  position: absolute;
  right: 1rem;
  top: 0;
`;

const EditGoal = () => {
  return (
    <Container>
      <EditIcon />
    </Container>
  );
};

export default EditGoal;
