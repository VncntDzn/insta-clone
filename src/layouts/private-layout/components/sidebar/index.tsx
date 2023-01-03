import routes from "./routes";
import styles from "./sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside className={styles.root}>
      <h1 className={styles.title}>Instaclone</h1>
      {routes.map(({ path, name, icon }) => (
        <div className={styles.links} key={name}>
          <span> {icon}</span> <span>{name}</span>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
