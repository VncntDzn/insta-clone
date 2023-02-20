import {
  RiBookmarkLine,
  RiChat3Line,
  RiHeartLine,
  RiSendPlaneLine,
} from "react-icons/ri";
import styles from "./interaction.module.scss";
const Interaction = () => {
  return (
    <section className={styles.root}>
      <div className={styles.interactions}>
        <RiHeartLine size={30} />
        <RiChat3Line size={30} />
        <RiSendPlaneLine size={30} />
      </div>
      <RiBookmarkLine size={30} />
    </section>
  );
};

export default Interaction;
