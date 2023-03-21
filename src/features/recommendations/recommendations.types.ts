import { User } from "firebase/auth";

export interface FollowUserTypes {
  displayName: string;
  event: any;
  uid: User["uid"];
}
// dynamic boolean values
export interface LoadingStatesTypes {
  [key: string]: boolean;
}
