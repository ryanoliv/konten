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
}

export default function NavLink({ data }: NavLinkProps) {
  const { title, href, index } = data;

  return (
    <motion.div
      custom={index}
      variants={slide}
      animate="enter"
      exit="exit"
      initial="initial"
      className={styles.link}
    >
      <Link href={href}>{title}</Link>
    </motion.div>
  );
}
