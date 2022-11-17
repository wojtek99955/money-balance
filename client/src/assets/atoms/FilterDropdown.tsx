import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { HiOutlineSelector } from "react-icons/hi";

interface StyleProps {
  open: boolean;
}
const Container = styled.div<StyleProps>`
  border: ${({ theme, open }) =>
    open ? `2px solid #d1e8fb ` : `2px solid ${theme.colors.grey}`};
  border-radius: 12px;
  padding: 0.7rem 0.8rem;
  position: relative;
  width: 9rem;
  background-color: ${({ open }) => (open ? "#d1e8fb" : "white")};
  &:last-of-type {
    margin-left: auto;
  }
`;

const FilterName = styled.div<StyleProps>`
  color: ${({ theme, open }) =>
    open ? theme.colors.main.default : theme.colors.grey};
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const OptionsContainer = styled.div`
  position: absolute;
  top: 3.5rem;
  left: 0;
  width: 100%;

  ul {
    list-style-type: none;
    li {
      padding: 0.7rem 0.8rem;
      border-bottom: ${({ theme }) => `1px solid ${theme.colors.grey}`};
      border: ${({ theme }) => `2px solid ${theme.colors.grey}`};
      background-color: white;
      cursor: pointer;

      &:nth-child(even) {
        border-top: none;
      }
      &:last-of-type {
        border-top: none;
      }

      &:hover {
        background-color: #d1e8fb;
      }
      &:first-of-type {
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
      }
      &:last-of-type {
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
      }
    }
  }
`;

const SelectIcon = styled(HiOutlineSelector)`
  font-size: 1.2rem;
`;

interface Props {
  children: React.ReactNode;
  filterName: string;
  selectedValue: string | number;
}

const FilterDropdown = ({ children, filterName, selectedValue }: Props) => {
  const [open, setOpen] = useState(false);

  const filterRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  return (
    <Container
      ref={filterRef}
      open={open}
      onClick={() => {
        setOpen((prev) => !prev);
      }}
    >
      <FilterName open={open}>
        {selectedValue ? selectedValue : filterName} <SelectIcon />
      </FilterName>
      {open ? <OptionsContainer>{children}</OptionsContainer> : null}
    </Container>
  );
};

export default FilterDropdown;
