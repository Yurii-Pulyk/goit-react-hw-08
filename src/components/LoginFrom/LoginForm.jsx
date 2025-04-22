import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(logIn(values))
      .unwrap()
      .then(() => console.log("Log in success"));
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <label>
          Email
          <Field type="email" name="email"></Field>
        </label>
        <label>
          Password
          <Field type="password" name="password"></Field>
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
