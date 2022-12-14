import styled from "styled-components";
import { AiOutlineEdit } from "react-icons/ai";
import { HiOutlineAdjustments } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { AiOutlineHistory } from "react-icons/ai";

export const EditIcon = styled(AiOutlineEdit)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1.2rem;
  &:hover {
    color: ${({ theme }) => theme.colors.main.default};
  }
`;

export const DeleteIcon = styled(IoMdClose)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1.2rem;
  &:hover {
    color: ${({ theme }) => theme.colors.main.default};
  }
`;

export const AdjustIcon = styled(HiOutlineAdjustments)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1.2rem;
  position: relative;
  z-index: 10;
`;

export const Container = styled.div`
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
  right: 0.5rem;
  z-index: 10;

  &:hover {
    background-color: #ddecff;
    ${AdjustIcon} {
      color: ${({ theme }) => theme.colors.main.default};
    }
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ActionBtnsContainer = styled(motion.div)`
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
  z-index: 9;
`;

export const HistoryIcon = styled(AiOutlineHistory)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1.2rem;
  &:hover {
    color: ${({ theme }) => theme.colors.main.default};
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f7fd;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 12px;

  &:hover {
    background-color: #ddecff;

    ${EditIcon} {
      color: ${({ theme }) => theme.colors.main.default};
    }
    ${DeleteIcon} {
      color: ${({ theme }) => theme.colors.main.default};
    }
    ${HistoryIcon} {
      color: ${({ theme }) => theme.colors.main.default};
    }
  }
`;
