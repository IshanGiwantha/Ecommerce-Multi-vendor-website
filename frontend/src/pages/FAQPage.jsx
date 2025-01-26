import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";

const FAQPage = () => {
  return (
    <div>
      <Header activeHeading={5} />
      <Faq />
      <Footer />
    </div>
  );
};

const Faq = () => {
  const [activeTab, setActiveTab] = useState(0); // First FAQ open by default

  const toggleTab = (tab) => {
    setActiveTab(activeTab === tab ? null : tab); // Toggle tab or close if already open
  };

  return (
    <div className={`${styles.section} my-8`}>
      <h2 className="text-3xl font-bold text-white mb-8">FAQ</h2>
      <div className="mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <div className="border-b border-gray-200 pb-4" key={index}>
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleTab(index)}
            >
              <span className="text-lg font-medium text-white">{faq.question}</span>
              {activeTab === index ? (
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>
            {activeTab === index && (
              <div className="mt-4">
                <p className="text-base text-gray-300">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "How can I sell my handcrafted items on SOKARI?",
    answer:
      "To become a seller on SOKARI, create an artisan account by clicking on the 'Join as an Artisan' button on our homepage. After completing your profile, submit your product details for review. Once approved, you can start showcasing and selling your handcrafted items to a global audience.",
  },
  {
    question: "What payment options are available for customers?",
    answer:
      "We accept a variety of payment methods, including Visa, Mastercard, PayPal, and local payment options such as Cash on Delivery (COD) for Sri Lankan customers. All transactions are secure and encrypted to protect your information.",
  },
  {
    question: "Are there any fees for artisans to list their products?",
    answer:
      "SOKARI offers a free listing option for artisans, but a small commission fee is charged per successful sale to support platform operations. Detailed information about fees can be found in our seller terms and conditions.",
  },
  {
    question: "Can I customize an item before purchasing?",
    answer:
      "Yes, many of our artisans offer customization options for their products. You can contact the artisan directly using the 'Request Customization' button on the product page to discuss your preferences before placing the order.",
  },
  {
    question: "What should I do if I receive a damaged product?",
    answer:
      "If you receive a damaged or defective product, please contact us within 7 days of delivery with photos of the item and packaging. Our team will review your case and arrange for a replacement or refund as per our return policy.",
  },
];

export default FAQPage;
