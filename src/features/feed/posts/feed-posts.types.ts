import { User } from "firebase/auth";

interface PostType {
  displayName: User["displayName"];
  uid: User["uid"];
  userPhoto: string;
  location: string;
}
export interface FeedPostsProps {
  posts: PostType[];
}
