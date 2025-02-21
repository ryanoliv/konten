import Image from "next/image";
import {
  arcArchitectureImg,
  webAppImg,
  googleSearchConsoleImg,
} from "@/utils/imageImports";
import SectionContainer from "../SectionContainer/SectionContainer";

const services = [
  {
    imgSrc: arcArchitectureImg,
    imgAlt: "arc architecture website mockup",
    title: "Custom Website Development",
    description:
      "Your website should work as hard as you do. We build fast, responsive websites that are easy to use and manage. Whether you’re starting fresh or need a redesign, we’ll create a site that showcases your business and gets the results you're looking for.",
    listTitle: "Perfect for",
    listItems: [
      "Brands ready to take their online presence to the next level",
      "Startups looking for a freelance web developer",
    ],
  },

  {
    imgSrc: webAppImg,
    imgAlt: "j-learning web app mockup",
    title: "Web App Development",
    description:
      "Have a big idea for a web app? Let us help you make it a reality. We specialise in building custom web applications that are scalable, user-friendly, and built to last. From web and app development to polished interfaces, we’ll handle the heavy lifting.",
    listTitle: "Our Expertise Includes",
    listItems: [
      "Next.js, React, and JavaScript-based solutions",
      "Apps tailored for small businesses and enterprises alike",
    ],
  },
  {
    imgSrc: googleSearchConsoleImg,
    imgAlt: "googel search console performance analytics",
    title: "SEO-Optimised Websites",
    description:
      "A beautiful website is great, but if no one can find it, it won’t help your business grow. That’s where SEO comes in. By optimising your site structure, improving page load speed, and using targeted keywords, we help your website rank higher on Google. Whether you’re competing for search phrases like “best web development Cape Town” or “web development company,” our SEO strategies ensure you attract the right visitors who are actively looking for your services.",
    listTitle: "Here’s What We Offer",
    listItems: [
      "Targeted keyword research to boost your visibility",
      "Speed optimisation to keep users engaged",
    ],
  },
  //   {
  //     title: "E-commerce Website Development",
  //     description:
  //       "Ready to sell online? We create e-commerce websites that are simple to manage and designed to convert. Whether it’s Shopify or a custom solution, we’ll help you build a store that your customers will love.",
  //     imgSrc: "/pngs/arc.png",
  //     imgAlt: "arc architecture website mockup",
  //   },
];

export default function WebDevServices() {
  return (
    <section className="text-darkestGreen">
      <SectionContainer>
        <h2 className="text-4xl text-center font-medium">
          What We Can <span className="italic font-normal">Help</span> You With
        </h2>
        <div className="flex flex-col gap-20 md:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <Image
                src={service.imgSrc}
                alt={service.imgAlt}
                placeholder="blur"
                quality={80}
                width={750}
                height={550}
                className="rounded-lg aspect-3/2 object-cover border shadow"
              />
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4 max-w-[585px]">
                  <h3 className="font-sans text-2xl">{service.title}</h3>
                  <p className="">{service.description}</p>
                </div>
                {service.listTitle && service.listItems && (
                  <div className="flex flex-col">
                    <h3 className="font-sans underline">{service.listTitle}</h3>
                    <ul className="text-sm">
                      {service.listItems.map((item, i) => (
                        <li key={i} className="flex gap-2 items-start">
                          <Image
                            src="/pngs/right-arrow.png"
                            alt="green arrow pointing to the right"
                            width={15}
                            height={15}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
