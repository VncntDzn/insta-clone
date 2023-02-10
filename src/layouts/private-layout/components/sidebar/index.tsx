import { useRouter } from "next/router";
import routes from "../routes";
import styles from "./sidebar.module.scss";

import { Avatar, Dialog } from "common";
import Create from "features/create";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { OPEN_MODAL } from "store/slices/modalSlice";

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
    if (path !== "/new-post") {
      router.push(path);
    } else {
      handleToggle();
    }
  };
  return (
    <aside className={styles.root}>
      {isModalOpen && (
        <Dialog>
          <Create />
        </Dialog>
      )}

      <div className={styles.linksContainer}>
        <div className={styles.header}>
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
