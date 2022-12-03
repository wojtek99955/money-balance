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

  const [login, { isLoading, isError }] = useLoginMutation();

  const handleSubmit = async (val: Auth) => {
    const res: any = await login({
      username: val.username,
      password: val.password,
    }).unwrap();
    console.log(res);

    let JWT = await res.accessToken;
    console.log(JWT);
    const decoded: any = jwt_decode(JWT);
    localStorage.setItem("username", JSON.stringify(decoded.UserInfo.username));
    navigate("/dashboard");
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
              {isError && (
                <ValidationErrorMsg>
                  Wrong username or password
                </ValidationErrorMsg>
              )}
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
