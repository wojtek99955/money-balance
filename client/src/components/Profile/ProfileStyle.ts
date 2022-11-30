import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { BsCamera } from "react-icons/bs";
import { MdOutlineDeleteForever } from "react-icons/md";
import { motion } from "framer-motion";

interface Img {
  img: string | number;
}

interface FetchAvatar {
  avatar: any;
}

export const Avatar = styled(motion.div)<Img>`
  width: 15rem;
  height: 15rem;
  border: 1px solid grey;
  border-radius: 12px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  cursor: pointer;
`;

export const ProfileIcon = styled(CgProfile)`
  font-size: 10rem;
  color: ${({ theme }) => theme.colors.grey};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const AddAvatarIconContainer = styled(motion.div)`
  background-color: white;
  position: absolute;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 2;
  right: -1.5rem;
  bottom: -1.5rem;
`;
export const AddAvatarIcon = styled(BsCamera)`
  font-size: 1.5rem;
  color: grey;
`;

export const FileInput = styled.input<FetchAvatar>`
  display: block;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  position: relative;
  z-index: ${({ avatar }) => (avatar === 0 ? "100" : "1")};
`;

export const EditContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  border-radius: 12px;
  z-index: 10;
  button {
  }
`;

export const DeleteIcon = styled(MdOutlineDeleteForever)`
  font-size: 2rem;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const variants = {
  hover: {
    left: "50%",
    transform: "translate(-50%, -50%)",
    top: "50%",
  },
  initial: {
    right: "-1.5rem",
    bottom: "-1.5rem",
  },
};

export const DeleteAccountBtn = styled.button`
  background-color: #e65016;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.7rem 1.4rem;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20rem;

  input {
    border-radius: 8px;
    padding: 0.5rem;
    border: ${({ theme }) => `2px solid ${theme.colors.grey}`};
  }
`;

export const UsernameContainer = styled.div`
  margin-bottom: 2rem;
`;
export const Username = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  strong {
    font-size: 2rem;
    padding: 1rem 0;
  }
  button {
    border: ${({ theme }) => `2px solid ${theme.colors.main.default}`};
    background-color: ${({ theme }) => theme.colors.main.default};
    color: white;
    font-size: 1rem;
    padding: 0.5rem 1.4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export const EditUsernameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`;
