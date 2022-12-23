import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./active-link.module.scss";
interface ActiveLinkProps {
  href: string;
  name: string;
}
const ActiveLink = ({ href, name }: ActiveLinkProps) => {
  const router = useRouter();
  const IS_ACTIVE = router.route === `${href}` ? `${styles.active}` : "";

  return (
    <Link href={href} className={`${styles.root} ${IS_ACTIVE}`}>
      {name}
    </Link>
  );
};

export default ActiveLink;
