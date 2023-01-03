import { PageTitle } from "common";
import PrivateLayout from "layouts/private-layout";
import { ReactElement } from "react";

const Search = () => {
  return <div>Search</div>;
};

Search.getLayout = (page: ReactElement) => {
  return <PrivateLayout>{page}</PrivateLayout>;
};
export default Search;
