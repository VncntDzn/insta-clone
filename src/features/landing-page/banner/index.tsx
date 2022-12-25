import styles from "./banner.module.scss";
import Poster from "./components/poster";
import Slogan from "./components/slogan";
const Banner = () => {
  return (
    <section className={styles.root}>
      <div className={styles.slogan}>
        <Slogan />
      </div>
      <div className={styles.banner}>
        <Poster />
      </div>
    </section>
  );
};

export default Banner;
