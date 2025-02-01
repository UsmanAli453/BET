import React, { useEffect } from "react";
import img from "../../assets/images/work-img.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; 

const Work = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-7 md:p-10 gap-8">
      <div
        className="flex-1 text-center pl-7  md:text-left"
        data-aos="fade-up"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Transforming Ideas into Reality with Advanced Technology and Expert Solutions.
        </h2>
        <div className="w-16 h-1 bg-CustomYellow my-4 mx-auto md:mx-0"></div>
        <ul className="space-y-4 md:space-y-6">
          <li className="flex items-start">
            <span className="text-blue-500 text-lg mr-2">•</span>
            Custom web development tailored to meet your specific needs.
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 text-lg mr-2">•</span>
            Innovative designs that enhance user experience and engagement.
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 text-lg mr-2">•</span>
            High-performance websites optimized for speed and functionality.
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 text-lg mr-2">•</span>
            Seamless integration of APIs and third-party services.
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 text-lg mr-2">•</span>
            Comprehensive support and maintenance to ensure your site stays up-to-date.
          </li>
        </ul>
      </div>

      <div
        className="flex-1 flex justify-center"
      >
        <img
          src={img}
          alt="Team Collaboration"
          className="w-full md:w-[30rem] rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Work;
