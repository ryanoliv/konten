"use client";

import { useState } from "react";
import Image from "next/image";
import SectionContainer from "../SectionContainer/SectionContainer";

const questions = [
  {
    question: "What's the difference between web design and development?",
    answer:
      "Think of web design as the blueprint—it’s all about how your site looks and feels. Web development is the construction—it’s what makes everything work behind the scenes. We handle both, so your site isn’t just good-looking but also fast, secure, and functional.",
  },
  {
    question: "How much will my website cost?",
    answer:
      "It depends on what you need! A simple website will cost less than a complex web app or ecommerce store. The best way to find out? Let’s chat. We’ll give you a clear, upfront quote with no surprises or hidden fees.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "A basic website usually takes 2-4 weeks, while a more complex custom web app can take a few months. We’ll give you a realistic timeline from the start, so you always know what to expect.",
  },
  {
    question: "Will my website be SEO-friendly?",
    answer:
      "Of course! Every site we build follows SEO best practices so you can rank higher on Google. We optimise site speed, structure, and content to help you attract the right visitors and grow your business.",
  },
  {
    question: "Do you offer website maintenance?",
    answer:
      "Yes! A website isn’t just a one-time project, it needs updates, security patches, and fresh content to stay relevant. We offer ongoing maintenance plans to keep your site running smoothly, so you never have to worry about downtime or broken features.",
  },
  {
    question: "Can I update my website myself?",
    answer:
      "Absolutely. We build sites that are easy to manage. Whether you need to add new blog posts, update images, or tweak text, we’ll make sure you have the tools and training to do it yourself. And if you ever need help, we’re just an email away.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function handleToggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section>
      <SectionContainer>
        <h2 className="text-4xl text-center font-medium">
          Questions? We&apos;ve Got Answers
        </h2>
        <div className="flex flex-col">
          {questions.map((item, index) => (
            <div
              key={index}
              className="flex flex-col border-b border-black py-4"
            >
              <button
                className="flex gap-4 justify-between items-center text-start"
                onClick={() => handleToggle(index)}
                aria-expanded={openIndex === index}
              >
                {item.question}
                <Image
                  src={
                    openIndex === index ? "/icons/minus.png" : "/icons/plus.png"
                  }
                  alt={
                    openIndex === index ? "Collapse answer" : "Expand answer"
                  }
                  width={15}
                  height={15}
                  className="transition-transform"
                />
              </button>
              <div
                className={`overflow-hidden transition-[max-height] ${
                  openIndex === index ? "max-h-40 mt-2" : "max-h-0"
                }`}
              >
                <p className="max-w-[550px] text-gray-600 text-sm">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
