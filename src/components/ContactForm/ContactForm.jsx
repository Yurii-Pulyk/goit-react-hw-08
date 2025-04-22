import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();

  const FormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required!"),
    number: Yup.string().max(10, "Too Long!").required("Required!"),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  const nameId = nanoid();
  const numberId = nanoid();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: nanoid(),
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FormSchema}
    >
      <Form className={css.container}>
        <div className={css.containerField}>
          <label className={css.label} htmlFor={nameId}>
            Name
          </label>
          <Field name="name" id={nameId}></Field>
          <ErrorMessage name="name" component="span"></ErrorMessage>
        </div>
        <div className={css.containerField}>
          <label className={css.label} htmlFor={numberId}>
            Number
          </label>
          <Field name="number" id={numberId}></Field>
          <ErrorMessage name="number" component="span"></ErrorMessage>
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
