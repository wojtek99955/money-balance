import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import styled from "styled-components";

const EditIcon = styled(AiOutlineEdit)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1.2rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f7fd;
  padding: 0.5rem;
  border-radius: 12px;
  cursor: pointer;
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  z-index: 10;

  &:hover {
    background-color: #ddecff;
    ${EditIcon} {
      color: ${({ theme }) => theme.colors.main.default};
    }
  }
`;

const EditGoal = () => {
  return (
    <Container>
      <EditIcon />
    </Container>
  );
};

export default EditGoal;
