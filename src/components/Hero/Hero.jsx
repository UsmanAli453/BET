import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import { Icon } from "../../assets";
import { Button } from "../component";
import { useContext } from "react";
import { themeContext } from "../../Context/Context";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing effect
      once: true, // Trigger animation only once
    });
  }, []);
  
  const {theme} = useContext(themeContext)


  return (

    <div className={`min-h-screen ${theme === "dark" ? "bg-CustomDark" : "bg-white"} py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between`}>
      {/* Text Content */}
      <div
        className="text-left max-w-3xl"
        data-aos="fade-left" // AOS Animation
      >
        <h5 className="text-CustomBlue text-sm sm:text-lg border-l-2 border-CustomYellow pl-4 font-semibold tracking-wider uppercase">
          BlackEdgeTech Technology Software Solution Provider
        </h5>
        <h1 className={`${theme === "dark" ? "text-CustomWhite" : "text-gray-800 "}  text-3xl md:text-5xl font-bold leading-tight mt-4`}>
          Transforming Ideas into Reality with Advanced Technology and Expert
          Solutions.
        </h1>
        <p className={` ${theme === "dark" ? "text-CustomWhite" : "text-gray-600"} text-lg mt-6`}>
          At BlackEdgeTech, we deliver transformative technology solutions
          tailored to your needs, driving business growth and operational
          excellence.
        </p>
        <Button to="./contact" text="Contact Us" className="mt-8" />
      </div>

      {/* Illustration */}
      <div
        className="mt-10 md:mt-0"
        data-aos="fade-right" // AOS Animation
      >
        <img
          src={Icon}
          alt="Marketing Illustration"
          className="w-full max-w-md md:max-w-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
