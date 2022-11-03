import { Formik, Form, Field } from "formik";
import {Auth} from "../Interfaces/Auth";

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
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(val) => {
          handleSubmit(val);
        }}
      >
        <Form>
          <Field type="text" name="username" />
          <Field type="password" name="password" />
          <button type="submit">Sign in</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignIn;
