import styles from "./FeaturedWork.module.scss";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    href: "https://alkemi.global",
    imgBoxSrc: "./work/alkemi-box.svg",
    imgBoxAlt: "gray rectangle box",
    imgW: 403,
    imgH: 144,
    logoSrc: "./work/alkemi-logo.svg",
    logoAlt: "alkemi collective logo",
    services: ["Web Development", "SEO"],
    title: "Alkemi Collective",
  },
  {
    href: "https://hbmedia.io",
    imgBoxSrc: "./work/hbmedia-box.svg",
    imgBoxAlt: "blurred gradient box",
    imgW: 403,
    imgH: 134,
    logoSrc: "./work/hbmedia-logo.svg",
    logoAlt: "hb media logo",
    services: ["UX", "UI", "Web Development", "SEO"],
    title: "HB Media",
  },
  {
    href: "https://www.rootsandwings.education/",
    imgBoxSrc: "./work/roots+wings-box.svg",
    imgBoxAlt: "white background box",
    imgW: 282,
    imgH: 158,
    logoSrc: "./work/roots+wings-logo.svg",
    logoAlt: "Roots & Wings logo",
    services: ["UX", "UI", "Web Development", "SEO"],
    title: "Roots & Wings",
  },
  {
    href: "https://firetailfly.com/",
    imgBoxSrc: "./work/firetail-box.svg",
    imgBoxAlt: "blue background box",
    imgW: 403,
    imgH: 134,
    logoSrc: "./work/firetail-logo.svg",
    logoAlt: "firetail fly logo",
    services: ["UX", "UI", "Web Development", "SEO"],
    title: "Firetail Fly",
  },
];

export default function FeaturedWork() {
  return (
    <div className="container flex flex-col gap-16">
      <div className="flex justify-between gap-6 w-full items-end">
        <h2 className={styles.featuredWorkTitle}>Featured Work</h2>
        <p className={styles.featuredWorkText}>
          A collection of our most recent transformations.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-x-4 gap-y-16 md:grid-cols-2">
        {projects.map((project, index) => (
          <Link href={project.href} target="_blank" key={index}>
            <div className={styles.featuredWorkProject}>
              <div className={styles.featuredWorkImgBox}>
                <Image
                  src={project.imgBoxSrc}
                  alt={project.imgBoxAlt}
                  width={635}
                  height={390}
                  className={styles.featuredWorkImg}
                />
                <Image
                  src={project.logoSrc}
                  alt={project.logoAlt}
                  width={project.imgW}
                  height={project.imgH}
                  className={styles.featuredWorkLogo}
                />
              </div>
              <h3 className="flex gap-2">
                {project.services.map((service, i) => (
                  <span key={i} className="flex items-center gap-2">
                    {service}
                    {i < project.services.length - 1 && (
                      <Image
                        src="./work/star.svg"
                        alt="star icon"
                        width={11}
                        height={11}
                      />
                    )}
                  </span>
                ))}
              </h3>
              <h4>{project.title}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
