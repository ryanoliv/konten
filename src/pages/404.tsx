import Link from "next/link";
import Image from "next/image";

export default function Custom404() {
  return (
    <div className="relative overflow-hidden">
      <h1 className="not-found-title">404</h1>
      <div className="flex flex-col gap-8 justify-center items-center relative z-10 min-h-screen">
        <h2 className="not-found-subtitle">Oops</h2>
        <p className="not-found-text">
          it looks like the page you have requested cannot be found. please
          click the button below to return to our home page
        </p>
        <Link href="/" className="btn">
          Home
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
