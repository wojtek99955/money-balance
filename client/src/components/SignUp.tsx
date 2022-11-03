import { Formik, Form, Field } from "formik";

interface LoginType {
  username: string;
  password: string;
}

const initialValues = {
  username: "",
  password: "",
};

const handleSubmit = async (val: LoginType) => {
  const res = await fetch("http://localhost:3500/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(val),
  });
  console.log(res);
};

const SignUp = () => {
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
          <button type="submit">Sign up</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;
