import Link from "next/link";
import { useRouter } from "next/router";
import routes from "./routes";
import styles from "./sidebar.module.scss";

const Sidebar = () => {
  const router = useRouter();
  return (
    <aside className={styles.root}>
      <h1 className={styles.title}>Instaclone</h1>
      {routes.map(({ path, name, inactive_icon, active_icon }) => (
        <Link href={path} className={styles.links} key={name}>
          <span> {router.pathname === path ? active_icon : inactive_icon}</span>{" "}
          <span>{name}</span>
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
