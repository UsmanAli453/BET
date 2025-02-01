import React, { useEffect } from "react";
import {
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaRobot,
  FaCogs,
  FaChartBar,
} from "react-icons/fa";
import { Icon } from "../../assets";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import { useContext } from "react";
import { themeContext } from "../../Context/Context";

const MinimalSectionAbout = () => {
  const iconMap = {
    FaCode: <FaCode />,
    FaMobileAlt: <FaMobileAlt />,
    FaCloud: <FaCloud />,
    FaShieldAlt: <FaRobot />,
    FaChartBar: <FaChartBar />,
    FaCogs: <FaCogs />,
  };



  const cardItems = [
    { icon: "FaCode", title: "Full Stack Development" },
    { icon: "FaMobileAlt", title: "Mobile App Development" },
    { icon: "FaCloud", title: "Cloud Integration & DevOps" },
    { icon: "FaShieldAlt", title: "Data Science & AI Solutions" },
    { icon: "FaCogs", title: "Software Testing" },
    { icon: "FaChartBar", title: "Scalable Solutions" },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animation happens only once
    });
  }, []);

 

  return (
  <section className={`flex flex-col lg:flex-row items-center max-w-8xl mx-auto sm:mx-[6rem]`}>
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h2
          className="text-left text-3xl lg:text-4xl font-bold mb-4 text-black"
          data-aos="fade-up"
        >
          About BlackEdgeTech
        </h2>
        <div className="bg-CustomYellow mb-6 h-1 w-32" data-aos="fade-up"></div>
        <p
          className="text-gray-700 mb-8 text-left"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          At BlackEdgeTech, we specialize in delivering cutting-edge technology
          solutions to empower businesses. From custom software and mobile
          applications to cloud solutions and cybersecurity, we are committed to
          innovation and excellence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cardItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center border rounded-lg p-6 text-left hover:bg-CustomBlue hover:border-white group transition duration-300 ease-in-out"
              data-aos="fade-up"
              data-aos-delay={index * 100} // Adding delay to stagger the animations
            >
              <div className="text-4xl text-CustomBlue group-hover:text-white transition duration-300 ease-in-out">
                {iconMap[item.icon]}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 ml-4 group-hover:text-white transition duration-300 ease-in-out">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div
        className="lg:w-1/2 flex justify-center lg:justify-self-end"
        data-aos="fade-left"
      >
        <img
          src={Icon}
          alt="BlackEdgeTech Solutions"
          className="w-full h-auto max-w-sm object-cover"
        />
      </div>
    </section>
  );
};

export default MinimalSectionAbout;
