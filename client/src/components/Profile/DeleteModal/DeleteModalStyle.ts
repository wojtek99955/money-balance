import styled from "styled-components";

import { RiCloseCircleLine } from "react-icons/ri";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  display: flex;
  z-index: 110;
  justify-content: center;
  align-items: center;
`;

export const CloseIcon = styled(RiCloseCircleLine)`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.grey};
  cursor: pointer;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

export const ModalContent = styled(motion.div)`
  background-color: white;
  width: 400px;
  height: auto;
  padding: 2rem 0;
  border-radius: 12px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  h3 {
    text-align: center;
    font-size: 1.6rem;
    padding-bottom: 2rem;
  }
`;

export const Btn = styled.button`
  padding: 1rem;
  border-radius: 8px;
  color: white;
  border: none;
  width: 100%;
  font-size: 1rem;
  cursor: pointer;

  &:first-of-type {
    background-color: ${({ theme }) => theme.colors.main.default};
  }
  background-color: #e65016;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 10rem;
  gap: 1rem;
`;
