import Avatar from "common/avatar";
import { RxDotsHorizontal } from "react-icons/rx";
import styles from "./header.module.scss";

const PostsHeader = () => {
  return (
    <section className={styles.root}>
      <div className={styles.user}>
        <div className={styles.avatar}>
          <Avatar height={40} width={40} />
        </div>
        <div className={styles.name}>
          <strong>vincent.tsx</strong>
          <small>Location...</small>
        </div>
        <RxDotsHorizontal className={styles.dotIcon} size={20} />
      </div>
    </section>
  );
};

export default PostsHeader;
