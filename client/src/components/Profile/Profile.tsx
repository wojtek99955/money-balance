import { RouteContainer } from "../../assets/atoms/RouteContainer";
import { useState } from "react";
import { useEffect } from "react";
import {
  useGetAvatarQuery,
  useAddAvatarMutation,
  useDeleteAvatarMutation,
} from "../../api/avatarSlice";
import { useGetUserQuery } from "../../api/userSlice";
import {
  Avatar,
  ProfileIcon,
  AddAvatarIconContainer,
  AddAvatarIcon,
  FileInput,
  EditContainer,
  DeleteIcon,
  variants,
} from "./ProfileStyle";

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

  const { data: userData, isLoading: userDataLoading } =
    useGetUserQuery(undefined);

  const username = userData ? userData[0].username : null;
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
