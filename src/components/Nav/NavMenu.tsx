import styles from "./Nav.module.scss";

import Link from "next/link";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

import { menuSlide } from "./anim";
import Curve from "./Curve";

const navLinks = [
  {
    title: "Home",
    href: "/#home",
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
    href: "/#home-blog",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
];

interface NavMenuProps {
  toggleMenu: () => void; // Define the type of the toggleMenu function
}

export default function NavMenu({ toggleMenu }: NavMenuProps) {
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
            return (
              <NavLink
                key={index}
                data={{ ...data, index }}
                toggleMenu={toggleMenu}
              />
            );
          })}
        </div>
        <div className={styles.socialLinks}>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/konten.dev/"
          >
            Instagram
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/kontendev/"
          >
            LinkedIn
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/kontendev"
          >
            X.com
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/konten.dev"
          >
            Facebook
          </Link>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
