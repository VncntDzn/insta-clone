import { User } from "firebase/auth";

export interface AvatarProps {
  height: number | undefined;
  width: number | undefined;
  uid: User["uid"];
  picture: any;
}
