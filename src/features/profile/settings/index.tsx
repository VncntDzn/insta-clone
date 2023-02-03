import styles from "./settings.module.scss";
import { RiSettings3Line, RiUserAddLine } from "react-icons/ri";
const Settings = () => {
  return (
    <div className={styles.root}>
      <RiSettings3Line size={25} />
      <strong>vincent.tsx</strong>
      <RiUserAddLine size={25} />
    </div>
  );
};

export default Settings;
