import React, { Fragment } from "react";
import styles from "./recommendations.module.scss";
import { Avatar } from "common";
const Recommendations = () => {
  return (
    <div className={styles.root}>
      <p className={styles.textHeader}>Suggestions for you</p>
      <div className={styles.container}>
        {[1, 2, 3, 5, 6, 1, 2, 3132, 1, 23, 123, 123, 123].map((i) => (
          <div className={styles.users} key={i}>
            <div className={styles.avatarContainer}>
              <Avatar height={50} width={50} />
              <div className={styles.name}>
                <strong>vincent.tsx</strong>
                <small>Vincent Dizon</small>
              </div>
            </div>
            <div>
              <button className={styles.followBtn}>Follow</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
