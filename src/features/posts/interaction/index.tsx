import Avatar from "common/avatar";
import {
  RiBookmarkLine,
  RiChat3Line,
  RiHeartLine,
  RiSendPlaneLine,
} from "react-icons/ri";
import styles from "./interaction.module.scss";
const Interaction = () => {
  const renderDetails = () => {
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
            <small className={styles.username}>username</small>
            &nbsp;
            <small>Caption here...</small>
          </span>
        </div>
      );
    }
  };
  return (
    <section className={styles.root}>
      <div className={styles.icons}>
        <div className={styles.interactions}>
          <RiHeartLine size={30} />
          <RiChat3Line size={30} />
          <RiSendPlaneLine size={30} />
        </div>
        <RiBookmarkLine size={30} />
      </div>
      {renderDetails()}
    </section>
  );
};

export default Interaction;
