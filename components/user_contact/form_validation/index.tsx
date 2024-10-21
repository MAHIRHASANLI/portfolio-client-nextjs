import * as Yup from "yup";

export interface FormData {
  name: string;
  surname: string;
  email: string;
  message: string;
}

export const validation: Yup.Schema<FormData> = Yup.object().shape({
  name: Yup.string()
    .min(5, "Too Short!")
    .max(20, "Too Long!")
    .strict(true)
    .required("name required"),
  surname: Yup.string()
    .min(5, "Too Short!")
    .max(20, "Too Long!")
    .strict(true)
    .required("surname required"),
  email: Yup.string()
    .email("Invalid email")
    .strict(true)
    .required("email required"),
  message: Yup.string()
    .min(5, "Too Short!")
    .max(300, "Too Long!")
    .required("comment required"),
});
