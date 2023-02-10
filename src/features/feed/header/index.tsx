import { RiHeartLine, RiInstagramLine } from "react-icons/ri";
import styles from "./header.module.scss";
const FeedHeader = () => {
  return (
    <div className={styles.root}>
      <RiInstagramLine className={styles.logo} size={30} />
      <input placeholder="Search" className={styles.search} />
      <div className={styles.notifications}>
        <RiHeartLine size={30} />
      </div>
    </div>
  );
};

export default FeedHeader;
