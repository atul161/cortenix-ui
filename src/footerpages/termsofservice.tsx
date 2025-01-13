//import Footer from "@/components/Section/Footer";
import "@/styles/terms.css";

export default function TermsAndConditionsPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
        <p className="text-sm mb-4">Last Updated: [6 Jan 2025]</p>
        
        <p className="mb-4">
          Welcome to PeakVelocity.ai (“PeakVelocity,” “we,” “us,” or “our”). These Terms of Service (“Terms”) govern your use of our platform, products, and IT services (collectively, the “Services”). By accessing or using our Services, you agree to these Terms. If you do not agree, you may not use our Services.
        </p>

        <h2 className="text-xl font-bold mb-2">1. Eligibility</h2>
        <p className="mb-4">
          You must be at least 18 years old or have the consent of a parent or legal guardian to use our Services.
        </p>
        <p className="mb-4">
          By using our Services, you confirm that you have the legal authority to enter into this agreement.
        </p>

        <h2 className="text-xl font-bold mb-2">2. Use of Services</h2>
        <p className="text-sm mb-3">a. License to Use</p>
        <p className="mb-4">
          We grant you a limited, non-exclusive, non-transferable license to access and use our Services for personal or professional purposes, as applicable, in compliance with these Terms.
        </p>

        <p className="text-sm mb-3">b. Prohibited Conduct</p>
        <p className="mb-4">
          You agree not to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Use our Services for any unlawful or prohibited activities.</li>
          <li>Reverse engineer, decompile, or attempt to extract the source code of our Services.</li>
          <li>Upload, transmit, or distribute harmful or malicious content.</li>
          <li>Resell, redistribute, or sublicense our Services without prior written consent.</li>
        </ul>

        <h2 className="text-xl font-bold mb-2">3. Content and Intellectual Property</h2>
        <p className="text-sm mb-3">a- Ownership</p>
        <p className="mb-4">
          All content, including but not limited to designs, code, trademarks, and intellectual property, is the exclusive property of PeakVelocity or its licensors.
        </p>
        <p className="text-sm mb-3">b- User-Provided Content</p>
        <p className="mb-4">
          By submitting content (e.g., files, code, or documentation) to PeakVelocity, you grant us a non-exclusive, royalty-free license to use, reproduce, and modify such content for the purpose of providing our Services.
        </p>

        <h2 className="text-xl font-bold mb-2">4. Payments and Fees</h2>
        <p className="mb-4">
          Fees for Services will be clearly communicated during onboarding or checkout. You agree to pay all charges associated with the use of our Services as outlined in the applicable agreement or invoice.
        </p>

        <h2 className="text-xl font-bold mb-2">5. Data Privacy</h2>
        <p className="mb-4">
          Your use of our Services is subject to our Privacy Policy. By using our Services, you consent to the collection, use, and sharing of your information as described in the Privacy Policy.
        </p>

        <h2 className="text-xl font-bold mb-2">6. Third-Party Links and Services</h2>
        <p className="mb-4">
          Our Services may contain links to third-party websites or services. PeakVelocity is not responsible for the content, policies, or practices of any third-party platforms.
        </p>

        <h2 className="text-xl font-bold mb-2">7. Limitation of Liability</h2>
        <p className="mb-4">
          To the fullest extent permitted by law, PeakVelocity shall not be liable for:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Indirect, incidental, or consequential damages arising from your use of the Services.</li>
          <li>Loss of data due to unauthorized access or use.</li>
          <li>Total liability exceeding the amount you paid for the specific Service in question.</li>
        </ul>

        <h2 className="text-xl font-bold mb-2">8. Indemnification</h2>
        <p className="mb-4">
          You agree to indemnify and hold PeakVelocity harmless from any claims, damages, liabilities, or expenses arising from:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Your breach of these Terms.</li>
          <li>Your misuse of our Services.</li>
          <li>Your infringement of third-party rights.</li>
        </ul>

        <h2 className="text-xl font-bold mb-2">9. Termination</h2>
        <p className="mb-4">
          We may terminate or suspend your access to our Services at any time, without prior notice, if you violate these Terms or engage in harmful activities.
        </p>

        <h2 className="text-xl font-bold mb-2">10. Changes to These Terms</h2>
        <p className="mb-4">
          We reserve the right to update or modify these Terms at any time. Changes will take effect upon posting, and your continued use of the Services after changes signifies your acceptance of the updated Terms.
        </p>

        <h2 className="text-xl font-bold mb-2">11. Governing Law</h2>
        <p className="mb-4">
          These Terms are governed by and construed in accordance with the laws of Pune, Maharashtra, India. Any disputes will be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra, India.
        </p>

        <h2 className="text-xl font-bold mb-2">12. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about these Terms, please contact us at:
        </p>
        <address className="mb-4">
          Celebrity Konnections Tech Pvt. Ltd<br />
          The Latitude, NIBM Road, Kondhwa, Pune, 411048<br />
          Email: <a href="mailto:admin@peakvelocity.ai" className="text-blue-600">admin@peakvelocity.ai</a>
        </address>
      </div>
      {/* <Footer /> */}
    </>
  );
}
