import styled from "styled-components";
import { RouteContainer } from "../../assets/atoms/RouteContainer";
import { useState } from "react";
import { useEffect } from "react";
import {
  useGetAvatarQuery,
  useAddAvatarMutation,
  useDeleteAvatarMutation,
} from "../../api/avatarSlice";
import { BsCamera } from "react-icons/bs";
import { motion } from "framer-motion";
import { CgProfile } from "react-icons/cg";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useGetUserQuery } from "../../api/userSlice";

interface Img {
  img: string | number;
}

interface FetchAvatar {
  avatar: any;
}

const Avatar = styled(motion.div)<Img>`
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

const ProfileIcon = styled(CgProfile)`
  font-size: 10rem;
  color: ${({ theme }) => theme.colors.grey};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const AddAvatarIconContainer = styled(motion.div)`
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
  bottom: -2.5rem;
`;
const AddAvatarIcon = styled(BsCamera)`
  font-size: 1.5rem;
  color: grey;
`;

const FileInput = styled.input<FetchAvatar>`
  display: block;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  position: relative;
  z-index: ${({ avatar }) => (avatar === 0 ? "100" : "1")};
`;

const EditContainer = styled.div`
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

const DeleteIcon = styled(MdOutlineDeleteForever)`
  font-size: 2rem;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const Profile = () => {
  const [files, setFiles] = useState<any>(null);
  const [addAvatar, response] = useAddAvatarMutation();
  const [deleteAvatar, { isSuccess, isError, error }] =
    useDeleteAvatarMutation();

  const handleSendAvatar = () => {
    const formData = new FormData();
    formData.append("avatar", files);
    addAvatar(formData);
  };

  const handleDeleteAvatar = async () => {
    deleteAvatar({});
    setFiles(null);
  };

  const { data: avatar, isLoading } = useGetAvatarQuery(undefined);
  const path = avatar ? avatar[0]?.path : null;
  const imgPath = `http://localhost:3500/${path}`;

  useEffect(() => {
    if (files) {
      handleSendAvatar();
    }
  }, [files]);

  const [isHovered, setIsHovered] = useState(false);
  function handleMouseEnter() {
    setIsHovered(true);
  }
  function handleMouseLeave() {
    setIsHovered(false);
  }
  const variants = {
    hover: {
      left: "50%",
      transform: "translate(-50%, -50%)",
      top: "50%",
    },
    initial: {
      right: "-1.5rem",
      bottom: "-2.5rem",
    },
  };

  const { data: userData, isLoading: userDataLoading } =
    useGetUserQuery(undefined);

  console.log(userData);
  const username = userData[0].username;
  return (
    <RouteContainer>
      <Avatar
        img={imgPath}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {avatar === 0 ? (
          <>
            <ProfileIcon />
            <AddAvatarIconContainer
              variants={variants}
              animate={isHovered ? "hover" : "initial"}
            >
              <AddAvatarIcon />
            </AddAvatarIconContainer>
          </>
        ) : null}
        <FileInput
          type="file"
          name="avatar"
          id=""
          onChange={(e: any) => setFiles(e.target.files[0])}
          avatar={avatar}
        />
        {isHovered && avatar ? (
          <EditContainer>
            <DeleteIcon onClick={handleDeleteAvatar} />
          </EditContainer>
        ) : null}
        {isHovered && avatar === 0 ? <EditContainer></EditContainer> : null}
      </Avatar>
      <div>{username}</div>
    </RouteContainer>
  );
};

export default Profile;
