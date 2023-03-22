import Avatar from "common/avatar";
import { RxDotsHorizontal } from "react-icons/rx";
import { useAppSelector } from "store/hooks";
import styles from "./header.module.scss";

const PostsHeader = () => {
  const currentUser = useAppSelector((state) => state.user.user);
  return (
    <section className={styles.root}>
      <div className={styles.user}>
        <div className={styles.avatar}>
          <Avatar height={40} width={40} uid={currentUser!.uid} />
        </div>
        <div className={styles.name}>
          <strong>{currentUser?.displayName}</strong>
          <small>Location...</small>
        </div>
        <RxDotsHorizontal className={styles.dotIcon} size={20} />
      </div>
    </section>
  );
};

export default PostsHeader;
