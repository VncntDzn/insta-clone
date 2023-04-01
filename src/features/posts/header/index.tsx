import Avatar from "common/avatar";
import { RxDotsHorizontal } from "react-icons/rx";
import { useAppSelector } from "store/hooks";
import styles from "./header.module.scss";
import { PostHeaderProps } from "./post.header.types";

const PostsHeader = ({ name, userPhoto, uid, location }: PostHeaderProps) => {
  return (
    <section className={styles.root}>
      <div className={styles.user}>
        <div className={styles.avatar}>
          <Avatar height={40} width={40} uid={uid} />
        </div>
        <div className={styles.name}>
          <strong>{name}</strong>
          <small>{location ?? ""}</small>
        </div>
        <RxDotsHorizontal className={styles.dotIcon} size={20} />
      </div>
    </section>
  );
};

export default PostsHeader;
