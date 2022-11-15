import { Formik, Form, Field, ErrorMessage } from "formik";
import { Auth } from "../../Interfaces/Auth";
import { Link } from "react-router-dom";
import { FormContainer, FormWrapper, Container } from "./AuthStyles";
import DescriptionSection from "./DescriptionSection";
import * as yup from "yup";
import ValidationErrorMsg from "../../assets/atoms/ValidationErrorMsg";
import { useCreateUserMutation } from "../../api/userSlice";
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
  const [addUser, response] = useCreateUserMutation();

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
            onSubmit={(val) => {
              addUser(val);
            }}
          >
            <Form>
              <label htmlFor="username">Username</label>
              <Field type="text" name="username" />
              <ErrorMessage component={ValidationErrorMsg} name="username" />
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage component={ValidationErrorMsg} name="password" />
              <button type="submit">Create an account</button>
            </Form>
          </Formik>
        </FormWrapper>
      </FormContainer>
    </Container>
  );
};

export default SignUp;
