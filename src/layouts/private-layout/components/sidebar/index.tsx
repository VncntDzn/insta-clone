import { useRouter } from "next/router";
import routes from "../routes";
import styles from "./sidebar.module.scss";

import { Dialog } from "common";
import Create from "features/create";
import { useMediaQuery, useToggle } from "hooks";
import { RiInstagramLine, RiMenuLine } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { OPEN_MODAL } from "store/slices/modalSlice";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.modal.isOpen);
  const router = useRouter();
  const matches = useMediaQuery("(max-width: 820px)");

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
