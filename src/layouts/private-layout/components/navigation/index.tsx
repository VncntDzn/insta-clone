import Link from "next/link";
import { useRouter } from "next/router";
import routes from "../routes";
import styles from "./navigation.module.scss";

const MobileNavigation = () => {
  const router = useRouter();

  const handleCheckIfSame = (name: string) => {
    return name === "Notifications" || name === "Search";
  };
  return (
    <section className={styles.root}>
      {routes.map(({ name, path, active_icon, inactive_icon }) => (
        <Link
          className={`${
            handleCheckIfSame(name) ? styles.hidden : styles.visible
          }`}
          href={path}
          key={name}
        >
          {router.pathname === path ? <>{active_icon}</> : <>{inactive_icon}</>}
        </Link>
      ))}
    </section>
  );
};

export default MobileNavigation;
