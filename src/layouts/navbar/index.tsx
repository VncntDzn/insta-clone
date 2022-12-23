import Link from "next/link";
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
          <Link className={styles.link} href={path} key={name}>
            {name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
