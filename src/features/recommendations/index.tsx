import { Avatar } from "common";
import { firestore } from "db/client";
import {
  addDoc,
  collection,
  DocumentData,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { motion, useAnimate } from "framer-motion";
import { memo, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useAppSelector } from "store/hooks";
import styles from "./recommendations.module.scss";
import { FollowUserTypes, LoadingStatesTypes } from "./recommendations.types";

const Recommendations = () => {
  const currentUser = useAppSelector((state) => state.user.user);
  const [users, setUsers] = useState<DocumentData[]>([]);
  const [isLoading, setLoading] = useState<LoadingStatesTypes>({});
  const [scope, animate] = useAnimate();

  const fetchUsers = async () => {
    try {
      const usersQuery = query(
        collection(firestore, "users"),
        where("uid", "!=", currentUser?.uid)
      );
      const querySnapshot = await getDocs(usersQuery);
      const allUsers = querySnapshot.docs.map((doc) => doc.data());

      const followedUsers = await fetchRecommendedUsers(); // retrieve the list of followed users

      const nonFollowedUsers = allUsers.filter(
        (user) =>
          !followedUsers!.find((followedUser) => followedUser.uid === user.uid)
      ); // filter out the users that are already being followed

      setUsers(nonFollowedUsers);
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  const fetchRecommendedUsers = async () => {
    try {
      const recommendedUsersQuery = query(
        collection(firestore, `following/${currentUser!.uid}/users`)
      );
      const querySnapshot = await getDocs(recommendedUsersQuery);
      const followedUsers = querySnapshot.docs.map((doc) => doc.data());

      return followedUsers;
    } catch (error) {
      console.error(error);
    }
  };

  const handleFollowUser = async ({
    event,
    displayName,
    uid,
  }: FollowUserTypes) => {
    const target = event.target.parentNode.parentNode; // get a reference to the parent div element
    setLoading((prevState) => ({
      ...prevState,
      [uid]: true, // set loading state for this user's button to true
    }));
    console.log(target);
    try {
      /*    await addDoc(
        collection(firestore, `following/${currentUser!.uid}/users`),
        {
          uid,
          displayName,
        }
      ); */

      setTimeout(() => {
        animate(
          target, // target only the clicked element
          {
            display: "none",
          },
          {
            ease: "easeInOut",
          }
        );

        toast.success("Followed!");
      }, 1300);
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setTimeout(
        () =>
          setLoading((prevState) => ({
            ...prevState,
            [uid]: false, // set loading state for this user's button to false
          })),
        1000
      );
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <motion.div initial={false} ref={scope} className={styles.root}>
      {users.map(({ displayName, uid }) => (
        <div className={`${styles.users} ${uid}`} key={uid}>
          <div className={styles.avatarContainer}>
            <Avatar height={50} width={50} />
            <div className={styles.name}>
              <strong>{displayName}</strong>
            </div>
          </div>
          <button
            className={`${
              isLoading[uid] ? styles.disabledBtn : styles.followBtn
            }`}
            onClick={(event) => handleFollowUser({ event, displayName, uid })}
            disabled={isLoading[uid]}
          >
            {isLoading[uid] ? <ClipLoader size={15} /> : <span>Follow</span>}
          </button>
        </div>
      ))}
    </motion.div>
  );
};

export default memo(Recommendations);
