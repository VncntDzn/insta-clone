import SETTINGS_ROUTE from "features/profile/header/components/settings/constants";
import { ChildrenType } from "types";
import styles from "./account-layout.module.scss";
const AccountLayout = ({ children }: ChildrenType) => {
  return (
    <div className={styles.root}>
      <aside className={styles.sidebar}>
        {SETTINGS_ROUTE.map(({ name, route }) => (
          <small className={styles.routeName} key={route}>{name}</small>
        ))}
      </aside>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
 
export default AccountLayout;
