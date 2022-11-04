import { Formik, Form, Field } from "formik";
import { Auth } from "../../Interfaces/Auth";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FormContainer, FormWrapper, Container } from "./AuthStyles";
import DescriptionSection from "./DescriptionSection";

const initialValues = {
  username: "",
  password: "",
};

const handleSubmit = async (val: Auth) => {
  const res = await fetch("http://localhost:3500/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(val),
  });
  console.log(res);
};

const SignUp = () => {
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
            onSubmit={(val) => {
              handleSubmit(val);
            }}
          >
            <Form>
              <label htmlFor="username">Username</label>
              <Field type="text" name="username" />
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <button type="submit">Create an account</button>
            </Form>
          </Formik>
        </FormWrapper>
      </FormContainer>
    </Container>
  );
};

export default SignUp;
