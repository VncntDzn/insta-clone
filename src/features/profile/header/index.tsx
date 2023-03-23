import { Avatar, Dialog } from "common";
import { firestore } from "db/client";
import { collection, getCountFromServer } from "firebase/firestore";
import { useMediaQuery } from "hooks";
import { memo, useEffect, useState } from "react";
import { RiSettings3Line } from "react-icons/ri";
import { useAppSelector } from "store/hooks";
import Settings from "./components/settings";
import styles from "./header.module.scss";
import { CountsType } from "./header.types";

const Header = () => {
  const currentUser = useAppSelector((state) => state.user.user);
  const matchMedia = useMediaQuery("(min-width: 768px)");
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const [counts, setCounts] = useState<CountsType>([]);

  const toggleSettingsDialog = () => {
    setSettingsOpen(!isSettingsOpen);
  };

  const handleCountFollowing = async () => {
    try {
      const coll = collection(firestore, `following/${currentUser?.uid}/users`);
      const numOfFollowing = await getCountFromServer(coll);
      return numOfFollowing.data().count;
    } catch (error) {
      console.error(error);
    }
  };

  const handleCountPosts = async () => {
    try {
      const coll = collection(firestore, `posts/${currentUser?.uid}/post`);
      const numOfPosts = await getCountFromServer(coll);

      return numOfPosts.data().count;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await Promise.all([
          handleCountFollowing(),
          handleCountPosts(),
        ]);
        setCounts({
          following: res[0],
          followers: 0,
          posts: res[1],
        });
        console.log(res);
      } catch (error) {}
    })();
  }, []);
  return (
    <>
      <Dialog isOpen={isSettingsOpen} onClose={toggleSettingsDialog}>
        <Settings />
      </Dialog>
      <div className={styles.root}>
        <Avatar
          uid={currentUser!.uid}
          height={matchMedia ? 150 : 60}
          width={matchMedia ? 150 : 60}
        />
        <div className={styles.details}>
          <div className={styles.name}>
            <span
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <strong>{currentUser?.displayName}</strong>
              <RiSettings3Line
                className={styles.settings}
                onClick={toggleSettingsDialog}
                size={25}
              />
            </span>
            <small className={styles.editButton} onClick={toggleSettingsDialog}>
              Edit Profile
            </small>
          </div>
          <div className={styles.activities}>
            {Object.entries(counts).map(([key, value]: any) => (
              <p key={key}>
                <span> {key} &nbsp; </span>
                <b>{value}</b>
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
