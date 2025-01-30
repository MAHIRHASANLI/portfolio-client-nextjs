"use client";
import Button from "@/components/buttons/button";
import { validation } from "../form_validation";
import styles from "./index.module.css";
import { FormikHelpers, useFormik } from "formik";
import { TypeContactForm } from "@/types";
import { postContactForm } from "@/api/post_request";

// type Props = {};
// const postDataMessage = async (data:Props) => {
//   const res = await fetch(`${process.env.BASE_URL}/message`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   if (!res.ok) {
//     throw new Error(`Error: ${res.status} - ${res.statusText}`);
//   }
// };

const ContactForm = () => {
  const formik = useFormik<TypeContactForm>({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      message: "",
    },
    validationSchema: validation,
    onSubmit: async (values, actions: FormikHelpers<TypeContactForm>) => {
      const trimObj = {
        name: values.name.trim(),
        surname: values.surname.trim(),
        email: values.email.trim(),
        message: values.message.trim(),
      };
      await postContactForm(trimObj);
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
          placeholder={formik.errors.name ? `${formik.errors.name}` : "Ad"}
        />
      </div>
      <div className={styles.comment}>
        <input
          onChange={formik.handleChange}
          value={formik.values.surname}
          name="surname"
          type="text"
          placeholder={
            formik.errors.surname ? `${formik.errors.surname}` : "Soy ad"
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
              : "Mesajını daxil et"
          }
        ></textarea>
      </div>
      <div className={styles["cv-btn"]}>
        <Button>Göndər</Button>
      </div>
    </form>
  );
};

export default ContactForm;
