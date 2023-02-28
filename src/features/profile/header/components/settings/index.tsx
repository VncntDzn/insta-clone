import SETTINGS_ROUTE from "./constants";
import styles from "./settings.module.scss";

const Settings = () => {
  return (
    <div className={styles.root}>
      {SETTINGS_ROUTE.map(({ name, route }) => (
        <small className={styles.item} key={route}>
          {name}
        </small>
      ))}
    </div>
  );
};

export default Settings;
