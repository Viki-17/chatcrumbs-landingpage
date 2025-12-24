import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="flex-grow bg-brand-slate-light pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl border border-brand-slate-border p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight text-brand-slate-dark">
            Privacy Policy{" "}
            <span className="text-brand-blue">for ChatCrumbs</span>
          </h1>
          <p className="mb-10 text-lg text-brand-slate-medium border-b border-brand-slate-border pb-6">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8 text-brand-slate-dark leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-brand-slate-dark">
                1. Introduction
              </h2>
              <p className="text-brand-slate-medium">
                ChatCrumbs ("we," "our," or "us") is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use,
                and safeguard your information when you use our Chrome
                Extension. By using ChatCrumbs, you agree to the collection and
                use of information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-brand-slate-dark">
                2. Information We Collect
              </h2>
              <p className="mb-4 text-brand-slate-medium">
                To provide the full functionality of ChatCrumbs, including
                account management, premium features, and core organization
                tools, we collect the following types of data:
              </p>
              <ul className="space-y-4 pl-4">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-blue mt-2.5"></div>
                  <span className="text-brand-slate-medium">
                    <strong className="text-brand-slate-dark block mb-1">
                      Personally Identifiable Information (PII):
                    </strong>{" "}
                    We collect your name and email address when you create an
                    account. This is used to identify you, manage your user
                    profile, and communicate important service updates.
                  </span>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-blue mt-2.5"></div>
                  <span className="text-brand-slate-medium">
                    <strong className="text-brand-slate-dark block mb-1">
                      Authentication Information:
                    </strong>{" "}
                    We collect and store credentials (such as passwords or
                    authentication tokens) to verify your identity and allow you
                    to log in securely across multiple devices.
                  </span>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-blue mt-2.5"></div>
                  <span className="text-brand-slate-medium">
                    <strong className="text-brand-slate-dark block mb-1">
                      Financial and Payment Information:
                    </strong>{" "}
                    If you subscribe to a premium plan, we (or our third-party
                    payment processors) collect payment details such as credit
                    card numbers or transaction history to process fees and
                    manage your subscription status.
                  </span>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-blue mt-2.5"></div>
                  <span className="text-brand-slate-medium">
                    <strong className="text-brand-slate-dark block mb-1">
                      Personal Communications:
                    </strong>{" "}
                    We process data related to your chat interactions
                    (specifically the links, titles, and metadata of the AI
                    chats you save) to enable the core functionality of
                    organizing and retrieving your chat history.
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-brand-slate-dark">
                3. How We Use Your Information
              </h2>
              <p className="mb-4 text-brand-slate-medium">
                We use the collected data for the following purposes:
              </p>
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  "Service Provision",
                  "Account Management",
                  "Payment Processing",
                  "Support & Communication",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 p-4 rounded-xl bg-brand-slate-light/50 border border-brand-slate-border"
                  >
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="font-semibold text-brand-slate-dark">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-brand-slate-dark">
                4. Data Sharing and Third Parties
              </h2>
              <p className="mb-4 text-brand-slate-medium">
                We do not sell your personal data. We may share data with
                trusted third-party service providers solely for the purpose of
                running our service:
              </p>
              <ul className="space-y-3 pl-4">
                <li className="flex gap-3 text-brand-slate-medium">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-blue mt-2.5"></div>
                  <span>
                    <strong>Payment Processors:</strong> To securely handle
                    financial transactions (e.g., Stripe, PayPal).
                  </span>
                </li>
                <li className="flex gap-3 text-brand-slate-medium">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-blue mt-2.5"></div>
                  <span>
                    <strong>Hosting Providers:</strong> To store the database
                    and application content securely.
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-brand-slate-dark">
                5. Data Security
              </h2>
              <p className="text-brand-slate-medium">
                We implement industry-standard security measures, including
                encryption and secure communication protocols (HTTPS), to
                protect your data from unauthorized access, alteration, or
                destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-brand-slate-dark">
                6. Your Rights
              </h2>
              <p className="text-brand-slate-medium">
                You have the right to request access to the personal information
                we hold about you. You may also request the deletion of your
                account and all associated data at any time by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-brand-slate-dark">
                7. Contact Us
              </h2>
              <p className="text-brand-slate-medium">
                If you have any questions about this Privacy Policy, please
                contact us at:{" "}
                <a
                  href="mailto:hello@chatcrumbs.com"
                  className="text-brand-blue hover:underline font-medium"
                >
                  hello@chatcrumbs.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
