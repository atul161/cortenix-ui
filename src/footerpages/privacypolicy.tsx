//import Footer from "@/components/layout/Footer";
import "@/styles/terms.css";

export default function PrivacyPolicy() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy for PeakVelocity.ai</h1>
        {/* <p className="text-sm mb-4">Effective Date: [6 Jan 2025]&apos;s</p> */}

        <p className="mb-4">
          At PeakVelocity.ai, we prioritize your privacy and are committed to safeguarding the personal information you share with us through our website, <a href="https://www.peakvelocity.ai" className="text-blue-600">https://www.peakvelocity.ai</a> (“Website”). This Privacy Policy outlines how we collect, use, and protect the information you provide while engaging with our IT services and solutions (“Services”).
        </p>
        <p className="mb-4">
          For brevity, any personal information or personally identifiable information (such as your name, email address, phone number, organization name, etc.) collected by us is referred to as “Personal Information.”
        </p>

        <h2 className="text-xl font-bold mb-2">1. Applicability</h2>
        <p className="mb-4">
          <strong>EU Residents:</strong> This Privacy Policy complies with the EU General Data Protection Regulation (GDPR). Under GDPR, PeakVelocity.ai acts as the Controller for your Personal Information.
        </p>
        <p className="mb-4">
          <strong>Non-EU Residents:</strong> By accessing or using the Website, you agree to this Privacy Policy. If you disagree, please refrain from accessing the Website.
        </p>

        <h2 className="text-xl font-bold mb-2">2. Information We Collect</h2>
        <p className="mb-4">
          We may collect the following types of Personal Information:
        </p>
        <h3 className="font-semibold mb-2">a. Personal Data You Provide</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>First Name and Last Name</li>
          <li>Organization Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Address (including City, State, ZIP/Postal Code, and Country)</li>
        </ul>
        <h3 className="font-semibold mb-2">b. Usage Data</h3>
        <p className="mb-4">
          We may automatically collect information about how the Website is accessed and used, including:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>IP Address</li>
          <li>Browser Type and Version</li>
          <li>Pages Visited</li>
          <li>Time and Date of Visits</li>
          <li>Time Spent on Pages</li>
          <li>Unique Device Identifiers</li>
          <li>Other Diagnostic Information</li>
        </ul>
        <h3 className="font-semibold mb-2">c. Cookies and Tracking</h3>
        <p className="mb-4">
          Cookies are used to track activity on our Website and enhance your user experience. Learn more about cookies in our <a href="/cookie-policy" className="text-blue-600">Cookie Policy</a>.
        </p>
        <h3 className="font-semibold mb-2">d. Resumes and Applications</h3>
        <p className="mb-4">
          If you share your resume or job application, we collect the information provided therein for recruitment purposes.
        </p>

        <h2 className="text-xl font-bold mb-2">3. How We Use Your Information</h2>
        <p className="mb-4">
          We use the collected information to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Provide, maintain, and improve our Website and Services.</li>
          <li>Respond to inquiries or provide customer support.</li>
          <li>Send updates, newsletters, or marketing communications (you can opt out at any time).</li>
          <li>Analyze user behavior for improving Website functionality.</li>
          <li>Comply with legal and regulatory requirements.</li>
        </ul>

        <h2 className="text-xl font-bold mb-2">4. Google Analytics</h2>
        <p className="mb-4">
          We use Google Analytics to understand user interactions on our Website. Google Analytics uses cookies to track user activity. You can opt out by visiting <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600">Googles opt-out page</a>.
        </p>

        <h2 className="text-xl font-bold mb-2">5. Data Accuracy and Responsibility</h2>
        <p className="mb-4">
          Ensure the Personal Information you provide is accurate and up to date. If you are submitting information on behalf of a third party, ensure you have their authorization.
        </p>

        <h2 className="text-xl font-bold mb-2">6. Sharing and Security of Your Information</h2>
        <p className="mb-4">
          <strong>Third-Party Sharing:</strong> Your information will not be sold or shared with unauthorized parties. It may be shared with service providers or partners only for delivering our Services.
        </p>
        <p className="mb-4">
          <strong>Security Measures:</strong> We employ robust security measures to protect your data. However, no system is entirely foolproof, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-xl font-bold mb-2">7. Your Data Rights</h2>
        <p className="mb-4">
          Depending on your location, you may have the right to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Access your Personal Information.</li>
          <li>Correct or update your data.</li>
          <li>Request data deletion.</li>
          <li>Object to certain processing activities.</li>
          <li>Withdraw consent where applicable.</li>
        </ul>
        <p className="mb-4">
          To exercise these rights, contact us at <a href="mailto:privacy@peakvelocity.ai" className="text-blue-600">privacy@peakvelocity.ai</a>.
        </p>

        <h2 className="text-xl font-bold mb-2">8. Changes to This Privacy Policy</h2>
        <p className="mb-4">
          This Privacy Policy may be updated periodically. Any significant changes will be communicated through:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>A prominent notice on our Website.</li>
          <li>Email notification (if applicable).</li>
        </ul>

        <h2 className="text-xl font-bold mb-2">9. Contact Us</h2>
        <p className="mb-4">
          For questions or concerns regarding this Privacy Policy, contact us at:
        </p>
        <address className="mb-4">
          <strong>PeakVelocity.ai</strong><br />
          Email: <a href="mailto:admin@peakvelocity.ai" className="text-blue-600">admin@peakvelocity.ai</a><br />
          Website: <a href="https://www.peakvelocity.ai" className="text-blue-600">https://www.peakvelocity.ai</a>
        </address>

        <p className="mb-4">This Privacy Policy was last updated on [6th Jan 2025].</p>
      </div>
      {/* <Footer /> */}
    </>
  );
}
