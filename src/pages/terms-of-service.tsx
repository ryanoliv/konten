import Link from "next/link";
import Head from "next/head";

export default function TermsOfService() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.konten.dev/terms-of-service" />
        <title>Konten | Terms of Service</title>
        <meta
          name="description"
          content="The comprehensive Terms of Service for Konten. Dive deep into understanding your rights, obligations, and the conditions guiding your usage of our services."
        />
      </Head>
      <div className="container flex flex-col items-center">
        <h1 className="legal-main-title">Terms of Service</h1>
        <p className="legal-date">Effective date: 27 February 2024</p>
        <div className="flex flex-col gap-12 legal-container">
          <div className="flex flex-col gap-2">
            <h2 className="legal-intro">Introduction</h2>
            <h3 className="legal-intro-subtext">
              Welcome to Konten. By accessing our website at{" "}
              <Link href="https://www.konten.dev" className="legal-link">
                www.konten.dev
              </Link>{" "}
              or using our services, you agree to be bound by these terms and
              conditions. Please read them carefully.
            </h3>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="legal-title">Services Offered</h2>
            <p className="legal-subtitle">
              Konten provides professional web and app development services,
              including but not limited to user experience design, user
              interface design, web development, app development, and SEO
              services.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="legal-title">Acceptance of Terms</h2>
            <p className="legal-subtitle">
              By using our services, you confirm that you have read, understood,
              and agreed to these terms of service. If you do not agree with any
              part of these terms, you must not use our services.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="legal-title">User Obligations</h2>
            <p className="legal-subtitle">
              Users agree to use Konten&apos;s services for lawful purposes only
              and are prohibited from violating any applicable laws and
              regulations. Users must not transmit any malware, viruses, or any
              other harmful code.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="legal-title">Intellectual Property Rights</h2>
            <p className="legal-subtitle">
              All intellectual property rights in the services provided,
              including but not limited to software, documentation, and design,
              are owned by Konten or its licensors. Users are granted a
              non-exclusive, non-transferable license to use the products or
              services provided by Konten solely for their intended purpose.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="legal-title">Payment and Fees</h2>
            <p className="legal-subtitle">
              Details regarding the payment for services rendered by Konten,
              including any recurring fees, project-based fees, and methods of
              payment, will be agreed upon in advance and outlined in a separate
              agreement or invoice.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="legal-title">Limitation of Liability</h2>
            <p className="legal-subtitle">
              Konten will not be liable for any indirect, incidental, special,
              consequential, or punitive damages resulting from the use of our
              services.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="legal-title">Termination</h2>
            <p className="legal-subtitle">
              Konten reserves the right to terminate or suspend access to our
              services immediately, without prior notice or liability, for any
              reason, including breach of these Terms.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="legal-title">Changes to Terms</h2>
            <p className="legal-subtitle">
              Konten reserves the right to modify or replace these terms at any
              time. It is the user&apos;s responsibility to review these terms
              periodically for changes.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="legal-title">Governing Law</h2>
            <p className="legal-subtitle">
              These terms shall be governed and construed in accordance with the
              laws of South Africa, without regard to its conflict of law
              provisions.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="legal-title">Contact Us</h2>
            <p className="legal-subtitle">
              For any questions about these Terms, please contact us.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
