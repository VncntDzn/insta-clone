import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "common";
import { auth } from "db";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAppDispatch } from "store/hooks";
import { SET_CURRENT_USER } from "store/slices/userSlice";
import GoogleButton from "../google";
import styles from "./signin.module.scss";
import signinSchema from "./signinSchema";

interface Credentials {
  email: string;
  password: string;
}
const Signin = () => {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Credentials>({
    resolver: yupResolver(signinSchema),
  });
  const [disabledBtn, setIsDisabledBtn] = useState(false);

  const handleSignin = async () => {
    toast.info("Submitting...");
    setIsDisabledBtn(true);
    const { email, password } = getValues();
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      dispatch(SET_CURRENT_USER(res));
      toast.success("Logging you in...");
    } catch (error: unknown) {
      toast.error((error as Error).message);
    } finally {
      setIsDisabledBtn(false);
    }
  };

  return (
    <>
      <h1>Signin</h1>
      <form className={styles.form} onSubmit={handleSubmit(handleSignin)}>
        <Input
          label="Email"
          name="email"
          placeholder="Enter your email address"
          control={control}
          errors={errors.email}
        />

        <Input
          label="Password"
          placeholder="Enter your password"
          name="password"
          control={control}
          errors={errors.password}
          type="password"
        />
        <button
          className={`${!disabledBtn ? styles.signinBtn : styles.disabledBtn}`}
          disabled={disabledBtn}
          type="submit"
        >
          Signin
        </button>

        <GoogleButton
          header="Don't have an account?"
          action="signup"
          display="Signup"
          path="/auth/signup"
        />
      </form>
    </>
  );
};

export default Signin;
