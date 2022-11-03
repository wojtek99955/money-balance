import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LogoContainer = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.main};
  cursor: pointer;
`;
const Logo = () => {
  let navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/");
  };
  return <LogoContainer onClick={handleGoHome}>Money Balance</LogoContainer>;
};

export default Logo;
