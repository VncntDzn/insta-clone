import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
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
          <span>Forgot Your Password?</span>
        </div>
        <button className={styles.signinBtn}>Signin</button>
        <p>
          Don&apos;t have an account?{" "}
          <span className={styles.signupBtn}>Sign up now</span>
        </p>
        <div className={styles.hrContainer}>
          <hr className={styles.hr} />
          <span>or</span>
          <hr className={styles.hr} />
        </div>
        <div className={styles.containerBtn}>
          <button className={styles.googleBtn}>
            <FcGoogle size={20} />
            Signin with Google
          </button>
        </div>
      </form>
    </section>
  );
};

export default Signin;
