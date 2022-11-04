import { Formik, Form, Field } from "formik";
import { Auth } from "../../Interfaces/Auth";
import { Container, FormContainer, FormWrapper } from "./AuthStyles";
import DescriptionSection from "./DescriptionSection";
import { Link } from "react-router-dom";

const initialValues = {
  username: "",
  password: "",
};

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
            onSubmit={(val) => {
              handleSubmit(val);
            }}
          >
            <Form>
              <label htmlFor="username">Username</label>
              <Field type="text" name="username" />
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <button type="submit">Sign in</button>
            </Form>
          </Formik>
        </FormWrapper>
      </FormContainer>
    </Container>
  );
};

export default SignIn;