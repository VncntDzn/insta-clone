import SETTINGS_ROUTE from "features/profile/header/components/settings/constants";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChildrenType } from "types";
import styles from "./account-layout.module.scss";
const AccountLayout = ({ children }: ChildrenType) => {
  const router = useRouter();

  const handleCheckIfActive = (path: string) => {
    return router.pathname === path;
  };

  return (
    <div className={styles.root}>
      <aside className={styles.sidebar}>
        {SETTINGS_ROUTE.map(({ name, route }) => (
          <Link href={route}
            style={{
              borderLeft: `${
                handleCheckIfActive(route) ? "2px solid #000000" : ""
              } `,
            }}
            className={styles.routeName}
            key={route}
          >
            {name}
          </Link>
        ))}
      </aside>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default AccountLayout;
