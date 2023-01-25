import Image from "next/image";
import styles from "./avatar.module.scss";
import Pic from "../../layouts/private-layout/assets/pic.jpg";

interface AvatarProps {
  height: number | undefined;
  width: number | undefined;
}

const Avatar = ({ height, width }: AvatarProps) => {
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

export default Avatar;
