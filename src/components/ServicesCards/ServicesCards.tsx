import Link from "next/link";
import SectionContainer from "../SectionContainer/SectionContainer";

const services = [
  {
    service: "User Experience Design",
    serviceBio:
      "Improve customer satisfaction with intuitive and user-friendly website experiences.",
    href: "/the-role-of-ux-in-web-development",
  },
  {
    service: "User Interface Design",
    serviceBio:
      "Modern, high-quality UI design that enhances your brand’s digital presence.",
    href: "#ui-design",
  },
  {
    service: "Web Development",
    serviceBio:
      "Fast, responsive, and SEO-optimised websites tailored to your business needs.",
    href: "/web-development-cape-town",
  },
  {
    service: "Search Engine Optimisation",
    serviceBio:
      "Improve your Google ranking and attract more clients with on-page and technical SEO.",
    href: "#seo",
  },
];

export default function ServicesCards() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
      (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
    });
  };

  return (
    <section>
      <SectionContainer>
        <h2 className="page-title">Our Services</h2>
        <div
          className="cards flex flex-wrap gap-4 max-w-[966px]"
          onMouseMove={handleMouseMove}
        >
          {services.map((service, index) => (
            <Link key={index} href={service.href}>
              <div className="card rounded-3xl shadow-[0_2px_16px_rgba(255,255,255,0.1)] max-w-[470px] flex flex-col items-center justify-center gap-2 cursor-pointer">
                <div className="card-content flex flex-col items-center justify-center gap-2 text-center">
                  <h3 className="text-4xl font-medium">{service.service}</h3>
                  <p className="max-w-[345px] uppercase text-sm">
                    {service.serviceBio}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
