import { User } from "firebase/auth";

export interface CustomAvatarProps {
  height: number | undefined;
  width: number | undefined;
  uid: User["uid"];
  picture: any;
}
