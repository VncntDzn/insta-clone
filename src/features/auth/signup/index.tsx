import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "common";
import { auth, firestore } from "db";
import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
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
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Credentials>({
    resolver: yupResolver(signupSchema),
  });

  const handleAddAdditionalDetails = async ({
    docId,
    firstName,
    lastName,
  }: UserDetails) => {
    try {
      await setDoc(doc(firestore, `users/${docId}`), {
        firstName,
        lastName,
        signedDate: Timestamp.now(),
      });
    } catch (error) {
      console.error(error);
    }
  };
  const handleSignup = async () => {
    toast.info("Submitting...");
    const { firstName, lastName, email, password } = getValues();
    // TODO: If success then add the additional details to firestore
    // NOTE: You can create a user using firebase admin and deploy using nextjs
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      handleAddAdditionalDetails({ docId: res.user.uid, firstName, lastName });
      toast.success("Success...");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <section className={styles.root}>
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
        <button className={styles.signupBtn} type="submit">
          Signup
        </button>

        <GoogleButton
          header="Have an account already?"
          action="signup"
          display="Signin"
          path="/auth/signin"
        />
      </form>
    </section>
  );
};

export default Signup;
