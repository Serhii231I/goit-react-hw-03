import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "../ContactForm/ContactForm.module.css";

const ContactForm = ({ onSubmit }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Min 3 characters")
      .max(20, "Max 20 characters")
      .required("This field is required"),
    number: Yup.string()
      .min(7, "Min 7 characters")
      .required("This field is required"),
  });
  return (
    <div className={s.formWrapper}>
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values);
          resetForm();
        }}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span className={s.labelText}>Name</span>
            <Field className={s.input} name="name" type="text" />
            <ErrorMessage name="name" className={s.error} component="div" />
          </label>
          <label className={s.label}>
            <span className={s.labelText}>Number</span>
            <Field className={s.input} name="number" type="tel" />
            <ErrorMessage name="number" className={s.error} component="div" />
          </label>
          <button type="submit" className={s.submitBtn}>
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactForm;
