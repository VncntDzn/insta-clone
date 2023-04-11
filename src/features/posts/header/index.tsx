import Avatar from "common/avatar";
import { RxDotsHorizontal } from "react-icons/rx";
import styles from "./header.module.scss";
import { PostHeaderProps } from "./post.header.types";

const PostsHeader = ({ name, userPhoto, uid, location }: PostHeaderProps) => {
  return (
    <section className={styles.root}>
      <div className={styles.avatar}>
        <Avatar height={30} width={30} uid={uid} />
      </div>
      <div className={styles.name}>
        <strong>{name}</strong>
        <p>{location ?? ""}</p>
      </div>
      <RxDotsHorizontal size={20} />
    </section>
  );
};

export default PostsHeader;
