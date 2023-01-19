import { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Container,
  DownIcon,
  UpIcon,
  OptionsContainer,
  ProfileWrapper,
  StyledLink,
} from "./ProfileStyle";
import { apiSlice } from "../../../../api/apiSlice";
import { useDispatch } from "react-redux";
import { useLogoutMutation } from "../../../../api/authSlice";
import { useGetUserQuery } from "../../../../api/userSlice";

const Profile = () => {
  const username = JSON.parse(localStorage.getItem("username")!);
  let dispatch = useDispatch();
  const [logout, response] = useLogoutMutation();

  let navigate = useNavigate();
  const profileWrapperRef = useRef<HTMLDivElement>(null);
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };
  const handleLogout = async () => {
    await logout({});
    dispatch(apiSlice.util.resetApiState());
    localStorage.removeItem("username");
    navigate("/sign-in");
  };

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (
        profileWrapperRef.current &&
        !profileWrapperRef.current.contains(e.target)
      ) {
        setShowOptions(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });
  const { data: userData, isLoading: userDataLoading } =
    useGetUserQuery(undefined);

  const usernameData = userData ? userData[0].username : null;

  return (
    <Container>
      <AnimatePresence>
        {showOptions ? (
          <OptionsContainer
            initial={{ height: 0, y: 0 }}
            animate={{ height: 200, y: -15 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <ul>
              <li>
                <StyledLink to="/profile">Profile</StyledLink>
                <StyledLink to="/incomes">Incomes</StyledLink>
                <StyledLink to="/expenses">Expenses</StyledLink>
              </li>
              <li onClick={handleLogout}>Logout</li>
            </ul>
          </OptionsContainer>
        ) : null}
      </AnimatePresence>
      <ProfileWrapper onClick={toggleOptions} ref={profileWrapperRef}>
        <span>{usernameData?.slice(0, 10)}</span>
        {showOptions ? <UpIcon /> : <DownIcon />}
      </ProfileWrapper>
    </Container>
  );
};

export default Profile;
