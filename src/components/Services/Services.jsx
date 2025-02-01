import React, { useContext, useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import {
  FaComments,
  FaDesktop,
  FaLightbulb,
  FaMobileAlt,
  FaArchive,
  FaPenFancy

} from "react-icons/fa";
import { Button, ServicesCard } from "../component";
import { themeContext } from "../../Context/Context";

const services = [
  {
    title: "Full-Stack Development",
    description:
      "Expert solutions for web and mobile applications using technologies like .NET, React, Angular, and Python, ensuring seamless integrations and robust performance.",
    icon: <FaDesktop />,
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
      "Develop engaging content and tailored digital strategies to boost online visibility, including blogs, videos, SEO-optimized materials, and audience-specific campaigns.",
    icon: <FaPenFancy />, 
    bgColor: "#fc3549",
  },
  {
    title: "Software Testing",
    description:
      "Ensure flawless functionality with comprehensive software testing services, including manual and automation testing for UI, API, and accessibility.",
    icon: <FaArchive />,
    bgColor: "#ffb700",
  },
  {
    title: "Data Science & AI Solutions",
    description:
      "Leverage the power of AI and machine learning with custom models and scalable cloud-based solutions to solve complex business challenges.",
    icon: <FaLightbulb />,
    bgColor: "#00d280",
  },
  {
    title: "Cloud Integration & DevOps",
    description:
      "Optimize your cloud services with AWS, Azure, and Google Cloud integration and streamline deployment processes through efficient DevOps practices.",
    icon: <FaComments />,
    bgColor: "#ff612f",
  },
];


const Services = () => {

  const {theme} = useContext(themeContext)

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      offset: 100, // Offset from the viewport
      easing: "ease-in-out", // Animation easing
      once: true, // Trigger animations only once
    });
  }, []);

  return (
    <section
      id="service"
      className={` py-16 sm:px-16`}
      aria-label="Services Section"
    >
     <div className={` container mx-auto px-4 text-left`}>

        {/* Section Title */}
        <h2
          className={`${theme === "dark" ? "text-CustomWhite" :  "text-gray-800"} text-3xl md:text-4xl font-bold mb-6`}
          data-aos="fade-up"
        >
          Services We Provide
          <div
            className="bg-CustomYellow mt-3 mb-6 h-1 w-32"
            data-aos="fade-right"
          ></div>
        </h2>

        {/* Section Description */}
        <p
          className={`${theme === "dark" ? "text-CustomWhite" : "text-gray-600"} mb-12`}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          At BlackEdgeTech, we provide high-quality, result-driven solutions
          across Full-Stack Development, UI/UX Design, Software Testing, Digital
          Marketing, and SEO. With decades of combined experience, we help
          businesses thrive in the digital landscape by offering scalable web
          and mobile applications, intuitive designs, robust AI solutions, and
          effective marketing strategies. Our team delivers tailored solutions
          that drive growth, improve performance, and ensure success in today’s
          competitive market.
        </p>

        {/* Services Grid */}
       
        <ul
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 `}
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          {services.slice(0, 3).map((service, index) => (
            <li key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <ServicesCard {...service} />
            </li>
          ))}
        </ul>
        </div>

        {/* View More Button */}
        <div
          className="text-center mt-8"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <Button to="/services" text="View All Services" />
        </div>
     
    </section>
  );
};

export default Services;
