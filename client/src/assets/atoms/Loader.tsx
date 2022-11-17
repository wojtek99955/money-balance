import React from "react";

import styled from "styled-components";

const Container = styled.div`
  width: 48px;
  height: 48px;
  span {
    width: 100%;
    height: 100%;
    border: ${({ theme }) => `5px dotted ${theme.colors.main.default}`};
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: rotation 2s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => {
  return (
    <Container>
      <span></span>
    </Container>
  );
};

export default Loader;
