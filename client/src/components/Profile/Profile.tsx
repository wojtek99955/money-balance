import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Container,
  DownIcon,
  UpIcon,
  OptionsContainer,
  ProfileWrapper,
} from "./ProfileStyle";

const username = JSON.parse(localStorage.getItem("username")!);
console.log(username);

const Profile = () => {
  let navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };
  const handleLogout = async () => {
    try {
      await fetch("http://localhost:3500/auth/logout");
      localStorage.removeItem("username");
      navigate("/sign-in");
    } catch (err) {
      console.log(err);
    }
  };
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
      <ProfileWrapper onClick={toggleOptions}>
        <span>{username!.slice(0, 10)}</span>
        {showOptions ? <UpIcon /> : <DownIcon />}
      </ProfileWrapper>
    </Container>
  );
};

export default Profile;
