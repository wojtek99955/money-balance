import { Formik, Form, Field, ErrorMessage } from "formik";
import { Auth } from "../../Interfaces/Auth";
import { Container, FormContainer, FormWrapper } from "./AuthStyles";
import DescriptionSection from "./DescriptionSection";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import ValidationErrorMsg from "../../assets/atoms/ValidationErrorMsg";
import jwt_decode from "jwt-decode";
import { useLoginMutation } from "../../api/authSlice";
import LoadingSpinner from "../../assets/atoms/LoadingSpinner";
import { useState } from "react";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().min(3, "Minimum 3 characters").required("Required"),
  password: yup.string().required("Required"),
});

const SignIn = () => {
  let navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const [errMsg, setErrMsg] = useState("");

  const dataRange = localStorage.getItem("data-range");

  const handleSubmit = async (val: Auth) => {
    try {
      const res = await login({
        username: val.username,
        password: val.password,
      }).unwrap();
      let JWT = await res.accessToken;
      const decoded: any = jwt_decode(JWT);
      localStorage.setItem(
        "username",
        JSON.stringify(decoded.UserInfo.username)
      );
      dataRange ? localStorage.setItem("data-range", "month") : null;
      navigate("/dashboard");
    } catch (err: any) {
      if (!err.status) {
        setErrMsg("No Server Response");
      } else if (err.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.status === 401) {
        setErrMsg("Wrong password or email");
      } else if (err.status === "FETCH_ERROR") {
        setErrMsg("Internet connection error");
      } else {
        setErrMsg(err.data.message);
      }
    }
  };

  return (
    <Container>
      <DescriptionSection />
      <FormContainer>
        <div>Welcome back</div>
        <h1>Sign in to Money Balance.</h1>
        <div>
          Don't have an account? <Link to="/sign-up">Register</Link>
        </div>
        <FormWrapper>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(val) => {
              handleSubmit(val);
            }}
          >
            <Form>
              <label htmlFor="username">Username</label>
              <Field type="text" name="username" placeholder="username" />
              <ErrorMessage component={ValidationErrorMsg} name="username" />
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" placeholder="password" />
              <ErrorMessage component={ValidationErrorMsg} name="password" />
              {errMsg && <ValidationErrorMsg>{errMsg}</ValidationErrorMsg>}
              <button type="submit">
                {isLoading ? <LoadingSpinner /> : "Sign in"}
              </button>
            </Form>
          </Formik>
        </FormWrapper>
      </FormContainer>
    </Container>
  );
};

export default SignIn;
