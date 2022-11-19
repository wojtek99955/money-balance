import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { HiOutlineSelector } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import { FilterWallet } from "../../../Interfaces/FilterWallet";

interface StyleProps {
  open: boolean;
  selectedValue?: string | number;
  reset?: boolean;
}
const Container = styled.div<StyleProps>`
  border: ${({ theme, open, reset }) =>
    open && reset ? `2px solid #d1e8fb ` : `2px solid ${theme.colors.grey}`};
  border: ${({ open, reset }) => (open || reset ? `2px solid #d1e8fb` : null)};
  border-radius: 12px;
  padding: 0.7rem 0.8rem;
  position: relative;
  width: 12rem;
  z-index: 2;
  background-color: ${({ open, reset }) =>
    open || reset ? "#d1e8fb" : "transparent"};
  &:last-of-type {
    margin-left: auto;
  }
`;

const FilterName = styled.div<StyleProps>`
  color: ${({ theme, open, reset }) =>
    open || reset ? theme.colors.main.default : theme.colors.grey};
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-weight: 600;
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
      font-weight: 600;
      color: ${({ theme }) => theme.colors.grey};

      &:nth-child(even) {
        border-top: none;
      }
      &:last-of-type {
        border-top: none;
      }

      &:hover {
        background-color: #d1e8fb;
        color: ${({ theme }) => theme.colors.main.default};
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

const ResetIcon = styled(RiCloseLine)`
  font-size: 1.2rem;
`;

interface Props {
  children: React.ReactNode;
  filterName: string;
  selectedValue: any;
  setFilterData: React.Dispatch<React.SetStateAction<FilterWallet>>;
  filterData: FilterWallet;
}

const FilterDropdown = ({
  children,
  filterName,
  selectedValue,
  setFilterData,
  filterData,
}: Props) => {
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

  const [title, setTitle] = useState(filterName);

  const defaultFilter = (e?: any) => {
    e.stopPropagation();
    if (filterName === "Category") {
      setFilterData({ ...filterData, category: "all" });
      setTitle("Category");
    } else if (filterName === "Timestamp") {
      setFilterData({ ...filterData, timestamp: -1 });
      setTitle("Timestamp");
    } else if (filterName === "Items") {
      setFilterData({ ...filterData, limit: 5 });
    }
    setOpen(false);
  };

  const [reset, setReset] = useState(false);
  console.log(title);

  return (
    <Container
      ref={filterRef}
      open={open}
      reset={reset}
      selectedValue={selectedValue}
      onClick={() => {
        setOpen((prev) => !prev);
      }}
    >
      <FilterName open={open} selectedValue={selectedValue} reset={reset}>
        {reset ? (
          <>
            {selectedValue}
            <ResetIcon
              onClick={(e) => {
                defaultFilter(e);
                setTitle(filterName);
                setReset(false);
              }}
            />
          </>
        ) : (
          <>
            {title}
            <SelectIcon />
          </>
        )}
      </FilterName>
      {open ? (
        <OptionsContainer
          onClick={() => {
            setReset(true);
          }}
        >
          {children}
        </OptionsContainer>
      ) : null}
    </Container>
  );
};

export default FilterDropdown;
