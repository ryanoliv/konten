import styles from "./Nav.module.scss";
import { slide, scale } from "./anim";
import Link from "next/link";
import { motion } from "framer-motion";

interface NavLinkData {
  title: string;
  href: string;
  index?: number;
}

interface NavLinkProps {
  data: NavLinkData;
  toggleMenu: () => void;
}

export default function NavLink({ data, toggleMenu }: NavLinkProps) {
  const { title, href, index } = data;

  return (
    <motion.div
      custom={index}
      variants={slide}
      animate="enter"
      exit="exit"
      initial="initial"
      className={styles.link}
      onClick={toggleMenu}
    >
      <Link href={href}>{title}</Link>
    </motion.div>
  );
}
