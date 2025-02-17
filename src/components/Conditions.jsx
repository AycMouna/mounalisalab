import React from 'react';
import { ScrollText } from 'lucide-react';

const Conditions = () => {
  const sections = [
    {
      title: "General Terms",
      content: [
        "These terms and conditions govern your use of MounalisaLab's services and website",
        "By using our services, you agree to comply with and be bound by these terms",
        "We reserve the right to modify these terms at any time without prior notice"
      ]
    },
    {
      title: "Service Terms",
      content: [
        "Laboratory services are provided by appointment only",
        "Test results will be delivered within the specified timeframe",
        "Emergency services may be subject to additional fees",
        "Cancellations must be made at least 24 hours in advance"
      ]
    },
    {
      title: "Payment Terms",
      content: [
        "Payment is required at the time of service unless otherwise arranged",
        "We accept major credit cards, cash, and approved insurance plans",
        "Additional fees may apply for expedited services",
        "Refunds are subject to our refund policy"
      ]
    },
    {
      title: "Liability",
      content: [
        "MounalisaLab strives to provide accurate and reliable test results",
        "We are not liable for any indirect, consequential, or incidental damages",
        "Results should be reviewed with qualified healthcare professionals",
        "Patient compliance with preparation instructions is required"
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Terms & Conditions
        </h2>
        <p className="text-xl text-gray-600">
          Please read these terms carefully before using our services
        </p>
      </div>

      <div className="space-y-8">
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.content.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mt-8">
        <h3 className="text-2xl font-semibold mb-4">Acceptance of Terms</h3>
        <p className="text-gray-600">
          By accessing or using MounalisaLab's services, you acknowledge that you have read,
          understood, and agree to be bound by these terms and conditions. If you do not
          agree to these terms, please do not use our services.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mt-8">
        <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
        <p className="text-gray-600">
          If you have any questions about these terms and conditions, please contact us at:
        </p>
        <ul className="space-y-2 mt-4">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Email: legal@mounalisalab.com</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Phone: +1 (555) 123-4567</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Address: 123 Medical Center Drive, Suite 100, City, State 12345</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Conditions;