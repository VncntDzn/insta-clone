import styles from "./banner.module.scss";
import Poster from "./components/poster";
import Slogan from "./components/slogan";
const Banner = () => {
  return (
    <section className={styles.root}>
      <div>
        <Slogan />
      </div>
      <div>
        <Poster />
      </div>
    </section>
  );
};

export default Banner;
