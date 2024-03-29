import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { BsCamera } from "react-icons/bs";
import { MdOutlineDeleteForever } from "react-icons/md";
import { motion } from "framer-motion";
import { device } from "../../../assets/devices.js";

interface Img {
  img: string | number;
}

interface FetchAvatar {
  avatar: any;
}

export const AvatarContainer = styled(motion.div)<Img>`
  width: 10rem;
  height: 10rem;
  border: 1px solid grey;
  border-radius: 50%;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  cursor: pointer;

  @media ${device.tablet} {
    width: 11rem;
    height: 11rem;
  }
  @media ${device.laptop} {
    width: 15rem;
    height: 15rem;
  }
`;

export const ProfileIcon = styled(CgProfile)`
  font-size: 8rem;
  color: ${({ theme }) => theme.colors.grey};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media ${device.tablet} {
    font-size: 10rem;
  }
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
  height: 100%;
  opacity: 0;
  width: 100%;
  cursor: pointer;
  position: relative;
  z-index: ${({ avatar }) => (avatar === 0 ? "100" : "1")};
  display: ${({ avatar }) => (avatar ? "none" : "block")};
`;

export const EditContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  border-radius: 50%;
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
