import styles from "./advertisement.module.scss";
const Advertisement = () => {
  return (
    <div className={styles.root}>
      <video className={styles.video} autoPlay muted loop id="myVideo">
        <source src="/advertisement/friends.mp4" type="video/mp4" />
      </video>
      <div className={styles.reviews}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>
  );
};

export default Advertisement;
