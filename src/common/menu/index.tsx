import { ChildrenType } from "types";
import styles from "./menu.module.scss";

interface MenuProps extends ChildrenType {
  className: string;
}
const Menu = ({ className, children }: MenuProps) => {
  return <div className={`${styles.root} ${className}`}>{children}</div>;
};

export default Menu;
