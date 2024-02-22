import styles from "./HomeBlog.module.scss";

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
        <div className={styles.blogCard}></div>
        <div className={styles.blogCard}></div>
        <div className={styles.blogCard}></div>
        {/* <div className={styles.blogCard}></div> */}
      </div>
    </div>
  );
}
