import Link from "next/link";
import { useRouter } from "next/router";
import routes from "../routes";
import styles from "./sidebar.module.scss";

import { RiInstagramLine } from "@react-icons/all-files/ri/RiInstagramLine";
import { useMediaQuery } from "hooks";
import Image from "next/image";
import Pic from "../../assets/pic.jpg";
import { RiMenuLine } from "@react-icons/all-files/ri/RiMenuLine";
const Sidebar = () => {
  const router = useRouter();
  const matches = useMediaQuery("(max-width: 820px)");
  const handleCheckIfActive = (path: string) => {
    return router.pathname === path;
  };
  return (
    <aside className={styles.root}>
      {matches ? (
        <div className={styles.logo}>
          <RiInstagramLine size={30} />
        </div>
      ) : (
        <h1 className={styles.title}>Instaclone</h1>
      )}
      <div className={styles.linksContainer}>
        {routes.map(({ path, name, inactive_icon, active_icon }) => (
          <Link href={path} className={styles.links} key={name}>
            <span>
              {handleCheckIfActive(path) ? active_icon : inactive_icon}
            </span>
            <span
              className={`${
                handleCheckIfActive(path)
                  ? `${styles.active}`
                  : ` ${styles.inactive}`
              } `}
            >
              {name}
            </span>
          </Link>
        ))}
        <div className={styles.profile}>
          <Image
            className={styles.avatar}
            src={Pic}
            width={30}
            height={30}
            alt="Profile"
          />
          <p>Profile</p>
        </div>
      </div>

      <div className={styles.settings}>
        <RiMenuLine size={30} />
        <p>More</p>
      </div>
    </aside>
  );
};

export default Sidebar;
