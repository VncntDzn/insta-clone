import Avatar from "common/avatar";
import {
  RiBookmarkLine,
  RiChat3Line,
  RiHeartLine,
  RiSendPlaneLine,
} from "react-icons/ri";
import styles from "./interaction.module.scss";
const Interaction = () => {
  return (
    <section>
      <div className={styles.icons}>
        <div className={styles.interactions}>
          <RiHeartLine size={30} />
          <RiChat3Line size={30} />
          <RiSendPlaneLine size={30} />
        </div>
        <RiBookmarkLine size={30} />
      </div>
      <div className={styles.likedBy}>
        <div className={styles.avatar}>
          <Avatar />
          <Avatar />
          <Avatar />
        </div>
        <small>Liked by ...</small>
      </div>
      <small>FEBRUARY 22</small>
    </section>
  );
};

export default Interaction;
