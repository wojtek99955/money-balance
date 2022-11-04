import styled from "styled-components";
import Logo from "../../../assets/atoms/Logo";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e1e4e7;
  padding: 1rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Logo />
      <div>Copyright © 2022 </div>
    </StyledFooter>
  );
};

export default Footer;
