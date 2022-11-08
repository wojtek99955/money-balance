import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { useState } from "react";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.main.default};
  position: absolute;
  bottom: 1.5rem;
  padding: 1.1rem 0.2rem;
  border-radius: 12px;
  width: 11rem;
  overflow-wrap: break-word;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
  span {
    color: white;
  }
`;

const DownIcon = styled(FiChevronDown)`
  color: white;
  font-size: 1.5rem;
`;

const UpIcon = styled(FiChevronUp)`
  color: white;
  font-size: 1.5rem;
`;

const username = JSON.parse(localStorage.getItem("username")!);

const Profile = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };
  return (
    <Container onClick={toggleOptions}>
      <span>{username.slice(0, 10)}</span>
      {showOptions ? <UpIcon /> : <DownIcon />}
    </Container>
  );
};

export default Profile;
