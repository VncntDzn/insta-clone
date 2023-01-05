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
  firstName: string;
  lastName: string;
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

  /* const handleAddAdditionalDetails = async ({
    docId,
    firstName,
    lastName,
  }: UserDetails) => {
    try {
      await setDoc(doc(firestore, `users/${docId}`), {
        firstName,
        lastName,
        signedDate: serverTimestamp(),
      });
    } catch (error) {
      console.error(error);
    }
  }; */
  const handleSignup = async () => {
    toast.info("Submitting...");
    setIsDisabledBtn(true);
    const { firstName, lastName, email, password } = getValues();
    try {
      const res = await axios.post("/api/user", {
        email,
        password,
      });
      /*  handleAddAdditionalDetails({ docId: res.user.uid, firstName, lastName }); */
      dispatch(SET_CURRENT_USER(res));
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
            label="First Name"
            placeholder="Enter your first name"
            name="firstName"
            control={control}
            errors={errors.firstName}
          />
          <Input
            label="Last Name"
            placeholder="Enter your last name"
            name="lastName"
            control={control}
            errors={errors.lastName}
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
