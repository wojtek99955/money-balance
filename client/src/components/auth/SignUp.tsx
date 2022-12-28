import { Formik, Form, Field, ErrorMessage } from "formik";
import { Auth } from "../../Interfaces/Auth";
import { Link } from "react-router-dom";
import {
  FormContainer,
  FormWrapper,
  Container,
  SuccessMessage,
} from "./AuthStyles";
import DescriptionSection from "./DescriptionSection";
import * as yup from "yup";
import ValidationErrorMsg from "../../assets/atoms/ValidationErrorMsg";
import { useCreateUserMutation } from "../../api/userSlice";
import LoadingSpinner from "../../assets/atoms/LoadingSpinner";
import { useState } from "react";
const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().min(3, "Minimum 3 characters").required("Required"),
  password: yup
    .string()
    .min(8, "Minimum 8 characters")
    .matches(/\d/, "Minimum one number required")
    .required("Required"),
});

const SignUp = () => {
  const [addUser, { isSuccess, isLoading, isError }] = useCreateUserMutation();

  const [errMsg, setErrMsg] = useState("f");

  const handleSubmit = async (val: Auth) => {
    try {
      const res = await addUser({
        username: val.username,
        password: val.password,
      }).unwrap();
    } catch (err: any) {
      if (!err.status) {
        setErrMsg("No Server Response");
      } else if (err.status === 400) {
        setErrMsg("Missing Username or Password");
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
        <div>start for free</div>
        <h1>Sign up to Money Balance.</h1>
        <div>
          Already a member? <Link to="/sign-in">Log in</Link>
        </div>
        <FormWrapper>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(val, { resetForm }) => {
              handleSubmit(val);
              resetForm();
            }}
          >
            <Form>
              <label htmlFor="username">Username</label>
              <Field type="text" name="username" />
              <ErrorMessage component={ValidationErrorMsg} name="username" />
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage component={ValidationErrorMsg} name="password" />
              {isSuccess && (
                <SuccessMessage>
                  <p>You've created an account</p>
                </SuccessMessage>
              )}
              {isError && <ValidationErrorMsg>{errMsg} </ValidationErrorMsg>}
              <button type="submit">
                {isLoading ? <LoadingSpinner /> : "Create account"}
              </button>
            </Form>
          </Formik>
        </FormWrapper>
      </FormContainer>
    </Container>
  );
};

export default SignUp;
