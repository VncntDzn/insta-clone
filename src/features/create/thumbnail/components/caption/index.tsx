import { Avatar } from "common";
import styles from "./caption.module.scss";

const Caption = () => {
  return (
    <div className={styles.root}>
      <Avatar />
      <textarea
        autoComplete="off"
        aria-label="Write a caption..."
        placeholder="Write a caption..."
        className={styles.textArea}
      />
    </div>
  );
};

export default Caption;
