import { User } from "firebase/auth";

export interface PostInteractionsProps {
  caption: string | null;
  name: User["uid"];
}
