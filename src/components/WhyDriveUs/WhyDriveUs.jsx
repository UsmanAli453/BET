import React,{useContext} from "react";
import { FaBrain, FaCloud, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion"; // For animations
import { themeContext } from "../../Context/Context";



const WhyDrivesUs = () => {

  const {theme} = useContext(themeContext)

  const pillars = [
    {
      icon: <FaBrain />,
      title: "AI-Driven Solutions",
      description:
        "Harnessing the power of artificial intelligence to deliver cutting-edge innovations across industries.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Scalability",
      description:
        "Building systems that adapt and grow seamlessly, powered by Google’s robust cloud infrastructure.",
    },
    {
      icon: <FaHandshake />,
      title: "Collaborative Synergy",
      description:
        "Partnering with global teams to redefine tech excellence through shared vision and goals.",
    },
  ];

  return (
  <section className={`${theme === "dark" ? "bg-CustomDark" : "bg-white"} text-CustomBlack py-16 lg:py-24 sm:px-[6.5rem]`}>
      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-left text-3xl lg:text-4xl font-bold mb-4 text-black">
          What Drives Us
        </h2>
        <div className="bg-CustomYellow mb-6 h-1 w-32"></div>

        {/* Pillars Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className={` ${theme === "dark" ? "bg-CustomDark" : "bg-white"} border-2 border-CustomBlue rounded-lg p-8  flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:bg-CustomBlue group`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-5xl text-CustomBlue group-hover:text-CustomYellow mb-4 transition duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold text-CustomBlack mb-3 group-hover:text-white transition duration-300">
                {pillar.title}
              </h3>
              <p className="text-gray-700 group-hover:text-white transition duration-300">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-CustomBlack text-white py-12 px-6 rounded-lg shadow-md">
          <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left space-y-8 lg:space-y-0 lg:space-x-8">
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-5xl font-extrabold text-center text-CustomYellow">
                1k+
              </h3>
              <p className="text-gray-300 text-center mt-2">
                Active users powered by our solutions.
              </p>
            </motion.div>
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-5xl font-extrabold text-center text-CustomYellow">
                99.9%
              </h3>
              <p className="text-gray-300 text-center mt-2">
                Uptime achieved with Development.
              </p>
            </motion.div>
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-5xl font-extrabold text-center text-CustomYellow">
                150+
              </h3>
              <p className="text-center text-gray-300 mt-2">
                Enterprises transformed globally.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDrivesUs;
