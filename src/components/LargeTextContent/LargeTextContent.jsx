import React, { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { themeContext } from "../../Context/Context";

const data = {
  title: "Why Choose Our Services for Your Business Growth",
  introduction: `In today's fast-paced digital world, leveraging the right services can help businesses gain a competitive edge. From innovative web and mobile development to impactful marketing strategies, each service is designed to meet unique business needs and drive success.`,
  benefits: [
    {
      title: "Full-Stack Development",
      points: [
        "Comprehensive Solutions: Full-stack development covers both front-end and back-end, ensuring seamless integration and robust performance.",
        "Scalability: Custom-built apps designed for growth, ensuring that your business can scale effortlessly as it expands.",
      ],
    },
    {
      title: "UI/UX Design & Branding",
      points: [
        "Enhanced User Experience: Our design solutions focus on intuitive user interfaces that drive engagement and satisfaction.",
        "Strong Brand Identity: We help build cohesive branding strategies that resonate with your audience, creating a memorable impact.",
      ],
    },
    {
      title: "Social Media Marketing",
      points: [
        "Increased Engagement: Targeted strategies to boost brand visibility and foster deeper connections with your audience.",
        "Data-Driven Campaigns: We use insights and analytics to optimize campaigns, ensuring maximum reach and engagement.",
      ],
    },
    {
      title: "Software Testing",
      points: [
        "Flawless Performance: We ensure your application runs smoothly through thorough manual and automation testing.",
        "Security and Compliance: Comprehensive testing to ensure your software is secure and compliant with industry standards.",
      ],
    },
    {
      title: "Data Science & AI Solutions",
      points: [
        "Advanced Analytics: Leverage data-driven insights to make smarter business decisions and uncover new opportunities.",
        "AI-Powered Innovation: Custom AI models to solve complex problems and improve operational efficiency.",
      ],
    },
    {
      title: "Cloud Integration & DevOps",
      points: [
        "Optimized Infrastructure: Seamless integration with cloud services like AWS, Azure, and Google Cloud for improved scalability.",
        "Efficient DevOps Practices: Streamlined deployment processes and continuous delivery to enhance productivity.",
      ],
    },
  ],
};

const LargeTextContent = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // Initialize AOS with desired options
  }, []);

  const {theme} = useContext(themeContext)

  return (
    <div className={`py-16 max-w-8xl px-8 sm:px-[5rem] space-y-6 text-left`}>
      {/* Title */}
      <h1
        className={` text-gray-800 text-4xl font-bold`}
        data-aos="fade-up" // AOS animation type
      >
        {data.title}
      </h1>

      {/* Introduction */}
      <p
        className={` ${theme === "dark" ? "text-CustomWhite" : " text-gray-600"} text-lg`}
        data-aos="fade-up" // AOS animation type
        data-aos-delay="200" // Delay the animation by 200ms
      >
        {data.introduction}
      </p>

      {/* Benefits Section */}
      <div className="space-y-8">
        {data.benefits.map((benefit, index) => (
          <div
            key={index}
            data-aos="fade-up" // AOS animation type
            data-aos-delay={index * 200 + 300} // Staggered animation
          >
          <h2 className={` ${theme === "dark" ? "text-CustomWhite" : " text-gray-800"} text-xl font-semibold mb-4`}>
              {benefit.title}
            </h2>
          <ul className={` ${theme === "dark" ? "text-CustomWhite" : " text-gray-700"} space-y-2`}>
              {benefit.points.map((point, idx) => (
                <li key={idx} className="text-md">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LargeTextContent;
