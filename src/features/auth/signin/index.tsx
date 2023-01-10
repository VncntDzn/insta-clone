import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { Input } from "common";
import { auth } from "db/client";
import {
  inMemoryPersistence,
  setPersistence,
  signInWithEmailAndPassword
} from "firebase/auth";
import { useRouter } from "next/router";
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
  const router = useRouter();
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
      setPersistence(auth, inMemoryPersistence);
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const idToken = await user.getIdToken();
      await axios.post("/api/auth/createSessionCookie", {
        idToken,
      });

      setTimeout(() => {
        router.push("/feed");
      }, 3000);

      dispatch(SET_CURRENT_USER(user));
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
          isForgotPassword
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
