import styles from "./Contact.module.scss";
import { useState, FormEvent } from "react";
import Image from "next/image";

type FormErrors = {
  name?: string;
  service?: string;
  email?: string;
};

interface SuccessModalProps {
  onClose: () => void; // Specifies that onClose is a function that returns void
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const [showModal, setShowModal] = useState(false);

  // Function to close the modal
  function handleClose() {
    setShowModal(false);
  }

  function validateForm() {
    let errors: FormErrors = {};

    if (!formData.name) errors.name = "Name is required";
    if (!formData.service) errors.service = "Please select a service";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
    ) {
      errors.email = "Invalid email format";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch("/api/mail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log(result);

        setShowModal(true);
      } catch (error) {
        if (error instanceof Error) {
          console.error(
            "There was an error sending the message:",
            error.message
          );
        } else {
          console.error("There was an error sending the message", error);
        }
        alert("There was a problem submitting the form. Please try again.");
      }
      setFormData({
        name: "",
        service: "",
        email: "",
      });
    } else {
      // alert("There was a problem submitting the form. Please try again later.");
      console.log("Form submission failed");
    }
  }

  return (
    <div className="container flex flex-col gap-16">
      <h2 className={styles.formTitle}>Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-16 md:gap-8 relative items-end"
      >
        <div className="flex justify-between items-end w-full border-b border-slate-500 relative">
          <label htmlFor="name" className={styles.formLabel}>
            My Name is
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            className={styles.formInput}
            placeholder="Insert Your Name..."
          />
          {formErrors.name && (
            <p className={styles.errorMessage}>{formErrors.name}</p>
          )}
        </div>
        <div className="flex justify-between items-end w-full border-b border-slate-500 relative">
          <label htmlFor="service" className={styles.formLabel}>
            And I Want
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            className={styles.formSelect}
          >
            <option value="">Select an Option</option>
            <option value="Website">A Website</option>
            <option value="App">An App</option>
          </select>
          {formErrors.service && (
            <p className={styles.errorMessage}>{formErrors.service}</p>
          )}
        </div>
        <div className="flex justify-between items-end w-full border-b border-slate-500 relative">
          <label htmlFor="email" className={styles.formLabel}>
            Contact Me At
          </label>
          <input
            name="email"
            type="text"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            className={styles.formInput}
            placeholder="Insert Your Email..."
          />
          {formErrors.email && (
            <p className={styles.errorMessage}>{formErrors.email}</p>
          )}
        </div>
        <button className="btn">
          Submit
          <Image
            src="./btn-logo.svg"
            alt="konten logo green"
            width={21}
            height={21}
          />
        </button>
      </form>
      {showModal && <SuccessModal onClose={handleClose} />}
    </div>
  );
}

function SuccessModal({ onClose }: SuccessModalProps) {
  return (
    <div className={styles.successModal}>
      <div className={styles.successModalCard}>
        <span>Thank you for your message!</span>
        <p>We will get back to you shortly.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
