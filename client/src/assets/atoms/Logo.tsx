import styled from "styled-components";
const LogoContainer = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.main};
`;
const Logo = () => {
  return <LogoContainer>Money Balance</LogoContainer>;
};

export default Logo;
