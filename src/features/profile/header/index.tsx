import { Avatar } from "common";
import { useMediaQuery } from "hooks";
import { RiSettings3Line } from "react-icons/ri";
import styles from "./header.module.scss";
const Header = () => {
  const matchMedia = useMediaQuery("(min-width: 768px)");

  return (
    <div className={styles.root}>
      <Avatar height={matchMedia ? 150 : 60} width={matchMedia ? 150 : 60} />
      <div className={styles.details}>
        <div className={styles.name}>
          <span style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <strong>vincent.tsx </strong>
            <RiSettings3Line className={styles.settings} size={25} />
          </span>
          <small className={styles.editButton}>Edit Profile</small>
        </div>
        <div className={styles.activities}>
          <p>
            <b>50</b> posts
          </p>
          <p>
            <b>137</b> followers
          </p>
          <p>
            <b>141</b> following
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
