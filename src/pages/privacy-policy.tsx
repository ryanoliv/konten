import Link from "next/link";
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.konten.dev/privacy-policy" />
        <title>Konten | Privacy Policy: Protecting Your Data</title>
        <meta
          name="description"
          content="Konten's commitment to protecting your personal information and privacy. Learn about our data collection, usage, and sharing practices."
        />
      </Head>
      <section className="container flex flex-col items-center">
        <h1 className="legal-main-title">Privacy Policy for Konten</h1>
        <div className="flex flex-col gap-12 legal-container">
          <div className="flex flex-col gap-2">
            <h2 className="legal-intro">Introduction</h2>
            <h3 className="legal-intro-subtext">
              This Privacy Policy outlines how Konten (&quot;we&quot;,
              &quot;our&quot;, or &quot;us&quot;) collects, uses, maintains, and
              discloses information collected from users (each, a
              &quot;User&quot;) of the{" "}
              <Link href="https://www.konten.dev" className="legal-link">
                www.konten.dev
              </Link>{" "}
              website (&quot;Site&quot;) and any of our services
              (&quot;Services&quot;). By accessing our Site and using our
              Services, Users agree to the collection and use of information in
              accordance with this policy.
            </h3>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="legal-title">Information Collection And Use</h2>
            <p className="legal-subtitle">
              We may collect personal identification information from Users in
              various ways, including, but not limited to, when Users visit our
              site, register on the site, place an order, subscribe to the
              newsletter, fill out a form, and in connection with other
              activities, services, features, or resources we make available on
              our Site. Users may be asked for, as appropriate, name, email
              address, mailing address, phone number. Users can always refuse to
              supply personally identification information, except that it may
              prevent them from engaging in certain Site related activities.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="legal-title">How we use your information</h2>
            <p className="legal-subtitle">
              We will use your personal information only for the purposes for
              which it was collected and agreed with you. In addition, where
              necessary your information may be retained for legal or research
              purposes.
            </p>
            <ul className="legal-list">
              <p>For example:</p>
              <li>To gather contact information;</li>
              <li>
                To confirm and verify your identity or to verify that you are an
                authorised user for security purposes;
              </li>
              <li>
                For the detection and prevention of fraud, crime, money
                laundering or other malpractice;
              </li>
              <li>
                To conduct market or customer satisfaction research or for
                statistical analysis;
              </li>
              <li>For audit and record keeping purposes;</li>
              <li>In connection with legal proceedings.</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="legal-title">Disclosure of information</h2>
            <p className="legal-subtitle">
              We may disclose your personal information to our service providers
              who are involved in the delivery of products or services to you.
              We have agreements in place to ensure that they comply with the
              privacy requirements as required by the Protection of Personal
              Information Act.
            </p>
            <ul className="legal-list">
              <p>We may also disclose your information:</p>
              <li>
                Where we have a duty or a right to disclose in terms of law or
                industry codes;
              </li>
              <li>Where we believe it is necessary to protect our rights.</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="legal-title">Information Security</h2>
            <p className="legal-subtitle">
              We are legally obliged to provide adequate protection for the
              personal information we hold and to stop unauthorized access and
              use of personal information. We will, on an on-going basis,
              continue to review our security controls and related processes to
              ensure that your personal information remains secure.
            </p>
            <ul className="legal-list">
              <p>Our security policies and procedures cover:</p>
              <li>Physical security;</li>
              <li>Computer and network security;</li>
              <li>Access to personal information;</li>
              <li>Secure communications;</li>
              <li>Security in contracting out activities or functions;</li>
              <li>Retention and disposal of information;</li>
              <li>Acceptable usage of personal information;</li>
              <li>Governance and regulatory issues;</li>
              <li>Monitoring access and usage of private information;</li>
              <li>Investigating and reacting to security incidents.</li>
            </ul>
            <p className="legal-subtitle">
              When we contract with third parties, we impose appropriate
              security, privacy and confidentiality obligations on them to
              ensure that personal information that we remain responsible for,
              is kept secure. We will ensure that anyone to whom we pass your
              personal information agrees to treat your information with the
              same level of protection as we are obliged to.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="legal-title">Your Rights: Access to information</h2>
            <p className="legal-subtitle">
              You have the right to request a copy of the personal information
              we hold about you. To do this, simply contact us at the
              numbers/addresses as provided on our website and specify what
              information you require. We will need a copy of your ID document
              to confirm your identity before providing details of your personal
              information. Please note that any such access request may be
              subject to a payment of a legally allowable fee.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="legal-title">Correction of your information</h2>
            <p className="legal-subtitle">
              You have the right to ask us to update, correct or delete your
              personal information. We will require a copy of your ID document
              to confirm your identity before making changes to personal
              information we may hold about you. We would appreciate it if you
              would keep your personal information accurate.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="legal-title">Definition of personal information</h2>
            <p className="legal-subtitle">
              According to the Act &quot;personal information&quot; means
              information relating to an identifiable, living, natural person,
              and where it is applicable, an identifiable, existing juristic
              person. Further to the POPI Act, COR Concepts also includes the
              following items as personal information:
            </p>
            <ul className="legal-list">
              <li>
                All addresses including residential, postal and email addresses.
              </li>
              <li>
                Change of name – for which we require copies of the marriage
                certificate or official change of name document issued by the
                state department.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="legal-title">How to contact us</h2>
            <p className="legal-subtitle">
              If you have any queries about this notice; you need further
              information about our privacy practices; wish to withdraw consent;
              exercise preferences or access or correct your personal
              information, please contact us at the numbers/addresses listed on
              our website.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
