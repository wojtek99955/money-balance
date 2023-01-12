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
  const [files, setFiles] = useState<File | null>(null);
  const [addAvatar, response] = useAddAvatarMutation();
  const [deleteAvatar, { isSuccess, isError, error }] =
    useDeleteAvatarMutation();

  const convertToBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleSendAvatar = async () => {
    const base64 = await convertToBase64(files!);
    addAvatar({ myFile: base64 });
  };

  const handleDeleteAvatar = async () => {
    deleteAvatar({});
    setFiles(null);
  };

  const { data: avatar, isLoading } = useGetAvatarQuery(undefined);

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

  console.log(isLoading);

  return (
    <AvatarContainer
      img={avatar ? avatar[0]?.file : null}
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
      {isHovered && avatar === 0 ? <EditContainer /> : null}
    </AvatarContainer>
  );
};

export default Avatar;
