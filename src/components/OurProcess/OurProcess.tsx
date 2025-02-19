import React from "react";
import SectionContainer from "../SectionContainer/SectionContainer";

const steps = [
  {
    number: "1",
    title: "Let's Chat",
    description:
      "We'll start by getting to know you and your business. What are your goals? Who's your audience? We'll work together to create a plan that fits.",
  },
  {
    number: "2",
    title: "Design and Build",
    description:
      "Our team will create mockups and prototypes so you can see your website come to life. Then, we'll handle the development to ensure everything runs smoothly.",
  },
  {
    number: "3",
    title: "Test and Go Live",
    description:
      "Before launch, we'll test your site to make sure it's fast, secure, and ready for visitors.",
  },
  {
    number: "4",
    title: "We've Got Your Back",
    description:
      "After launch, we're here to help with updates, maintenance, and anything else you need.",
  },
];

export default function OurProcess() {
  return (
    <section>
      <SectionContainer>
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-3xl text-center">
            Our Process From Idea to Launch
          </h2>
          <p className="text-center">
            We believe in keeping things simple and straightforward. Here&apos;s
            how we work:
          </p>
        </div>
        <div className="p-4 md:p-12 bg-[#fff] shadow-md rounded-md flex flex-col border">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-2 md:gap-6">
              <div className="flex flex-col items-center">
                <div className="h-10 w-10 md:h-12 md:w-12 bg-white text-lg rounded-full flex items-center justify-center border">
                  {step.number}
                </div>
                {index !== steps.length - 1 && (
                  <div className="w-[2px] h-[80px] bg-white"></div>
                )}
              </div>
              <div
                className={`pt-2 flex flex-col md:flex-row gap-2 md:gap-12 border-gray-200 justify-start md:justify-between w-full ${
                  index === steps.length - 1 ? "border-none pb-0" : ""
                }`}
              >
                <h3 className="text-xl">{step.title}</h3>
                <p className="max-w-full md:max-w-[480px] text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
