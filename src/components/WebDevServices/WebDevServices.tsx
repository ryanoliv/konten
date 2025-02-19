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
      "Your website should work as hard as you do. We build fast, responsive websites that are easy to use and manage. Whether you’re starting fresh or need a redesign, we’ll create a site that showcases your business and gets results.",
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
      "Have a big idea for an app? Let us help you make it a reality. We specialise in building custom web applications that are scalable, user-friendly, and built to last. From web and app development to polished interfaces, we’ll handle the heavy lifting.",
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
      "A great-looking website is just the start. If you want people to find you online, you need solid SEO. We’ll help you rank for keywords like “web developer Cape Town” and “web development company South Africa”, ensuring your site doesn’t just sit pretty but brings in traffic that converts.",
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
        <h2 className="text-3xl text-center">What We Can Help You With</h2>
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
                width={750}
                height={550}
                className="rounded-lg aspect-3/2 object-cover border shadow"
              />
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4 max-w-[585px]">
                  <h3 className="text-2xl">{service.title}</h3>
                  <p className="">{service.description}</p>
                </div>
                {service.listTitle && service.listItems && (
                  <div className="flex flex-col">
                    <h3 className="underline">{service.listTitle}</h3>
                    <ul className="list-disc ml-4 text-sm">
                      {service.listItems.map((item, i) => (
                        <li key={i}>{item}</li>
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
