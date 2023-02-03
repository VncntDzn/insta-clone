import { Avatar } from "common";
import { RiSettings3Line } from "react-icons/ri";
import styles from "./header.module.scss";
const Header = () => {
  return (
    <div className={styles.root}>
      <Avatar height={60} width={60} />
      <div className={styles.name}>
        <strong>
          vincent.tsx <RiSettings3Line className={styles.settings} size={25} />
        </strong>
        <small>Edit Profile</small>
      </div>
    </div>
  );
};

export default Header;
