import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import Link from "next/link";
import GoogleButton from "../google";
import styles from "./signup.module.scss";
const Signup = () => {
  return (
    <section className={styles.root}>
      <h1>Signup</h1>
      <form className={styles.form}>
        <div className={styles.inputContainer}>
          <label htmlFor="Email">Email</label>
          <input className={styles.input} placeholder="email" />
        </div>
        <div className={styles.credentials}>
          <div className={styles.inputContainer}>
            <label htmlFor="First Name">First Name</label>
            <input className={styles.input} placeholder="First Name" />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="Confirm Password">Last Name</label>
            <input className={styles.input} placeholder="Last Name" />
          </div>
        </div>
        <div className={styles.credentials}>
          <div className={styles.inputContainer}>
            <label htmlFor="Password">Password</label>
            <input
              className={styles.input}
              placeholder="Password"
              type="password"
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="Confirm Password">Confirm Password</label>
            <input
              className={styles.input}
              placeholder="Confirm Password"
              type="password"
            />
          </div>
        </div>
        <button className={styles.signupBtn}>Signup</button>

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
