import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="container relative z-10 flex flex-col gap-16">
      <form action="">
        <div className="flex justify-between items-end w-full border-b border-slate-300">
          <label htmlFor="label" className="form-label">
            My Name is
          </label>
          <input
            type="text"
            className="form-input"
            placeholder="Your Name..."
          />
        </div>
        <div className="flex justify-between items-end w-full border-b border-slate-300">
          <label htmlFor="label" className="form-label">
            And I Want
          </label>
          <select name="" id="" className="form-select">
            <option value="Website">A Website</option>
            <option value="App">An App</option>
          </select>
        </div>
        <div className="flex justify-between items-end w-full border-b border-slate-300">
          <label htmlFor="label" className="form-label">
            Contact Me At
          </label>
          <input
            type="text"
            className="form-input"
            placeholder="Your Email..."
          />
        </div>
      </form>
      <Link href="/" className="btn">
        Submit
        <Image
          src="./btn-logo.svg"
          alt="konten logo green"
          width={21}
          height={21}
        />
      </Link>
    </div>
  );
}
