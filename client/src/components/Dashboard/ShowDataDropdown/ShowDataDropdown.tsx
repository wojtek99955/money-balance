import { useState } from "react";
import styled from "styled-components";

interface TStyle {
  active: any;
  id: any;
}
const Btn = styled.button<TStyle>`
  background-color: #d1e8fb;
  border: none;
  padding: 0.5rem 1.2rem;
  color: ${({ theme, active, id }) =>
    active === id ? theme.colors.main.default : theme.colors.grey};
  font-size: 1rem;
  cursor: pointer;
  border-radius: 12px;
  background-color: ${({ active, id, theme }) =>
    active === id ? theme.colors.main.defualt : "white"};
`;

const Container = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const ShowDataDropdown = () => {
  const [selectedValue, setSelectedValue] = useState(
    localStorage.getItem("data-range")
  );
  localStorage.setItem("data-range", selectedValue!);

  const [active, setActive] = useState(localStorage.getItem("data-range"));

  const handleClick = (event: any) => {
    setActive(event.target.id);
  };
  return (
    <Container>
      <Btn
        onClick={(e) => {
          setSelectedValue("month");
          handleClick(e);
        }}
        id={"month"}
        active={active}
      >
        Month
      </Btn>
      <Btn
        onClick={(e) => {
          setSelectedValue("week");
          handleClick(e);
        }}
        id={"week"}
        active={active}
      >
        Week
      </Btn>
    </Container>
  );
};

export default ShowDataDropdown;
