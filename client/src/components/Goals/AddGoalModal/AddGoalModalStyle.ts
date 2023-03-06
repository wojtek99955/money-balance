import styled from "styled-components";
import { Field } from "formik";
import { motion } from "framer-motion";
import { RiCloseCircleLine } from "react-icons/ri";

export const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 105;
`;

export const FormContainer = styled(motion.div)`
  background-color: white;
  width: 400px;
  height: auto;
  padding: 2rem 0;
  border-radius: 12px;
  position: relative;
  gap: 1rem;

  h3 {
    text-align: center;
    font-size: 1.6rem;
    padding-bottom: 2rem;
  }

  select {
    display: block;
    border: ${({ theme }) => `2px solid ${theme.colors.grey}`};
    border-radius: 12px;
    padding: 1rem;
    width: 100%;
    font-size: 1rem;
  }
`;

export const CloseIcon = styled(RiCloseCircleLine)`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.grey};
  cursor: pointer;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

export const StyledField = styled(Field)`
  display: block;
  border: ${({ theme }) => `2px solid ${theme.colors.grey}`};
  border-radius: 12px;
  padding: 1rem;
  width: 100%;
  font-size: 1rem;
  margin: auto;

  ::placeholder {
    color: ${({ theme }) => theme.colors.grey};
    opacity: 1;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  justify-content: center;
  align-items: center;
`;

export const StyledDateField = styled(Field)`
  display: block;
  border-radius: 12px;
  padding: 1rem;
  border: none;
  width: 100%;
  font-size: 1rem;
  margin: auto;
  opacity: 0;

  ::-webkit-calendar-picker-indicator {
    cursor: pointer;
    width: 100%;
    position: absolute;
    height: 100%;
  }
  /* .widget-ptcsdatepicker::part(date-field-text-box) {
    border-radius: 25px;
  } */
`;

export const DateFieldContainer = styled.div`
  width: 100%;
  position: relative;
  border: ${({ theme }) => `2px solid ${theme.colors.grey}`};
  border-radius: 12px;

  span {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    display: flex;
    align-items: center;
    padding-left: 1rem;
  }
`;
export const DatePlaceholder = styled.span`
  color: ${({ theme }) => theme.colors.grey};
`;
