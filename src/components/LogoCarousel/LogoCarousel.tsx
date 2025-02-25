import Image from "next/image";

const logos = [
  { src: "/client-logos/hbmedia.svg", alt: "hb media company logo" },
  { src: "/client-logos/firetail.svg", alt: "firetail fly company logo" },
  { src: "/client-logos/jessicarea.png", alt: "jessica rea company logo" },
  { src: "/client-logos/jlearning.png", alt: "j-learning company logo" },
  { src: "/client-logos/rootsandwings.svg", alt: "roots & wings company logo" },
  { src: "/client-logos/wakecroft.png", alt: "wakecroft house logo" },
  { src: "/client-logos/alkemi.svg", alt: "alkemi collective company logo" },
];

const repeatedLogos = [...logos, ...logos];

export default function LogoCarousel() {
  return (
    <section className="overflow-hidden py-6 relative">
      <div className="logos relative flex whitespace-nowrap">
        <div className="logo_items flex flex-shrink-0 min-w-full">
          {repeatedLogos.map((logo, index) => (
            <div
              key={index}
              className="relative w-[140px] h-[50px] flex items-center mx-4 md:mx-8"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain max-w-full"
              />
            </div>
          ))}
        </div>
        <div className="logo_items flex flex-shrink-0 min-w-full">
          {repeatedLogos.map((logo, index) => (
            <div
              key={index}
              className="relative w-[140px] h-[50px] flex items-center mx-4 md:mx-8"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain max-w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
