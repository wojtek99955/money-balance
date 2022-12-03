import { RouteContainer } from "../../assets/atoms/RouteContainer";
import { useState } from "react";
import {
  useGetUserQuery,
  useDeleteUserMutation,
  useUpdateUsernameMutation,
} from "../../api/userSlice";
import {
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
import Avatar from "./Avatar/Avatar";

const Profile = () => {
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
        <Avatar />
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
