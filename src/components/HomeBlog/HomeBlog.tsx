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
        <Link href="/the-best-web-development-tools-in-2024">
          <div className={styles.blogCard}>
            <Image
              src="/blog-images/thumbnails/best-web-dev-tools.jpg"
              alt="black and white texture pattern"
              fill
              style={{ objectFit: "cover" }}
              className={styles.blogCardImage}
            />
            <div className={styles.blogCardImageOverlay}>
              <h3>The Best Web Development Tools in 2024</h3>
              <p>7 Min Read</p>
            </div>
          </div>
        </Link>
        <Link href="/web-design-vs-web-development-understanding-the-differences">
          <div className={styles.blogCard}>
            <Image
              src="/blog-images/thumbnails/web-design-vs-web-development.jpg"
              alt="gradient blur pattern with reds and oranges"
              fill
              style={{ objectFit: "cover" }}
              className={styles.blogCardImage}
            />
            <div className={styles.blogCardImageOverlay}>
              <h3>
                Web Design vs. Web Development: Understanding the Differences
              </h3>
              <p>16 Min Read</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
