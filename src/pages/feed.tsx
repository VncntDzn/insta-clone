import PrivateLayout from "layouts/private-layout";
import { ReactElement } from "react";
import axios from "axios";

const Feed = () => {
  const sample = async () => {
    try {
      const res = await axios.get("/api/user/create", {
        email: "vpdizon@gmail.com",
        password: "123456",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>feed</h1>
      <button onClick={sample}>create user</button>
    </div>
  );
};

Feed.getLayout = (page: ReactElement) => {
  return <PrivateLayout>{page}</PrivateLayout>;
};
export default Feed;
