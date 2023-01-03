import * as yup from "yup";

const signinSchema = yup
  .object({
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(4, "Password is too short."),
  })
  .required();

export default signinSchema;
