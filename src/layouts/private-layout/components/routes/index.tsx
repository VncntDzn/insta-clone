import { RiHome5Fill } from "@react-icons/all-files/ri/RiHome5Fill";
import { RiHome5Line } from "@react-icons/all-files/ri/RiHome5Line";
import { RiSearchFill } from "@react-icons/all-files/ri/RiSearchFill";
import { RiSearchLine } from "@react-icons/all-files/ri/RiSearchLine";
import { RiVideoFill } from "@react-icons/all-files/ri/RiVideoFill";
import { RiVideoLine } from "@react-icons/all-files/ri/RiVideoLine";
import { RiAddBoxFill } from "@react-icons/all-files/ri/RiAddBoxFill";
import { RiAddBoxLine } from "@react-icons/all-files/ri/RiAddBoxLine";
import { RiCompassDiscoverFill } from "@react-icons/all-files/ri/RiCompassDiscoverFill";
import { RiCompassDiscoverLine } from "@react-icons/all-files/ri/RiCompassDiscoverLine";
import { RiHeartFill } from "@react-icons/all-files/ri/RiHeartFill";
import { RiHeartLine } from "@react-icons/all-files/ri/RiHeartLine";
import { RiMessageFill } from "@react-icons/all-files/ri/RiMessageFill";
import { RiMessageLine } from "@react-icons/all-files/ri/RiMessageLine";

import { Avatar } from "common";
const index = [
  {
    name: "Home",
    inactive_icon: <RiHome5Line size={30} />,
    active_icon: <RiHome5Fill size={30} />,
    path: "/feed",
  },
  {
    name: "Search",
    inactive_icon: <RiSearchLine size={30} />,
    active_icon: <RiSearchFill size={30} />,
    path: "/search",
  },
  {
    name: "Explore",
    inactive_icon: <RiCompassDiscoverLine size={30} />,
    active_icon: <RiCompassDiscoverFill size={30} />,
    path: "/explore",
  },
  {
    name: "Reels",
    inactive_icon: <RiVideoLine size={30} />,
    active_icon: <RiVideoFill size={30} />,
    path: "/reels",
  },
  {
    name: "Messages",
    inactive_icon: <RiMessageLine size={30} />,
    active_icon: <RiMessageFill size={30} />,
    path: "/messages",
  },
  {
    name: "Notifications",
    inactive_icon: <RiHeartLine size={30} />,
    active_icon: <RiHeartFill size={30} />,
    path: "/notifications",
  },
  {
    name: "Create",
    inactive_icon: <RiAddBoxLine size={30} />,
    active_icon: <RiAddBoxFill size={30} />,
    path: "/new-post",
  },
  {
    name: "Profile",
    inactive_icon: <Avatar />,
    path: "/profile",
  },
];

export default index;
