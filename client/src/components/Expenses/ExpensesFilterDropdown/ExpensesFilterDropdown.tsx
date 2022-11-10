import { useState } from "react";
import styled from "styled-components";
import FilterDropdown from "../../../assets/atoms/FilterDropdown";

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const ExpensesFilterDropdown = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAddedTime, setSelectedAddedTime] = useState("");
  return (
    <FilterContainer>
      <FilterDropdown filterName="Category" selectedValue={selectedCategory}>
        <ul>
          <li
            onClick={() => {
              setSelectedCategory("Shopping");
            }}
          >
            Shopping
          </li>
          <li
            onClick={() => {
              setSelectedCategory("Gift");
            }}
          >
            Gift
          </li>
          <li
            onClick={() => {
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
              setSelectedAddedTime("Latest");
            }}
          >
            Latest
          </li>
          <li
            onClick={() => {
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

export default ExpensesFilterDropdown;
