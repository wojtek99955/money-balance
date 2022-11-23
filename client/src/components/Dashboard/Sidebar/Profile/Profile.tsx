import { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Container,
  DownIcon,
  UpIcon,
  OptionsContainer,
  ProfileWrapper,
} from "./ProfileStyle";
import { apiSlice } from "../../../../api/apiSlice";
import { useDispatch } from "react-redux";
import { useLogoutMutation } from "../../../../api/authSlice";

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
              <li>Profile</li>
              <li>Statistics</li>
              <li>Wallet</li>
              <li onClick={handleLogout}>Logout</li>
            </ul>
          </OptionsContainer>
        ) : null}
      </AnimatePresence>
      <ProfileWrapper onClick={toggleOptions} ref={profileWrapperRef}>
        <span>{username?.slice(0, 10)}</span>
        {showOptions ? <UpIcon /> : <DownIcon />}
      </ProfileWrapper>
    </Container>
  );
};

export default Profile;
