import Link from "next/link";
import SETTINGS_ROUTE from "./constants";
import styles from "./settings.module.scss";

const Settings = () => {
  return (
    <div className={styles.root}>
      {SETTINGS_ROUTE.map(({ name, route }) => (
        <Link href={route} className={styles.item} key={route}>
          {name}
        </Link>
      ))}
    </div>
  );
};

export default Settings;
