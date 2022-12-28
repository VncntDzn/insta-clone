import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import Link from "next/link";
import styles from "./google.module.scss";
interface GoogleButtonProps {
  header: string;
  action: "signup" | "signin";
  display: string;
  path: string;
}
const GoogleButton = ({ header, action, display, path }: GoogleButtonProps) => {
  return (
    <>
      <p>
        {header} &nbsp;
        <Link className={styles.redirectBtn} href={path}>
          <span>{display} now</span>
        </Link>
      </p>
      <div className={styles.hrContainer}>
        <hr className={styles.hr} />
        <span>or</span>
        <hr className={styles.hr} />
      </div>
      <div className={styles.containerBtn}>
        <button className={styles.googleBtn}>
          <FcGoogle size={20} />
          {display} with Google
        </button>
      </div>
    </>
  );
};

export default GoogleButton;
