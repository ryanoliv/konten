import styles from "./Contact.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="container flex flex-col gap-16">
      <h2 className={styles.formTitle}>Contact Us</h2>
      <form action="" className="flex flex-col gap-8">
        <div className="flex justify-between items-end w-full border-b border-slate-500">
          <label htmlFor="label" className={styles.formLabel}>
            My Name is
          </label>
          <input
            type="text"
            className={styles.formInput}
            placeholder="Click Here To Insert Your Name..."
          />
        </div>
        <div className="flex justify-between items-end w-full border-b border-slate-500">
          <label htmlFor="label" className={styles.formLabel}>
            And I Want
          </label>
          <select name="" id="" className={styles.formSelect}>
            <option value="Website">A Website</option>
            <option value="App">An App</option>
          </select>
        </div>
        <div className="flex justify-between items-end w-full border-b border-slate-500">
          <label htmlFor="label" className={styles.formLabel}>
            Contact Me At
          </label>
          <input
            type="text"
            className={styles.formInput}
            placeholder="Click Here To Insert Your Email..."
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
