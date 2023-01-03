import { MdHome } from "@react-icons/all-files/md/MdHome";
import { MdSearch } from "@react-icons/all-files/md/MdSearch";
import { MdExplore } from "@react-icons/all-files/md/MdExplore";
import { MdAddBox } from "@react-icons/all-files/md/MdAddBox";
import { MdVideoLibrary } from "@react-icons/all-files/md/MdVideoLibrary";
import { RiHeartFill } from "@react-icons/all-files/ri/RiHeartFill";
import { RiSendPlaneFill } from "@react-icons/all-files/ri/RiSendPlaneFill";

const index = [
  {
    name: "Home",
    icon: <MdHome size={30} />,
    path: "/feed",
  },
  {
    name: "Search",
    icon: <MdSearch size={30} />,
    path: "/search",
  },
  {
    name: "Explore",
    icon: <MdExplore size={30} />,
    path: "/explore",
  },
  {
    name: "Reels",
    icon: <MdVideoLibrary size={30} />,
    path: "/reels",
  },
  {
    name: "Messages",
    icon: <RiSendPlaneFill size={30} />,
    path: "/messages",
  },
  {
    name: "Notifications",
    icon: <RiHeartFill size={30} />,
    path: "/notifications",
  },
  {
    name: "New Post",
    icon: <MdAddBox size={30} />,
    path: "",
  },
];

export default index;
