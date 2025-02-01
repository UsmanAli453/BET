// import React from "react";
// import { Button } from "../component";

// const CallToAction = () => {
//   return (
//     <section
//       className="relative bg-cover bg-center bg-fixed z-10"
//       style={{
//         backgroundImage:
//           "url('https://ashok-713.github.io/TechTrailblaze-Marketing/assets/images/cta-bg.jpg')",
//       }}
//       aria-label="cta"
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-900 to-CustomBlue opacity-95 z-[-1]"></div>

//       <div className="container mx-auto text-center py-16 px-4">
//         {/* Subtitle */}
//         <p className="text-white text-lg font-medium">
//           So What's the Next Step?
//         </p>

//         {/* Title */}
//         <h2 className="text-white text-3xl md:text-4xl font-bold mt-3 mb-6">
//           Are You Ready? Let's Get to Work!
//         </h2>

//         {/* Button */}
//         <Button text="Get Started" />
//       </div>
//     </section>
//   );
// };

// export default CallToAction;
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "../component";

const CallToAction = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Duration of each animation
      once: true, // Trigger animations only once
      easing: "ease-in-out", // Smooth animations
    });
  }, []);

  return (
    <section
      className="relative bg-cover bg-center bg-fixed z-10"
      style={{
        backgroundImage:
          "url('https://ashok-713.github.io/TechTrailblaze-Marketing/assets/images/cta-bg.jpg')",
      }}
      aria-label="cta"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-900 to-CustomBlue opacity-95 z-[-1]"></div>

      <div className="container mx-auto text-center py-16 px-4">
        {/* Subtitle */}
        <p
          className="text-white text-lg font-medium"
          data-aos="fade-down" // Different animation
          data-aos-delay="100"
        >
          So What's the Next Step?
        </p>

        {/* Title */}
        <h2
          className="text-white text-3xl md:text-4xl font-bold mt-3 mb-6"
          data-aos="zoom-in" // Different animation
          data-aos-delay="300"
        >
          Are You Ready? Let's Get to Work!
        </h2>

        {/* Button */}
        <div data-aos="flip-up" data-aos-delay="500">
          {" "}
          {/* Another animation */}
          <Button to={"/services"} text="Get Started" id="getStarted" />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
