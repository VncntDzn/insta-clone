import Link from "next/link";
import { useRouter } from "next/router";
import { isActiveRoute } from "utils";
import routes from "../routes";
import styles from "./navigation.module.scss";

const MobileNavigation = () => {
  const router = useRouter();

  return (
    <section className={styles.root}>
      {routes
        .filter(({ name }) => name !== "Notifications" && name !== "Search")
        .map((route) => (
          <Link className={styles.link} href={route.path} key={route.name}>
            {isActiveRoute({ router, path: route.path }) ? (
              <route.activeIcon size={30} />
            ) : (
              <route.inactiveIcon size={30} />
            )}
          </Link>
        ))}
    </section>
  );
};

export default MobileNavigation;
