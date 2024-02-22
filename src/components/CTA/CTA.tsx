import Link from "next/link";
import Image from "next/image";

export default function CTA() {
  return (
    <div className="container">
      <div className="marquee-container">
        <h2 className="cta-title marquee">
          Ready to Transform Your Digital Presence?&nbsp;
        </h2>
        <h2 className="cta-title marquee">
          Ready to Transform Your Digital Presence?&nbsp;
        </h2>
      </div>
      <div className="flex flex-col gap-12 items-center">
        <p className="cta-subtitle">
          Let&apos;s Build Something Remarkable Together.
        </p>
        <Link href="/#contact" className="btn">
          Get in Touch
          <Image
            src="./btn-logo.svg"
            alt="konten logo green"
            width={21}
            height={21}
          />
        </Link>
      </div>
    </div>
  );
}
