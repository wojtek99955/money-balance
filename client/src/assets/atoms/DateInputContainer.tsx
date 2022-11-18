import styled from "styled-components";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineSelector } from "react-icons/hi";

const DateContainer = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  position: relative;
  background-color: white;
  border: none;
  width: 12rem;
  height: 3rem;
  margin-left: auto;
  cursor: pointer;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 0.8rem;
  font-weight: 600;
`;

const CalendarIcon = styled(AiOutlineCalendar)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1.2rem;
`;

const SelectIcon = styled(HiOutlineSelector)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.grey};
`;

const InputContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

interface Props {
  children: JSX.Element;
  date: string;
}
const DateInputContainer = ({ children, date }: Props) => {
  return (
    <DateContainer>
      {children}
      <InputContent>
        <CalendarIcon />
        {date ? date : "Calendar"}
        <SelectIcon />
      </InputContent>
    </DateContainer>
  );
};

export default DateInputContainer;
