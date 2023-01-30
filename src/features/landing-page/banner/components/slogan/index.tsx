import styles from "./slogan.module.scss";
import { DiAndroid, DiApple } from "react-icons/di/";

const Slogan = () => {
  return (
    <>
      <h1 className={styles.slogan}>
        Discover the joy of <br />
        your own <mark>social space.</mark>
      </h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.
      </p>
      <div className={styles.buttons}>
        <button className={styles.androidBtn}>
          <DiAndroid size={20} />
          Download Android
        </button>
        <button className={styles.iosBtn}>
          <DiApple size={20} />
          Download iOS
        </button>
      </div>
    </>
  );
};

export default Slogan;
