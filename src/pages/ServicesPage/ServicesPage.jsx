import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import {
  FaDesktop,
  FaMobileAlt,
  FaPenFancy,
  FaRobot,
  FaCloud,
  FaCogs,
} from "react-icons/fa";
import { WhyChooseUs, ServicesCard } from "../../components/component";

// Sample services data
const services = [
  {
    title: "Full-Stack Development",
    description:
      "Expert solutions for web and mobile applications using technologies like .NET, React, Angular, and Python, ensuring seamless integrations and robust performance.",
    icon: <FaDesktop />, // You can update the icon to the one that fits best
    bgColor: "#13c4a1",
  },
  {
    title: "UI/UX Design & Branding",
    description:
      "Create intuitive UI/UX designs and comprehensive branding strategies, including logos, typography, and responsive designs to enhance your user experience.",
    icon: <FaMobileAlt />,
    bgColor: "#6610f2",
  },
  {
    title: "Content Creation & Digital Strategies",
    description:
    "Deliver scalable content and strategies, including blogs, videos, and SEO-optimized campaigns, to boost visibility and engagement.",
    icon: <FaPenFancy />,
    bgColor: "#fc3549",
  },
  {
    title: "Software Testing",
    description:
      "Ensure flawless functionality with comprehensive software testing services, including manual and automation testing for UI, API, and accessibility.",
    icon: <FaCogs />,
    bgColor: "#ffb700",
  },

  {
    title: "Data Science & AI Solutions",
    description:
      "Leverage the power of AI and machine learning with custom models and scalable cloud-based solutions to solve complex business challenges.",
    icon: <FaRobot />,
    bgColor: "#00d280",
  },
  {
    title: "Cloud Integration & DevOps",
    description:
      "Optimize your cloud services with AWS, Azure, and Google Cloud integration and streamline deployment processes through efficient DevOps practices.",
    icon: <FaCloud />,
    bgColor: "#ff612f",
  },
];

const ServicesPage = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      offset: 100, // Offset from the viewport
      easing: "ease-in-out", // Animation easing
      once: true, // Trigger animations only once
    });
  }, []);

  return (
    <>
      <section className="py-16 sm:px-16" aria-label="All Services Section">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <h2
            className="text-3xl md:text-4xl text-gray-800 font-bold mb-6"
            data-aos="fade-up"
            data-aos-delay="100" // Delay for title animation
          >
            Our Services
            <div
              className="bg-CustomYellow mt-3 mb-6 h-1 w-32"
              data-aos="fade-right"
              data-aos-delay="200" // Delay for line animation
            ></div>
          </h2>

          {/* Services Grid */}
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <li
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100} // Dynamic delay based on index for staggered animation
              >
                <ServicesCard {...service} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section>
        <div className="container mx-auto px-4 text-center">
          <WhyChooseUs />
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
