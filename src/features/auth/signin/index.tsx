import Link from "next/link";
import GoogleButton from "../google";
import styles from "./signin.module.scss";
const Signin = () => {
  return (
    <section className={styles.root}>
      <h1>Signin</h1>
      <form className={styles.form}>
        <div>
          <label htmlFor="Email">Email</label>
          <input className={styles.input} placeholder="email" />
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <input className={styles.input} placeholder="Password" />
        </div>
        <div className={styles.options}>
          <div>
            <input type="checkbox" name="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <Link href="/auth/forgot-password">Forgot Your Password?</Link>
        </div>
        <button className={styles.signinBtn}>Signin</button>

        <GoogleButton
          header="Don't have an account?"
          action="signin"
          display="Signup"
          path="/auth/signup"
        />
      </form>
    </section>
  );
};

export default Signin;
