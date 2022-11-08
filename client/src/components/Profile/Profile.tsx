import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const Container = styled.div`
  position: absolute;
  bottom: 1.5rem;
`;

const DownIcon = styled(FiChevronDown)`
  color: white;
  font-size: 1.5rem;
`;

const UpIcon = styled(FiChevronUp)`
  color: white;
  font-size: 1.5rem;
`;

const OptionsContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.main.light};
  border-radius: 12px;
  padding: 1rem;
  overflow: hidden;
  height: 200px;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    li {
      color: white;
      padding: 0.2rem 0;
      cursor: pointer;
    }
  }
`;
const ProfileWrapper = styled.div`
  padding: 1.1rem 0.2rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.main.default};
  width: 11rem;
  overflow-wrap: break-word;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  span {
    color: white;
    user-select: none;
  }
`;

const username = JSON.parse(localStorage.getItem("username")!);

const Profile = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
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
              <li>Logout</li>
            </ul>
          </OptionsContainer>
        ) : null}
      </AnimatePresence>
      <ProfileWrapper onClick={toggleOptions}>
        <span>{username.slice(0, 10)}</span>
        {showOptions ? <UpIcon /> : <DownIcon />}
      </ProfileWrapper>
    </Container>
  );
};

export default Profile;
