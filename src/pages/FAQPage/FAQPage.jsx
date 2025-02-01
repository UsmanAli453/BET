import React, { useContext, useEffect } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { MdOutlineQuestionMark } from "react-icons/md";
import { useState } from "react";
import AOS from "aos";
import { themeContext } from "../../Context/Context";

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animation happens only once
    });
  }, []);

  const {theme} = useContext(themeContext)

  const faqs = [
    {
      question: "What is BlackEdgeTech?",
      answer:
        "BlackEdgeTech is a technology solutions provider specializing in full-stack development, UI/UX design, software testing, digital marketing, and AI solutions. We help businesses grow with cutting-edge technologies and tailored strategies.",
    },
    {
      question: "What services do you offer?",
      answer:
        "We offer a wide range of services including Full-Stack Development, UI/UX Design & Branding, Software Testing, Digital Marketing & SEO, Data Science & AI Solutions, and Cloud Integration & DevOps.",
    },
    {
      question: "How can I contact you?",
      answer:
        "You can contact us through our website's contact form, via email, or by reaching out on our social media platforms. Our team will get back to you as soon as possible.",
    },
    // Add more FAQs here
    {
      question: "How do I start a project with BlackEdgeTech?",
      answer:
        "To start a project, simply reach out to us through the contact form or email. We'll schedule a consultation to understand your needs and tailor a solution for your business.",
    },
    {
      question: "Do you offer ongoing support?",
      answer:
        "Yes, we offer ongoing support and maintenance to ensure your solutions continue to run smoothly after implementation.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We use a wide range of technologies including React, Angular, Python, Node.js, .NET, AWS, Azure, and Google Cloud. We choose the best tools based on your project needs.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10 mt-10">
      <h2
        className="text-left text-3xl lg:text-4xl font-bold mb-4 text-black"
        data-aos="fade-up"
      >
        FAQ about BlackEdge Technology
      </h2>
      <div className="bg-CustomYellow mb-6 h-1 w-32" data-aos="fade-up"></div>
      <div data-aos="fade-right">
      {faqs.map((faq, index) => (
            <div
              key={index}
              className={`mb-5 rounded-lg ${theme === "dark" ? "bg-CustomDark" : " bg-white " }transition-transform duration-300 ${
                activeIndex === index ? "transform translate-y-[-5px]" : ""
              }`}
            >
              <div
                className={`flex justify-between items-center px-5 py-4 text-xl cursor-pointer transition-bg duration-300 ${
                  activeIndex === index ? `${theme === "dark" ? "bg-CustomDark" : "bg-[#eaf4fb]"}` : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className={`flex items-center gap-4 ${theme === "dark" ? "text-CustomWhite" : "text-black"}`}>
                  <div className="bg-[#f3c110] p-2 rounded-full">
                    <MdOutlineQuestionMark className="text-white" />
                  </div>
                  {faq.question}
                </div>
                <span className="text-[#03a9fa] text-xl">
                  {activeIndex === index ? <FaAngleDown /> : <FaAngleRight />}
                </span>
              </div>
              <div
                className={`text-sm text-[#666] leading-6 max-h-0 overflow-hidden transition-all duration-300 ${
                  activeIndex === index
                    ? "max-h-[200px] opacity-100"
                    : "opacity-0"
                }`}
              >
                <p className="p-5">{faq.answer}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
