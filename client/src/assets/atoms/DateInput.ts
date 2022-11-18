import styled from "styled-components";

export const DateInput = styled.input`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  border: none;
  opacity: 0;
  border-radius: 12px;

  ::-webkit-calendar-picker-indicator {
    width: 100%;
    height: 100%;
    position: absolute;
    cursor: pointer;
  }
  .widget-ptcsdatepicker::part(date-field-text-box) {
    border-radius: 25px;
  }
`;
