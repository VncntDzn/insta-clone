import { auth } from "db";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";

const useCurrentUser = () => {
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });
    return unsubscribe;
  }, []);
  return { user };
};
export default useCurrentUser;
