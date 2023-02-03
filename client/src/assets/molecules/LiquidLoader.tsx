import styled from "styled-components";

const BoxWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
  overflow: hidden;
  top: 0;
`;
const Box = styled.div`
  border-radius: 12px;

  @keyframes spin {
    0% {
      transform: translateY(0) rotate(0deg);
    }
    100% {
      transform: translateY(-100%) rotate(360deg);
    }
  }

  position: relative;
  z-index: 10000;
  background: ${({ theme }) => theme.colors.grey};
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  outline: 0;
  overflow: hidden;

  &::before {
    content: "";
    font-family: Arial;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -50%;
    left: -50%;
    height: 200%;
    width: 200%;
    box-sizing: border-box;
    background-color: #e7eaf2;
    border-radius: 40%;
    animation: spin 4s linear infinite;
  }
`;
const LiquidLoader = () => {
  return (
    <BoxWrapper>
      <Box>LiquidLoader</Box>
    </BoxWrapper>
  );
};

export default LiquidLoader;
