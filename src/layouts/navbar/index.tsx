import Link from "next/link";
import ActiveLink from "./components/active-link";
import links from "./data";
import styles from "./navbar.module.scss";
const Navbar = () => {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <p>Insta</p>
      </div>
      <nav className={styles.links}>
        {links.map(({ name, path }) => (
          <ActiveLink name={name} href={path} key={name} />
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
