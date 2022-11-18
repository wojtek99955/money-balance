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

const ExpensesFilterDropdown = ({ setFilterData, filterData }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAddedTime, setSelectedAddedTime] = useState("");
  const [selectedItemsPerPage, setSelectedItemsPerPage] = useState(5);
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
      <FilterDropdown filterName="Date" selectedValue={selectedAddedTime}>
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
        filterName="ItemsPerPage"
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
    </FilterContainer>
  );
};

export default ExpensesFilterDropdown;
