import { useState } from "react";
import styled from "styled-components";
import FilterDropdown from "../../../assets/atoms/FilterDropdown";
import { FilterWallet } from "../../../Interfaces/FilterWallet";

interface Props {
  setFilterData: React.Dispatch<React.SetStateAction<FilterWallet>>;
  filterData: FilterWallet;
}

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const IncomesFilterDropdown = ({ setFilterData, filterData }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAddedTime, setSelectedAddedTime] = useState("");
  return (
    <FilterContainer>
      <FilterDropdown filterName="Category" selectedValue={selectedCategory}>
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
      <FilterDropdown filterName="Date" selectedValue={selectedAddedTime}>
        <ul>
          <li
            onClick={() => {
              setFilterData({ ...filterData, date: -1 });
              setSelectedAddedTime("Latest");
            }}
          >
            Latest
          </li>
          <li
            onClick={() => {
              setFilterData({ ...filterData, date: 1 });
              setSelectedAddedTime("Oldest");
            }}
          >
            Oldest
          </li>
        </ul>
      </FilterDropdown>
    </FilterContainer>
  );
};

export default IncomesFilterDropdown;