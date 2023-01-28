import { useRouter } from "next/router";
import routes from "../routes";
import styles from "./sidebar.module.scss";

import { Dialog } from "common";
import Create from "features/create";
import { useMediaQuery, useToggle } from "hooks";
import { RiInstagramLine, RiMenuLine } from "react-icons/ri";

const Sidebar = () => {
  const router = useRouter();
  const matches = useMediaQuery("(max-width: 820px)");
  const [toggle, setToggle] = useToggle();
  const handleCheckIfActive = (path: string) => {
    return router.pathname === path;
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleNavigation = (path: string) => {
    if (path !== "/new-post") {
      router.push(path);
    } else {
      handleToggle();
    }
  };
  return (
    <aside className={styles.root}>
      {toggle && (
        <Dialog isOpen={toggle} onClose={handleToggle}>
          <Create />
        </Dialog>
      )}
      {matches ? (
        <div className={styles.logo}>
          <RiInstagramLine size={30} />
        </div>
      ) : (
        <h1 className={styles.title}>Instaclone</h1>
      )}
      <div className={styles.linksContainer}>
        {routes.map(({ path, name, inactive_icon, active_icon }, i) => (
          <div
            tabIndex={i}
            onClick={() => handleNavigation(path)}
            className={styles.links}
            key={name}
          >
            <span>
              {handleCheckIfActive(path) ? active_icon : inactive_icon}
            </span>
            <span>{name}</span>
          </div>
        ))}
      </div>

      <div className={styles.settings}>
        <RiMenuLine size={30} />
        <p>More</p>
      </div>
    </aside>
  );
};

export default Sidebar;
