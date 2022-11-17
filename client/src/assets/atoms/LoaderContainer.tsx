import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #eee;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  border-radius: 12px;
  overflow: hidden;

  &::before {
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #fff0, #fff, #fff0);
    content: "";
    animation: flash 1200ms linear infinite;
    position: absolute;
  }

  @keyframes flash {
    0% {
      left: -100%;
    }
    60%,
    100% {
      left: 110%;
    }
  }
`;

interface Props {
  isLoading: boolean;
}

const LoaderContainer = ({ isLoading }: Props) => {
  return <>{isLoading ? <Container></Container> : null}</>;
};

export default LoaderContainer;
