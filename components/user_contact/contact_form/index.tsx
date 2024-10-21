"use client";
import Button from "@/components/buttons/button";
import { FormData, validation } from "../form_validation";
import styles from "./index.module.css";
import { FormikHelpers, useFormik } from "formik";
type Props = {};

const postDataMessage = async (data: FormData) => {
  const res = await fetch(`${process.env.BASE_URL}/message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error(`Error: ${res.status} - ${res.statusText}`);
  }
};

const ContactForm = (props: Props) => {
  const formik = useFormik<FormData>({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      message: "",
    },
    validationSchema: validation,
    onSubmit: async (values: FormData, actions: FormikHelpers<FormData>) => {
      const trimObj = {
        name: values.name.trim(),
        surname: values.surname.trim(),
        email: values.email.trim(),
        message: values.message.trim(),
      };
      await postDataMessage(trimObj);
      setTimeout(() => {
        actions.resetForm();
      }, 2000);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={styles.comment}>
        <input
          onChange={formik.handleChange}
          value={formik.values.name}
          name="name"
          type="text"
          placeholder={formik.errors.name ? `${formik.errors.name}` : "Name"}
        />
      </div>
      <div className={styles.comment}>
        <input
          onChange={formik.handleChange}
          value={formik.values.surname}
          name="surname"
          type="text"
          placeholder={
            formik.errors.surname ? `${formik.errors.surname}` : "Surname"
          }
        />
      </div>
      <div className={styles.comment}>
        <input
          onChange={formik.handleChange}
          value={formik.values.email}
          name="email"
          type="email"
          placeholder={formik.errors.email ? `${formik.errors.email}` : "Email"}
        />
      </div>
      <div className={styles.comment}>
        <textarea
          onChange={formik.handleChange}
          value={formik.values.message}
          name="message"
          placeholder={
            formik.errors.message
              ? `${formik.errors.message}`
              : "Enter a message"
          }
        ></textarea>
      </div>
      <div className={styles["cv-btn"]}>
        <Button>Submit</Button>
      </div>
    </form>
  );
};

export default ContactForm;
