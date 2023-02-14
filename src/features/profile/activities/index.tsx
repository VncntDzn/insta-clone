import { memo } from "react";
import styles from "./activities.module.scss";

const COUNTS = [
  { total: 50, type: "posts" },
  { total: 137, type: "followers" },
  { total: 141, type: "following" },
];
const Activities = () => {
  return (
    <div className={styles.root}>
      {COUNTS.map(({ total, type }) => (
        <div className={styles.container} key={type}>
          <strong>{total}</strong>
          <small className={styles.type}>{type}</small>
        </div>
      ))}
    </div>
  );
};

export default memo(Activities);
