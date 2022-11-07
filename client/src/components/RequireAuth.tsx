import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

const RequireAuth = ({ children }: Props) => {
  const isLogged = localStorage.getItem("username");
  return isLogged ? children : <Navigate to="/sign-up" />;
};
export default RequireAuth;
