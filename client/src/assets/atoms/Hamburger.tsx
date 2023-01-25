import { useDispatch } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { toggleSidebar } from "../../sidebarSlice";
import styled from "styled-components";
import { device } from "../../assets/devices.js";

const HamburgerIcon = styled(GiHamburgerMenu)`
  cursor: pointer;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.main.default};
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 2rem;
  @media ${device.tablet} {
    display: none;
  }
`;

const Hamburger = () => {
  const dispatch = useDispatch();
  const handleOpenSidebar = () => {
    dispatch(toggleSidebar(true));
  };
  return (
    <Container>
      <HamburgerIcon onClick={handleOpenSidebar} />
    </Container>
  );
};

export default Hamburger;
