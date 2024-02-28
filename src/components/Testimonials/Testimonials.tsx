import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="container flex flex-col gap-16 items-center">
      <div className="flex flex-col gap-1 items-center">
        <div className="nicole-container">
          <Image src="/nicole.png" alt="Nicole Waugh" width={40} height={40} />
        </div>
        <h5>Nicole Waugh</h5>
        <h6>Founder of HB Media</h6>
      </div>
      <p className="testimonial-quote">
        “From the outset, Konten showcased a deep understanding of our business
        objectives and translated them into a beautifully designed and highly
        functional website. The team&apos;s commitment to excellence was evident
        in every phase of the project, and to further surpass our expectations,
        their post-launch support has been incredible. The team at Konten have
        truly enhanced our online presence and I cannot recommend them enough!”
      </p>
    </section>
  );
}
