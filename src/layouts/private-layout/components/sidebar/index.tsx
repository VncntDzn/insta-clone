import { useRouter } from "next/router";
import routes from "../routes";
import styles from "./sidebar.module.scss";

import { Avatar, Dialog } from "common";
import Create from "features/create";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { OPEN_MODAL } from "store/slices/modalSlice";
import ROUTE_NAME from "../routes/constants";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.modal.isOpen);
  const router = useRouter();

  const handleCheckIfActive = (path: string) => {
    return router.pathname === path;
  };

  const handleToggle = () => {
    dispatch(OPEN_MODAL({ isOpen: false, modalType: "" }));
  };
  const handleNavigation = (path: string) => {
    if (path !== ROUTE_NAME.NEW_POST) {
      router.push(path);
    } else {
      handleToggle();
    }
  };
  return (
    <aside className={styles.root}>
      <Dialog isOpen={isModalOpen} onClose={handleToggle}>
        <Create />
      </Dialog>

      <div className={styles.linksContainer}>
        <div
          className={styles.header}
          onClick={() => handleNavigation("profile")}
        >
          <Avatar height={40} width={40} />
          <div className={styles.headerDetails}>
            <strong>vincent.tsx</strong>
            <span role="button" className={styles.viewProfile}>
              View Profile
            </span>
          </div>
        </div>

        {routes.map(({ path, name, inactive_icon, active_icon }, i) => (
          <div
            tabIndex={i}
            onClick={() => handleNavigation(path)}
            className={styles.links}
            key={name}
            style={{ display: `${name === "Profile" ? "none" : "flex"}` }}
          >
            <span>
              {handleCheckIfActive(path) ? active_icon : inactive_icon}
            </span>
            <span className={styles.routeName}>{name}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
