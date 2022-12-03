import {
  useGetAvatarQuery,
  useAddAvatarMutation,
  useDeleteAvatarMutation,
} from "../../../api/avatarSlice";
import { useState, useEffect } from "react";
import {
  AvatarContainer,
  ProfileIcon,
  DeleteIcon,
  AddAvatarIcon,
  AddAvatarIconContainer,
  EditContainer,
  FileInput,
  variants,
} from "./AvatarStyle";

const Avatar = () => {
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

  return (
    <AvatarContainer
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
    </AvatarContainer>
  );
};

export default Avatar;
