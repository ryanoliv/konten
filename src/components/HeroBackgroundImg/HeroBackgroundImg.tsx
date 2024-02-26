import Image from "next/image";
import styles from "./HeroBackgroundImg.module.scss";
export default function HeroBackgroundImg() {
  return (
    <div className={styles.heroBackgroundImgContainer}>
      <Image
        src="/hero-images/nightsky-texture.jpg"
        alt="Outer space nightsky"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
