import { useState } from "react";
import styled from "styled-components";
import FilterDropdown from "../../../assets/atoms/FilterDropdown/FilterDropdown";
import { FilterWallet } from "../../../Interfaces/FilterWallet";
import DateInputContainer from "../../../assets/atoms/DateInputContainer";
import { DateInput } from "../../../assets/atoms/DateInput";
import { device } from "../../../assets/devices";

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

const ExpensesFilterDropdown = ({ setFilterData, filterData }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<any>("");
  const [selectedAddedTime, setSelectedAddedTime] = useState("");
  const [selectedItemsPerPage, setSelectedItemsPerPage] = useState(5);

  const pickDate = (e: any) => {
    setFilterData({ ...filterData, date: e.target.value });
  };

  return (
    <FilterContainer>
      <DateInputContainer date={filterData.date}>
        <DateInput
          type="date"
          name="date"
          id=""
          onChange={pickDate}
          placeholder="date"
        />
      </DateInputContainer>
      <DropdownWrapper>
        <FilterDropdown
          filterName="Category"
          selectedValue={selectedCategory}
          setFilterData={setFilterData}
          filterData={filterData}
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
                setFilterData({ ...filterData, category: "shopping" });
                setSelectedCategory("Shopping");
              }}
            >
              Shopping
            </li>
            <li
              onClick={() => {
                setFilterData({ ...filterData, category: "gift" });
                setSelectedCategory("Gift");
              }}
            >
              Gift
            </li>
            <li
              onClick={() => {
                setFilterData({ ...filterData, category: "transportation" });
                setSelectedCategory("Transportation");
              }}
            >
              Transportation
            </li>
          </ul>
        </FilterDropdown>
        <FilterDropdown
          filterName="Added"
          selectedValue={selectedAddedTime}
          filterData={filterData}
          setFilterData={setFilterData}
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
          filterData={filterData}
          setFilterData={setFilterData}
          filterName="Items"
          selectedValue={selectedItemsPerPage}
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

export default ExpensesFilterDropdown;
