import { ChildrenType } from "types";
import Advertisement from "../advertisement";
import styles from "./auth-layout.module.scss";

const AuthLayout = ({ children }: ChildrenType) => {
  return (
    <section className={styles.root}>
      <div className={styles.advertisement}>
        <Advertisement />
      </div>
      <div className={styles.form}>{children}</div>
    </section>
  );
};

export default AuthLayout;
