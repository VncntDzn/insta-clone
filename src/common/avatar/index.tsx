import Image from "next/image";
import styles from "./avatar.module.scss";
import Pic from "../../layouts/private-layout/assets/pic.jpg";
import { memo, useEffect, useRef, useState } from "react";
import Avatar, { genConfig } from "react-nice-avatar";
import { useAppSelector } from "store/hooks";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { firestore } from "db/client";
interface AvatarProps {
  height: number | undefined;
  width: number | undefined;
  uid: User["uid"];
}
const config = genConfig({
  sex: "man",
  faceColor: "#F9C9B6",
  earSize: "small",
  eyeStyle: "oval",
  noseStyle: "short",
  mouthStyle: "laugh",
  shirtStyle: "polo",
  glassesStyle: "square",
  hairColor: "#F48150",
  hairStyle: "thick",
  hatStyle: "none",
  hatColor: "#F48150",
  eyeBrowStyle: "upWoman",
  shirtColor: "#6BD9E9",
  bgColor: "#e6ee81",
});
const CustomAvatar = ({ height, width, uid }: Partial<AvatarProps>) => {
  const currentUser = useAppSelector((state) => state.user.user);
  const randomConfig = genConfig();
  if (!currentUser?.photoURL) {
    return (
      <>
        {uid === currentUser!.uid ? (
          <Avatar style={{ width: 50, height: 50 }} {...config} />
        ) : (
          <Avatar style={{ width: 50, height: 50 }} {...randomConfig} />
        )}
      </>
    );
  }
  return (
    <Image
      className={styles.root}
      src={Pic}
      width={width || 30}
      height={height || 30}
      alt={currentUser?.displayName || "avatar"}
    />
  );
};

export default memo(CustomAvatar);
