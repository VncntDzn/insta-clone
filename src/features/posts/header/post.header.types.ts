import { User } from "firebase/auth";

export interface PostHeaderProps {
  name: User["displayName"];
  userPhoto: User["photoURL"];
  uid: User["uid"];
  location: string | null;
}
