import { AiOutlineEdit } from "react-icons/ai";
import styled from "styled-components";
import { useState } from "react";
import { HiOutlineAdjustments } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const EditIcon = styled(AiOutlineEdit)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1.2rem;
  &:hover {
    color: ${({ theme }) => theme.colors.main.default};
  }
`;

const DeleteIcon = styled(IoMdClose)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1.2rem;
  &:hover {
    color: ${({ theme }) => theme.colors.main.default};
  }
`;

const AdjustIcon = styled(HiOutlineAdjustments)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1.2rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f7fd;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 12px;
  cursor: pointer;
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  z-index: 10;

  &:hover {
    background-color: #ddecff;
    ${AdjustIcon} {
      color: ${({ theme }) => theme.colors.main.default};
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ActionBtnsContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  padding-right: 2.5rem;
  margin: auto 0;
  border-radius: 12px;
  height: 2.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f7fd;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 12px;

  &:hover {
    background-color: #ddecff;
  }
  ${EditIcon} {
    color: ${({ theme }) => theme.colors.main.default};
  }
  ${DeleteIcon} {
    color: ${({ theme }) => theme.colors.main.default};
  }
`;

const EditGoal = () => {
  const [showActionBtns, setShowActionBtns] = useState(false);

  const toggleShowBtns = () => {
    setShowActionBtns((prev) => !prev);
  };
  return (
    <Container onMouseEnter={toggleShowBtns} onMouseLeave={toggleShowBtns}>
      <Wrapper>
        <AdjustIcon />
        {showActionBtns ? (
          <ActionBtnsContainer>
            <BtnContainer>
              <EditIcon />
            </BtnContainer>
            <BtnContainer>
              <DeleteIcon />
            </BtnContainer>
          </ActionBtnsContainer>
        ) : null}
      </Wrapper>
    </Container>
  );
};

export default EditGoal;
