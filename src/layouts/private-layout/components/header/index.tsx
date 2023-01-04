import styles from "./header.module.scss";
import { RiHeartLine } from "@react-icons/all-files/ri/RiHeartLine";
import Stories from "./stories";
const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <p>Insta</p>
        </div>
        <div className={styles.search}>
          <input className={styles.input} placeholder="Search" />
        </div>
        <div className={styles.notifications}>
          <RiHeartLine size={28} />
        </div>
      </div>

      <div className={styles.stories}>
        <Stories />
      </div>
    </div>
  );
};

export default Header;
