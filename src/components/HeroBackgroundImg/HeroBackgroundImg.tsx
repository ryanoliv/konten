import Image from "next/image";
import { outerSpaceSky } from "@/utils/imageImports";
import styles from "./HeroBackgroundImg.module.scss";
export default function HeroBackgroundImg() {
  return (
    <div className={styles.heroBackgroundImgContainer}>
      <Image
        src={outerSpaceSky}
        alt="Outer space nightsky"
        placeholder="blur"
        fill
        style={{ objectFit: "cover" }}
        quality={80}
      />
    </div>
  );
}
