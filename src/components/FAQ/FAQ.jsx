import React, { useContext, useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { MdOutlineQuestionMark } from "react-icons/md";
import { Button } from "../component";
import AOS from "aos"; // Import AOS
import { themeContext } from "../../Context/Context";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // Initialize AOS
  }, []);

  return (
    <div className={`flex flex-wrap lg:flex-nowrap px-4 py-10 lg:px-20 justify-between gap-8 ${theme === "dark" ? "bg-CustomDark" : "bg-white"}`}>
      {/* Left Section */}
      <div className="w-full mx-4 lg:w-1/2" data-aos="fade-up">
        <h5 className="uppercase font-semibold text-lg text-[#03a9fa] pl-10 relative">
          FAQ
          <span className="absolute left-0 top-1/2 transform -translate-y-1/2 h-[2px] w-8 bg-[#f3c110]"></span>
        </h5>
        <h2 className={`text-3xl lg:text-4xl font-bold mt-5 mb-7 sm:max-w-[80%] ${theme === "dark" ? "text-CustomWhite" : " text-[#1f2937]"}`}>
          Get quick answers to common questions about our services, processes,
          and support.{" "}
        </h2>
        <Button to="/faq" text="View All" />
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2" data-aos="fade-right">
        <div className="w-full max-w-lg">
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
    </div>
  );
}
