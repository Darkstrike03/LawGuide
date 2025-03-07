import React from "react";

class PPol extends React.Component {
  render() {
	return (
    <>
    {/* Your JSX content here */}
          <h2 className="text-2xl font-semibold mt-4">1. Introduction</h2>
          <p className="mb-4">Welcome to Law Guide. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.</p>
          
          <h2 className="text-2xl font-semibold mt-4">2. Information We Collect</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Personal Information (name, email, contact details, etc.)</li>
            <li>Usage Data (browsing history, IP address, device details)</li>
            <li>Cookies and Tracking Technologies</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-4">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>To provide and maintain our services</li>
            <li>To personalize user experience</li>
            <li>To improve security and detect fraudulent activities</li>
            <li>To comply with legal obligations</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-4">4. Sharing Your Information</h2>
          <p className="mb-4">We do not sell or trade your personal information. However, we may share data with:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Service providers assisting in operations</li>
            <li>Legal authorities when required by law</li>
            <li>Third parties with your consent</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-4">5. Data Security</h2>
          <p className="mb-4">We implement strong security measures to protect your data from unauthorized access or disclosure.</p>
          
          <h2 className="text-2xl font-semibold mt-4">6. Your Rights</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Access and update your personal information</li>
            <li>Opt-out of marketing communications</li>
            <li>Request deletion of your data</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-4">7. Third-Party Links</h2>
          <p className="mb-4">Our website may contain links to third-party sites. We are not responsible for their privacy policies.</p>
          
          <h2 className="text-2xl font-semibold mt-4">8. Changes to This Privacy Policy</h2>
          <p className="mb-4">We may update this policy from time to time. Continued use of our services implies acceptance of any changes.</p>
          
          <h2 className="text-2xl font-semibold mt-4">9. Contact Us</h2>
          <p>If you have any questions about this policy, please contact us at <strong>[Insert Contact Info]</strong>.</p>
  </>
	);
  }
}

export default PPol;