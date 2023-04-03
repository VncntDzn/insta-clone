import Avatar from "common/avatar";
import {
  RiBookmarkLine,
  RiChat3Line,
  RiHeartLine,
  RiSendPlaneLine,
} from "react-icons/ri";
import styles from "./interaction.module.scss";
import { PostInteractionsProps } from "./post.interaction.types";

const Details = ({ caption, name }: PostInteractionsProps) => {
  if (false) {
    return (
      <div className={styles.likedBy}>
        <div className={styles.avatar}>
          <Avatar />
          <Avatar />
          <Avatar />
        </div>
        <small>Liked by ...</small>
        <small>FEBRUARY 22</small>
      </div>
    );
  } else {
    return (
      <div className={styles.details}>
        <b className={styles.numOfLikes}>3,802 likes</b>
        <span>
          <small className={styles.username}>{name}</small>
          &nbsp;
          {/* TODO: If the caption is too long then add ellipsis here */}
          <small>{caption ?? ""}</small>
        </span>
      </div>
    );
  }
};
const PostInteractions = ({ caption, name }: PostInteractionsProps) => {
  return (
    <section className={styles.root}>
      <div className={styles.icons}>
        <RiHeartLine size={30} />
        <RiChat3Line size={30} />
        <RiSendPlaneLine size={30} />
        <RiBookmarkLine size={30} />
      </div>
      <Details caption={caption} name={name} />
    </section>
  );
};

export default PostInteractions;
