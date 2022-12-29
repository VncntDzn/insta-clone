import { PageTitle } from "common";
import { ChildrenType } from "types";
import Advertisement from "../advertisement";
import styles from "./auth-layout.module.scss";

interface AuthLayoutProps extends ChildrenType {
  title: string;
}
const AuthLayout = ({ title, children }: AuthLayoutProps) => {
  return (
    <>
      <PageTitle title={title} />
      <section className={styles.root}>
        <div className={styles.advertisement}>
          <Advertisement />
        </div>
        <div className={styles.form}>{children}</div>
      </section>
    </>
  );
};

export default AuthLayout;
