import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f6f6f6;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  border-radius: 12px;
`;

interface Props {
  isLoading: boolean;
}

const LoaderContainer = ({ isLoading }: Props) => {
  return <>{isLoading ? <Container></Container> : null}</>;
};

export default LoaderContainer;
