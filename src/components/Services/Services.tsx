import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <div className="container">
      <div className="flex flex-col gap-10">
        <h2 className="page-title">Our Services</h2>
        <div className="flex flex-col p-6 services-container relative">
          <Link
            href="/ux-design"
            className="flex py-4 justify-between items-center w-full"
          >
            <h3 className="service">User Experience Design</h3>
            <Image
              src="./arrow.svg"
              alt="diagonal arrow"
              width={26}
              height={28}
            />
          </Link>
          <Link
            href="/ui-design"
            className="flex py-4 justify-between items-center w-full"
          >
            <h3 className="service">User Interface Design</h3>
            <Image
              src="./arrow.svg"
              alt="diagonal arrow"
              width={26}
              height={28}
            />
          </Link>
          <Link
            href="/development"
            className="flex py-4 justify-between items-center w-full"
          >
            <h3 className="service">Website Development</h3>
            <Image
              src="./arrow.svg"
              alt="diagonal arrow"
              width={26}
              height={28}
            />
          </Link>
          <Link
            href="/development"
            className="flex py-4 justify-between items-center w-full"
          >
            <h3 className="service">Application Development</h3>
            <Image
              src="./arrow.svg"
              alt="diagonal arrow"
              width={26}
              height={28}
            />
          </Link>
          <Link
            href="/seo"
            className="flex py-4 justify-between items-center w-full"
          >
            <h3 className="service">SEO</h3>
            <Image
              src="./arrow.svg"
              alt="diagonal arrow"
              width={26}
              height={28}
            />
          </Link>
          <Image
            src="./services-blur.svg"
            alt="green-blur-vector"
            width={1280}
            height={204}
            className="services-blur-vector"
          />
        </div>
      </div>
    </div>
  );
}
