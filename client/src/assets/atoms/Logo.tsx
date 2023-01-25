import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LogoContainer = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.main.default};
  cursor: pointer;
  user-select: none;
  padding-top: 1rem;
`;

const username = JSON.parse(localStorage.getItem("username")!);

const Logo = () => {
  let navigate = useNavigate();
  const handleGoHome = () => {
    if (username) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };
  return <LogoContainer onClick={handleGoHome}>Money Balance</LogoContainer>;
};

export default Logo;
