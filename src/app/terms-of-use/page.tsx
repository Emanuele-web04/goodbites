import React from "react";

const TermsOfUse = () => {
  return (
    <div className="prose max-w-3xl mx-auto px-4 py-8 font-inter">
      <h1>Terms of Use</h1>

      <h2>1. Agreement to Terms</h2>
      <p>
        By downloading or using the <strong>GoodBites</strong> app, you agree to be
        bound by the Apple Licensed Application End User License Agreement (EULA).
        Please review the full agreement here:{" "}
        <a
          href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apple EULA
        </a>
        .
      </p>

      <h2>2. No Data Collection</h2>
      <p>
        <strong>GoodBites</strong> does not collect, store, or share any personal data.
        The app is fully functional without requiring user data input.
      </p>

      <h2>3. Intellectual Property</h2>
      <p>
        All content and functionality in the app are the property of{" "}
        <strong>Emanuele Di Pietro</strong>, and are protected by applicable laws.
        <strong> GoodBites</strong> is an unregistered trademark of{" "}
        <strong>Emanuele Di Pietro</strong>.
      </p>

      <h2>4. Restrictions</h2>
      <p>
        You agree not to misuse the app or engage in any activity that is unlawful,
        abusive, or infringes upon intellectual property rights.
      </p>

      <h2>5. Disclaimer</h2>
      <p>
        The app is provided "as is" without warranties of any kind.{" "}
        <strong>Emanuele Di Pietro</strong> disclaims all warranties, including
        merchantability and fitness for a particular purpose.
      </p>

      <h2>6. Governing Law</h2>
      <p>These terms are governed by the laws of Italy.</p>
    </div>
  );
};

export default TermsOfUse;
