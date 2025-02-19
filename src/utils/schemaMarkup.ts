export const getSchemaMarkup = () => {
  return {
    "@context": "http://schema.org",
    "@type": "ProfessionalService",
    name: "Konten",
    image: "https://www.konten.dev/logo-black.svg",
    url: "https://www.konten.dev",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cape Town",
      addressRegion: "Western Cape",
      addressCountry: "ZA",
    },
    sameAs: [
      "https://www.facebook.com/konten.dev",
      "https://www.instagram.com/konten.dev",
      "https://www.linkedin.com/company/kontendev",
      "https://twitter.com/kontendev",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "User Experience Design",
          description:
            "We put your user at the centre of our design process and make every interaction meaningful.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "User Interface Design",
          description:
            "Where form meets function. Immerse your audience in out-of-this-world experiences tailored to your brand.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Development",
          description:
            "Crafted for you. As leading website developers in Cape Town, every line of code we write is purpose-driven, aimed at building websites that not only look spectacular, but perform optimally.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "App Development",
          description:
            "Crafted for you. As leading app developers in Cape Town, every line of code we write is purpose-driven, aimed at building apps that not only look spectacular, but perform optimally.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO",
          description:
            "Stand out from the crowd. Propel your brand to the forefront of search engines with analytics driven strategies.",
        },
      },
    ],
  };
};
