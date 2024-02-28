import styles from "./HomeBlog.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function HomeBlog() {
  return (
    <div className="container flex flex-col gap-20">
      <div className="flex justify-between w-full items-end">
        <h2 className={styles.blogTitle}>Our Blog</h2>
        <p className={styles.blogSubtitle}>
          Read some more on topics that are trending in the web development
          world
        </p>
      </div>
      <div className={styles.blogGrid}>
        <Link href="/the-role-of-ux-in-web-development">
          <div className={styles.blogCard}>
            <Image
              src="/blog-images/thumbnails/role-of-ux-in-web-dev.jpg"
              alt="colourful texture pattern"
              fill
              style={{ objectFit: "cover" }}
              className={styles.blogCardImage}
            />
            <div className={styles.blogCardImageOverlay}>
              <h3>The Role of User Experience in Successful Web Development</h3>
              <p>9 Min Read</p>
            </div>
          </div>
        </Link>
        <div className={styles.placeholder}></div>
        <div className={styles.placeholder}></div>
      </div>
    </div>
  );
}
