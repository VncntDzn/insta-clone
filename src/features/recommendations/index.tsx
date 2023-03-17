import { Avatar } from "common";
import { firestore } from "db/client";
import {
  addDoc,
  collection,
  DocumentData,
  getDocs,
  query,
  where
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAppSelector } from "store/hooks";
import styles from "./recommendations.module.scss";
const Recommendations = () => {
  const currentUser = useAppSelector((state) => state.user.user);
  const [users, setUsers] = useState<DocumentData[]>([]);

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
      const q = query(
        collection(firestore, `following/${currentUser!.uid}/users`)
      );
      const querySnapshot = await getDocs(q);
      const followedUsers = querySnapshot.docs.map((doc) => doc.data());

      return followedUsers;
    } catch (error) {
      console.log(error);
    }
  };

  const handleFollowUser = async ({ displayName, uid }) => {
    try {
      /* TODO: 
      Add animation like fade in or fade out if successfully followed.
      
      */
      await addDoc(
        collection(firestore, `following/${currentUser!.uid}/users`),
        {
          uid,
          displayName,
        }
      );
      toast.success("Followed!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className={styles.root}>
      {users.map(({ displayName, uid, fullName }) => (
        <div className={styles.users} key={uid}>
          <div className={styles.avatarContainer}>
            <Avatar height={50} width={50} />
            <div className={styles.name}>
              <strong>{displayName}</strong>
              <small>{fullName || ""}</small>
            </div>
          </div>
          <div>
            <button
              className={styles.followBtn}
              onClick={() => handleFollowUser({ displayName, uid })}
            >
              Follow
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommendations;
