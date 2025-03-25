import React from "react";
import Link from "next/link";
const PrivacyPolicy = () => {
  return (
    <div className="prose prose-lg mx-auto p-6 font-inter">
      <h1>Privacy Policy</h1>
      <p><strong>GoodBites</strong> was built with privacy in mind.</p>
      <p>
        Your files, such as links, images, and documents, are stored locally on your device. You are the only person who can access this data. We do not track you, sell personal data, or embed ad networks in the app.
      </p>

      <h2>Consent</h2>
      <p>
        By using <strong>GoodBites</strong>, you hereby consent to our Privacy Policy and agree to its terms.
      </p>

      <h2>Collected Data</h2>
      <p>
        <strong>GoodBites</strong> is designed with your privacy in mind. Therefore, we do not collect, store, or have access to any personal data or information stored in the app.
        Your data is stored locally on your device. Please refer to <Link className="text-(--strong-blue)" href={"https://www.apple.com/legal/privacy/en-ww/"} target="_blank">Apple&apos;s Privacy Policy</Link> to learn more about how your data is processed.
      </p>

      <h2>How We Use Your Information</h2>
      <p>
        Since <strong>GoodBites</strong> does not collect, store, or access any user data, there are no means or purposes for which we could use personal information.
        All data managed by the app is exclusively controlled and accessed by the user, with no third-party access facilitated by <strong>GoodBites</strong>.
      </p>

      <h2>Future Change</h2>
      <p>
        The privacy policy may be updated in the future. Visit this page regularly to be aware of the policy you are agreeing to by using our services.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
