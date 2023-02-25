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
import DeleteModal from "./DeleteModal/DeleteModal";
import { AnimatePresence } from "framer-motion";
import ValidationErrorMsg from "../../assets/atoms/ValidationErrorMsg";
import LoadingSpinner from "../../assets/atoms/LoadingSpinner";

const Profile = () => {
  const { data: userData, isLoading: userDataLoading } =
    useGetUserQuery(undefined);

  const username = userData ? userData[0].username : null;

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [newUsername, setNewusername] = useState("");
  const [updateUsername, { isSuccess, isLoading }] =
    useUpdateUsernameMutation();
  const [conflictMsg, setConflictMsg] = useState<null | string>(null);

  const handleUpdateUsername = async () => {
    const res: any = await updateUsername({ username, newUsername });
    console.log(res);
    if (res.error.status === 409) {
      setConflictMsg("duplicated username");
    }
  };
  console.log(conflictMsg);
  const [editUsername, setEditUsername] = useState(false);
  const handleOpenEditUsername = () => {
    setEditUsername((prev) => !prev);
  };

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleShowDeleteModal = () => {
    setShowDeleteModal(true);
  };

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
                <button onClick={handleUpdateUsername}>
                  {isLoading ? <LoadingSpinner /> : "save"}
                </button>
              </EditUsernameContainer>
            ) : null}
            <ValidationErrorMsg>
              {isSuccess ? null : conflictMsg}
            </ValidationErrorMsg>
          </UsernameContainer>
          <DeleteAccountBtn onClick={handleShowDeleteModal}>
            Delete account
          </DeleteAccountBtn>
        </ProfileWrapper>
      </RouteWrapper>
      <AnimatePresence>
        {showDeleteModal ? (
          <DeleteModal setShowDeleteModal={setShowDeleteModal} />
        ) : null}
      </AnimatePresence>
    </RouteContainer>
  );
};

export default Profile;
