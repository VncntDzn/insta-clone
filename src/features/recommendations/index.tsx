import React, { Fragment, useCallback, useEffect, useState } from "react";
import styles from "./recommendations.module.scss";
import { Avatar } from "common";
import { toast } from "react-toastify";
import { firestore } from "db/client";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useAppSelector } from "store/hooks";
const Recommendations = () => {
  const currentUser = useAppSelector((state) => state.user.user);
  const [users, setUsers] = useState([]);
  const fetchUsers = useCallback(async () => {
    try {
      const result: any = [];
      const querySnapshot = await getDocs(collection(firestore, `users`));

      querySnapshot.forEach((doc) => {
        // remove current user from adding to users array
        if (doc.id !== currentUser?.uid) result.push(doc.data());
      });

      setUsers(result);
    } catch (error) {
      toast.error("Error fetching users");
    }
  }, [currentUser?.uid]);

  const handleFollowUser = async ({ uid }) => {
    try {
      await addDoc(
        collection(firestore, `following/${currentUser!.uid}/users`),
        {
          uid,
        }
      );
      toast.success("Followed!");
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  return (
    <div className={styles.root}>
      <p className={styles.textHeader}>Suggestions for you</p>
      <div className={styles.container}>
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
                onClick={() => handleFollowUser({ uid })}
              >
                Follow
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
