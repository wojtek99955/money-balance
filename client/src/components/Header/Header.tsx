import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AvatarContainer } from "../Dashboard/Dashboard/DashboardStyle";
import { useGetAvatarQuery } from "../../api/avatarSlice";
import LoaderContainer from "../../assets/atoms/LoaderContainer";
import { device } from "../../assets/devices.js";
import Hamburger from "../../assets/atoms/Hamburger";
const StyledHeader = styled.header`
  background-color: white;
  padding: 0.3rem 1rem;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
  display: flex;
  justify-content: space-between;

  @media ${device.tablet} {
    display: none;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  span {
    font-weight: 600;
    display: none;
    @media ${device.tablet} {
      display: block;
    }
  }
  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    color: transparent;
  }
`;

const Header = () => {
  const username = localStorage.getItem("username");

  const { data: avatar, isLoading: isAvatarLoading } =
    useGetAvatarQuery(undefined);

  let navigate = useNavigate();

  const goToProfile = () => {
    navigate("/profile");
  };
  return (
    <StyledHeader>
      <Hamburger />
      <Profile onClick={goToProfile}>
        <AvatarContainer>
          {isAvatarLoading ? <LoaderContainer /> : null}
          {avatar ? <img src={avatar[0]?.file} /> : null}
        </AvatarContainer>
        <span>{username}</span>
      </Profile>
    </StyledHeader>
  );
};

export default Header;
