import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "common";
import { auth } from "db";
import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import GoogleButton from "../google";
import styles from "./forgot-password.module.scss";
import forgotPasswordSchema from "./forgotPasswordSchema";

interface Credentials {
  email: string;
}
const ForgotPassword = () => {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Credentials>({
    resolver: yupResolver(forgotPasswordSchema),
  });
  const [disabledBtn, setIsDisabledBtn] = useState(false);

  const handleForgotPassword = async () => {
    toast.info("Submitting...");
    setIsDisabledBtn(true);
    const { email } = getValues();
    try {
      await sendPasswordResetEmail(auth, email);

      toast.success("Email confirmation sent!");
    } catch (error: unknown) {
      toast.error((error as Error).message);
    } finally {
      setIsDisabledBtn(false);
    }
  };

  return (
    <>
      <h1>Forgot Password</h1>
      <form
        className={styles.form}
        onSubmit={handleSubmit(handleForgotPassword)}
      >
        <Input
          label="Email"
          name="email"
          placeholder="Enter your email address"
          control={control}
          errors={errors.email}
        />

        <button
          className={`${
            !disabledBtn ? styles.forgotPasswordBtn : styles.disabledBtn
          }`}
          disabled={disabledBtn}
          type="submit"
        >
          Submit
        </button>

        <GoogleButton
          header="Have an account already?"
          action="signup"
          display="Signin"
          path="/auth/signin"
        />
      </form>
    </>
  );
};

export default ForgotPassword;
