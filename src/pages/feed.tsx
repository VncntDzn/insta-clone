import { storage } from "db/client";
import {
  getDownloadURL,
  listAll,
  ref,
  StorageReference,
} from "firebase/storage";
import PrivateLayout from "layouts/private-layout";
import Image from "next/image";
import { ReactElement, useEffect, useState } from "react";
import { useAppSelector } from "store/hooks";
import { NextPageWithLayout } from "./_app";

const Feed: NextPageWithLayout = () => {
  const user = useAppSelector((state) => state.user.user);
  const listRef = ref(storage, `${user!.uid}/posts`);
  const [posts, setPosts] = useState<string[]>([]);

  const fetchPosts = async () => {
    try {
      const imageRef = await listAll(listRef);
      imageRef.items.forEach((image) => fetchImageFromFirebase(image));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchImageFromFirebase = async (image: StorageReference) => {
    try {
      const res = await getDownloadURL(image);
      setPosts((prevData) => [...prevData, res]);
    } catch (error) {}
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      {posts.map((post, i) => (
        <Image key={i} height={100} width={100} src={post} alt={"i" + i} />
      ))}
    </div>
  );
};

Feed.getLayout = (page: ReactElement) => {
  return <PrivateLayout>{page}</PrivateLayout>;
};
export default Feed;
