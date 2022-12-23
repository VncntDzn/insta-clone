import links from "./data";
import styles from "./navbar.module.scss";
const Navbar = () => {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <p>Insta</p>
      </div>
      <div className={styles.links}>
        {links.map(({ name }) => (
          <p key={name}>{name}</p>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
