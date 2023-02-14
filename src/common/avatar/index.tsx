import Image from "next/image";
import styles from "./avatar.module.scss";
import Pic from "../../layouts/private-layout/assets/pic.jpg";
import { memo } from "react";

interface AvatarProps {
  height: number | undefined;
  width: number | undefined;
}

const Avatar = ({ height, width }: Partial<AvatarProps>) => {
  return (
    <Image
      className={styles.root}
      src={Pic}
      width={width || 30}
      height={height || 30}
      alt="Profile"
    />
  );
};

export default memo(Avatar);
