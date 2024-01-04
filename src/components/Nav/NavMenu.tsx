import styles from "./Nav.module.scss";
import Link from "next/link";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
// import { usePathname } from "next/navigation";
import { menuSlide } from "./anim";
import Curve from "./Curve";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    href: "/#services",
  },
  {
    title: "Portfolio",
    href: "/#portfolio",
  },
  {
    title: "Blog",
    href: "/#blog",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
];

export default function NavMenu() {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.navMenuWrapper}
    >
      <div className={styles.navMenu}>
        <div className={styles.navMenuLinks}>
          <div className={styles.navMenuTitle}>
            <p>Navigation</p>
          </div>
          {navLinks.map((data, index) => {
            return <NavLink key={index} data={{ ...data, index }}></NavLink>;
          })}
        </div>
        <div className={styles.socialLinks}>
          <Link target="_blank" href="https://www.instagram.com/konten.dev/">
            Instagram
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/company/kontendev/"
          >
            LinkedIn
          </Link>
          <Link target="_blank" href="https://twitter.com/kontendev">
            X.com
          </Link>
          <Link target="_blank" href="https://www.facebook.com/konten.dev">
            Facebook
          </Link>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
