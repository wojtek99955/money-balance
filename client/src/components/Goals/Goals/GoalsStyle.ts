import styled from "styled-components";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Button } from "../../../assets/atoms/Button";
import { device } from "../../../assets/devices.js";

export const NoGoalsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 4rem;
  h3 {
    font-size: 2rem;
    text-align: center;
  }

  div {
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: center;

    span {
      font-size: 1.2rem;
    }
  }
`;

export const AddGoalIcon = styled(IoMdAddCircleOutline)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.main.default};
  cursor: pointer;
`;

export const GoalsContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  position: relative;
`;

export const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const AddIconBtn = styled(IoMdAddCircleOutline)`
  color: white;
  font-size: 2rem;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 3rem;

  @media ${device.tablet} {
    flex-direction: row;
    align-items: center;
  }
`;
