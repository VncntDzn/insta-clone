import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { Input } from "common";
import { UserCredential } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAppDispatch } from "store/hooks";
import { SET_CURRENT_USER } from "store/slices/userSlice";
import GoogleButton from "../google";
import styles from "./signup.module.scss";
import signupSchema from "./signupSchema";
interface UserDetails {
  docId?: UserCredential | string;
  displayName: string;
}

interface Credentials extends UserDetails {
  email: string;
  password: string;
  passwordConfirmation: string;
}
const Signup = () => {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Credentials>({
    resolver: yupResolver(signupSchema),
  });
  const [disabledBtn, setIsDisabledBtn] = useState(false);

  const handleSignup = async () => {
    toast.info("Submitting...");
    setIsDisabledBtn(true);
    const { displayName, email, password } = getValues();
    try {
      const { data } = await axios.post("/api/auth/signup", {
        email,
        password,
        displayName,
      });

      dispatch(SET_CURRENT_USER(data.result));
      toast.success("Success...");
    } catch (error: any) {
      toast.error(error?.response?.data?.error?.message);
    } finally {
      setIsDisabledBtn(false);
    }
  };

  return (
    <>
      <h1>Signup</h1>
      <form className={styles.form} onSubmit={handleSubmit(handleSignup)}>
        <Input
          label="Email"
          name="email"
          placeholder="Enter your email address"
          control={control}
          errors={errors.email}
        />

        <div className={styles.credentials}>
          <Input
            label="Username"
            placeholder="Enter your username"
            name="displayName"
            control={control}
            errors={errors.displayName}
          />
        </div>
        <div className={styles.credentials}>
          <Input
            label="Password"
            placeholder="Enter your password"
            name="password"
            control={control}
            errors={errors.password}
            type="password"
          />
          <Input
            label="Confirm Password"
            placeholder="Enter your confirmation password"
            name="passwordConfirmation"
            control={control}
            errors={errors.passwordConfirmation}
            type="password"
          />
        </div>
        <button
          className={`${!disabledBtn ? styles.signupBtn : styles.disabledBtn}`}
          disabled={disabledBtn}
          type="submit"
        >
          Signup
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

export default Signup;
