import * as yup from "yup";

const signupSchema = yup
  .object({
    email: yup.string().email().required("Email is required"),
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
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
