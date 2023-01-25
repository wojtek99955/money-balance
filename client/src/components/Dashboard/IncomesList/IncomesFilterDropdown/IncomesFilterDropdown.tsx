import { useState } from "react";
import styled from "styled-components";
import { DateInput } from "../../../../assets/atoms/DateInput";
import DateInputContainer from "../../../../assets/atoms/DateInputContainer";
import FilterDropdown from "../../../../assets/atoms/FilterDropdown/FilterDropdown";
import { FilterWallet } from "../../../../Interfaces/FilterWallet";
import { device } from "../../../../assets/devices.js";

interface Props {
  setFilterData: React.Dispatch<React.SetStateAction<FilterWallet>>;
  filterData: FilterWallet;
}

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const DropdownWrapper = styled.div`
  display: flex;
  gap: 0.5rem;

  @media ${device.tablet} {
    gap: 1rem;
  }
`;

const IncomesFilterDropdown = ({ setFilterData, filterData }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAddedTime, setSelectedAddedTime] = useState("");
  const [selectedItemsPerPage, setSelectedItemsPerPage] = useState<
    number | string
  >("");

  const pickDate = (e: any) => {
    setFilterData({ ...filterData, date: e.target.value });
  };

  return (
    <FilterContainer>
      <DateInputContainer date={filterData.date}>
        <DateInput
          type="date"
          name="date"
          onChange={pickDate}
          placeholder="date"
        />
      </DateInputContainer>
      <DropdownWrapper>
        <FilterDropdown
          filterName="Category"
          selectedValue={selectedCategory}
          filterData={filterData}
          setFilterData={setFilterData}
        >
          <ul>
            <li
              onClick={() => {
                setFilterData({ ...filterData, category: "all" });
                setSelectedCategory("All");
              }}
            >
              All
            </li>
            <li
              onClick={() => {
                setFilterData({ ...filterData, category: "salary" });
                setSelectedCategory("Salary");
              }}
            >
              Salary
            </li>
            <li
              onClick={() => {
                setFilterData({ ...filterData, category: "prize" });
                setSelectedCategory("Prize");
              }}
            >
              Prize
            </li>
          </ul>
        </FilterDropdown>
        <FilterDropdown
          filterName="Added"
          selectedValue={selectedAddedTime}
          setFilterData={setFilterData}
          filterData={filterData}
        >
          <ul>
            <li
              onClick={() => {
                setFilterData({ ...filterData, timestamp: -1 });
                setSelectedAddedTime("Latest");
              }}
            >
              Latest
            </li>
            <li
              onClick={() => {
                setFilterData({ ...filterData, timestamp: 1 });
                setSelectedAddedTime("Oldest");
              }}
            >
              Oldest
            </li>
          </ul>
        </FilterDropdown>
        <FilterDropdown
          filterName="Items"
          selectedValue={selectedItemsPerPage}
          setFilterData={setFilterData}
          filterData={filterData}
        >
          <ul>
            <li
              onClick={() => {
                setFilterData({ ...filterData, limit: 5 });
                setSelectedItemsPerPage(5);
              }}
            >
              5
            </li>
            <li
              onClick={() => {
                setFilterData({ ...filterData, limit: 10 });
                setSelectedItemsPerPage(10);
              }}
            >
              10
            </li>
            <li
              onClick={() => {
                setFilterData({ ...filterData, limit: 15 });
                setSelectedItemsPerPage(15);
              }}
            >
              15
            </li>
          </ul>
        </FilterDropdown>
      </DropdownWrapper>
    </FilterContainer>
  );
};

export default IncomesFilterDropdown;
