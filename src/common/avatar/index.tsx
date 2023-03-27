import Image from "next/image";
import { memo } from "react";
import Avatar, { genConfig } from "react-nice-avatar";
import { useAppSelector } from "store/hooks";
import styles from "./avatar.module.scss";
import { CustomAvatarProps } from "./custom-avatar.types";

// Default avatar config
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
const CustomAvatar = ({
  height = 30,
  width = 30,
  picture,
  uid,
}: Partial<CustomAvatarProps>) => {
  const currentUser = useAppSelector((state) => state.user.user);
  const customAvatarConfig = uid === currentUser!.uid ? config : genConfig();

  // Show generated avatar if no photoUrl is presented otherwise show the user's picture.
  if (!currentUser?.photoURL) {
    return (
      <Avatar className={styles.generatedAvatar} {...customAvatarConfig} />
    );
  }
  return (
    <Image
      className={styles.root}
      src={picture}
      width={width}
      height={height}
      // if no display name is provided then just display avatar
      alt={currentUser?.displayName ?? "avatar"}
    />
  );
};

export default memo(CustomAvatar);
