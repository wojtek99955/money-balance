import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { motion } from "framer-motion";

export const Container = styled.div`
  position: absolute;
  bottom: 1.5rem;
`;

export const DownIcon = styled(FiChevronDown)`
  color: white;
  font-size: 1.5rem;
`;

export const UpIcon = styled(FiChevronUp)`
  color: white;
  font-size: 1.5rem;
`;

export const OptionsContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.main.light};
  border-radius: 12px;
  padding: 1rem 0;
  overflow: hidden;
  height: 200px;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    li {
      color: white;
      padding: 0.6rem 1rem;
      cursor: pointer;
      &:hover {
        background-color: ${({ theme }) => theme.colors.main.hover};
      }
    }
  }
`;
export const ProfileWrapper = styled.div`
  padding: 1.1rem 0.2rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.main.default};
  width: 11rem;
  overflow-wrap: break-word;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  span {
    color: white;
    user-select: none;
  }
`;
