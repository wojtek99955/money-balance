import { useState, useRef, useEffect } from "react";
import { FilterWallet } from "../../../Interfaces/FilterWallet";
import {
  Container,
  FilterName,
  OptionsContainer,
  SelectIcon,
  ResetIcon,
} from "./FilterDropdownStyle";

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
