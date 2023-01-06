import * as yup from "yup";

const signupSchema = yup
  .object({
    email: yup.string().email().required("Email is required"),
    displayName: yup.string().required("Full Name is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(4, "Password is too short."),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();

export default signupSchema;
