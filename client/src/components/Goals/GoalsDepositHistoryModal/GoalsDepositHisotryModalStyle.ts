import styled from "styled-components";
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
  z-index: 11;
`;

export const Wrapper = styled(motion.div)`
  background-color: white;
  width: 400px;
  min-height: 32rem;
  padding: 2rem 0;
  border-radius: 12px;
  position: relative;
  gap: 1rem;

  h3 {
    text-align: center;
    font-size: 1.6rem;
    padding-bottom: 2rem;
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

export const PaymentsContainer = styled.div`
  padding: 1rem;
`;

export const Deposit = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.8rem;
  align-items: center;

  span {
    font-size: 1rem;
  }

  strong {
    color: #009f5f;
    font-size: 1.2rem;
  }
`;

export const PaginationBtns = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 1rem;
`;
