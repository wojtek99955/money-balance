import { Formik, Form, Field, ErrorMessage } from "formik";
import { Auth } from "../../Interfaces/Auth";
import { Container, FormContainer, FormWrapper } from "./AuthStyles";
import DescriptionSection from "./DescriptionSection";
import { Link } from "react-router-dom";
import * as yup from "yup";
import ValidationErrorMsg from "../../assets/atoms/ValidationErrorMsg";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().min(3, "Minimum 3 characters").required("Required"),
  password: yup.string().required("Required"),
});

const handleSubmit = async (val: Auth) => {
  const res = await fetch("http://localhost:3500/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(val),
  });
};

const SignIn = () => {
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
              <button type="submit">Sign in</button>
            </Form>
          </Formik>
        </FormWrapper>
      </FormContainer>
    </Container>
  );
};

export default SignIn;
