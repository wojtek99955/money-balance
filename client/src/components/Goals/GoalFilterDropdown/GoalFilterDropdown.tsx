import styled from "styled-components";
import FilterDropdown from "../../../assets/atoms/FilterDropdown/FilterDropdown";
import { useState } from "react";
const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const DropdownWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

interface Props {
  setFilterData: React.Dispatch<React.SetStateAction<any>>;
  filterData: any;
}

const GoalFilterDropdown = ({ setFilterData, filterData }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <FilterContainer>
      <DropdownWrapper>
        <FilterDropdown
          filterName="Status"
          selectedValue={selectedCategory}
          filterData={filterData}
          setFilterData={setFilterData}
        >
          <ul>
            <li
              onClick={() => {
                setFilterData({ ...filterData, acheived: true });
                setSelectedCategory("Acheived");
              }}
            >
              Acheived
            </li>
            <li
              onClick={() => {
                setFilterData({ ...filterData, acheived: false });
                setSelectedCategory("Active");
              }}
            >
              Active
            </li>
          </ul>
        </FilterDropdown>
      </DropdownWrapper>
    </FilterContainer>
  );
};

export default GoalFilterDropdown;
