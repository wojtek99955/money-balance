import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRefreshMutation } from "./api/authSlice";
import { useNavigate } from "react-router-dom";

const VerifyToken = () => {
  const [trueSuccess, setTrueSuccess] = useState(false);

  const [refresh, { isUninitialized, isLoading, isSuccess, isError, error }] =
    useRefreshMutation();
  let navigate = useNavigate();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      console.log("verifying refresh token");
      try {
        const res: any = await refresh(null);
        console.log(res);
        setTrueSuccess(true);
        console.log(isError, error);
        if (res.error.status === 401) {
          navigate("/sign-in");
          window.location.reload();
        } else {
          return;
        }
      } catch (err: any) {
        console.log(err);
      }
    };

    verifyRefreshToken();
  }, []);
  let content: any;
  if (isSuccess && trueSuccess) {
    console.log("success");
    content = <Outlet />;
  } else if (isUninitialized) {
    console.log("token and uninit");
    console.log(isUninitialized);
    content = <Outlet />;
  } else if (isError) {
    console.log(isError + " is eerror");
  }

  return content;
};
export default VerifyToken;
