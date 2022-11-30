import { RouteContainer } from "../../assets/atoms/RouteContainer";
import { useState } from "react";
import { useEffect } from "react";
import {
  useGetAvatarQuery,
  useAddAvatarMutation,
  useDeleteAvatarMutation,
} from "../../api/avatarSlice";
import {
  useGetUserQuery,
  useDeleteUserMutation,
  useUpdateUsernameMutation,
} from "../../api/userSlice";
import {
  Avatar,
  ProfileIcon,
  AddAvatarIconContainer,
  AddAvatarIcon,
  FileInput,
  EditContainer,
  DeleteIcon,
  variants,
  DeleteAccountBtn,
  ProfileWrapper,
  UsernameContainer,
  Username,
  EditUsernameContainer,
  RouteWrapper,
} from "./ProfileStyle";
import { useDispatch } from "react-redux";
import { apiSlice } from "../../api/apiSlice";
import { useNavigate } from "react-router-dom";

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

  const [
    deleteUser,
    { isSuccess: deleteUserSuccess, isError: deleteUserError },
  ] = useDeleteUserMutation();

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleDeleteUser = async () => {
    await deleteUser({ username });
    dispatch(apiSlice.util.resetApiState());
    localStorage.removeItem("username");
    navigate("/sign-in");
  };

  const [newUsername, setNewusername] = useState("");
  const [updateUsername] = useUpdateUsernameMutation();

  const handleUpdateUsername = () => {
    updateUsername({ username, newUsername });
  };

  const [editUsername, setEditUsername] = useState(false);
  const handleOpenEditUsername = () => {
    setEditUsername((prev) => !prev);
  };

  console.log(userData);
  return (
    <RouteContainer>
      <RouteWrapper>
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
        <ProfileWrapper>
          <UsernameContainer>
            <Username>
              <strong>{username}</strong>
              <button onClick={handleOpenEditUsername}>edit</button>
            </Username>
            {editUsername ? (
              <EditUsernameContainer>
                <input
                  type="text"
                  placeholder="new username"
                  onChange={(e: any) => {
                    setNewusername(e.target.value);
                  }}
                />
                <button onClick={handleUpdateUsername}>save</button>
              </EditUsernameContainer>
            ) : null}
          </UsernameContainer>
          <DeleteAccountBtn onClick={handleDeleteUser}>
            Delete account
          </DeleteAccountBtn>
        </ProfileWrapper>
      </RouteWrapper>
    </RouteContainer>
  );
};

export default Profile;
