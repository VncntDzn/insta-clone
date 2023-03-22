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
  const currentUser = useAppSelector((state) => state.user.user);
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
          <Avatar height={40} width={40} uid={currentUser!.uid} />
          <div className={styles.headerDetails}>
            <strong>{currentUser?.displayName}</strong>
            <span role="button" className={styles.viewProfile}>
              View Profile
            </span>
          </div>
        </div>

        {routes.map((route, i) => (
          <div
            tabIndex={i}
            onClick={() => handleNavigation(route.path)}
            className={styles.links}
            key={route.name}
            style={{ display: `${route.name === "Profile" ? "none" : "flex"}` }}
          >
            <span>
              {handleCheckIfActive(route.path) ? (
                <route.activeIcon size={25} />
              ) : (
                <route.inactiveIcon size={25} />
              )}
            </span>
            <span className={styles.routeName}>{route.name}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
