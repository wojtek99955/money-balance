import { useDispatch } from "react-redux";
import { apiSlice } from "../../../api/apiSlice";
import { useNavigate } from "react-router-dom";
import { useGetUserQuery, useDeleteUserMutation } from "../../../api/userSlice";
import ReactDOM from "react-dom";
import {
  Container,
  CloseIcon,
  ModalContent,
  Btn,
  BtnContainer,
} from "./DeleteModalStyle";

interface Props {
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const DeleteModal = ({ setShowDeleteModal }: Props) => {
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

  const handleCloseModal = () => {
    setShowDeleteModal(false);
  };
  return ReactDOM.createPortal(
    <Container>
      <ModalContent>
        <h3>Are you sure?</h3>
        <BtnContainer>
          <Btn onClick={handleCloseModal}>No</Btn>
          <Btn onClick={handleDeleteUser}>Yes</Btn>
        </BtnContainer>
        <CloseIcon onClick={handleCloseModal} />
      </ModalContent>
    </Container>,
    document.getElementById("delete-account-modal")!
  );
};

export default DeleteModal;
