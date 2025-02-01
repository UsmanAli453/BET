// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import target from "../../assets/images/target.png";
// import capture from "../../assets/images/capture.png";

// export default function MissionAndVision() {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   const missionText =
//     "To deliver high-quality, innovative, and customized web development solutions to help businesses achieve their digital goals.";
//   const visionText =
//     "To be the global leader in creating impactful and user-friendly web solutions, transforming ideas into digital success stories.";

//   return (
//     <div className="flex flex-col items-center justify-center mt-20 px-4">
//       <div
//         className="flex flex-col sm:mb-0 md:flex-row items-center md:gap-10 mb-6"
//         data-aos="fade-up"
//       >
//         <div className="flex flex-col h-auto md:h-[20rem] w-full md:w-[20rem] items-center justify-center bg-CustomBlue p-6 text-center">
//           <h1 className="text-2xl font-bold text-white mb-4">OUR MISSION</h1>
//           <p className="text-sm text-white">{missionText}</p>
//         </div>
//         <div
//           className="flex justify-center items-center"
//           data-aos="zoom-in"
//           data-aos-delay="200"
//         >
//           <img
//             src={target}
//             alt="Target Icon"
//             className="w-auto h-auto md:w-auto md:h-auto"
//           />
//         </div>
//       </div>

//       <div
//         className="flex flex-col-reverse sm:relative left-[3.3rem] md:flex-row items-center  md:gap-10"
//         data-aos="fade-up"
//       >
//         <div
//           className="flex justify-center items-center"
//           data-aos="zoom-in"
//           data-aos-delay="200"
//         >
//           <img
//             src={capture}
//             alt="Capture Icon"
//             className="w-auto h-auto md:w-auto md:h-auto"
//           />
//         </div>
//         <div className="flex flex-col h-auto md:h-[20rem] w-full md:w-[20rem] items-center justify-center bg-CustomYellow p-6 text-center">
//           <h1 className="text-2xl font-bold text-white mb-4">OUR VISION</h1>
//           <p className="text-sm text-white">{visionText}</p>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css"; // Import AOS styles

// const Data = [
//   {
//     title: "Our Mission",
//     points: "To deliver high-quality, innovative, and customized web development solutions to help businesses achieve their digital goals.",
//   },
//   {
//     title: "Our Vision",
//     points: "To be the global leader in creating impactful and user-friendly web solutions, transforming ideas into digital success stories.",
//   },
// ]
// export default function MissionAndVision() {

//  useEffect(() => {
//     AOS.init({ duration: 800, once: true }); // Initialize AOS with desired options
//   }, []);
//   return (
//     <>    
//           <div className={`py-16 max-w-8xl px-8 sm:px-[5rem] space-y-6 text-left`}>
//       {/* Title */}
//       <h1
//         className={` text-gray-800 text-4xl font-bold`}
//         data-aos="fade-up" // AOS animation type
//       >
//         Our Mission And Vision

//         <div
//           className="bg-CustomYellow mt-3 mb-6 h-1 w-32"
//           data-aos="fade-right"
//         ></div>
//       </h1>

//       {/* Introduction */}
//       <p
//         className={`  text-gray-600 text-lg`}
//         data-aos="fade-up" // AOS animation type
//         data-aos-delay="200" // Delay the animation by 200ms
//       >
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum a culpa impedit non magni quae. Voluptas consequuntur ut repellendus aliquam!
//       </p>

//       {/* Benefits Section */}
//       <div className="space-y-8">
//         {Data.map((benefit, index) => (
//           <div
//             key={index}
//             data-aos="fade-up" // AOS animation type
//             data-aos-delay={index * 200 + 300} // Staggered animation
//           >
//           <h2 className={` text-gray-800 text-xl font-semibold mb-4`}>
//               {benefit.title}
//             </h2>
//           <p className={` text-gray-700 space-y-2`}>
//              {benefit.points}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//     </>
//   )
// }




// import React from 'react'

// import { FaEye } from "react-icons/fa";
// import { IoRocketSharp } from "react-icons/io5";
// import { BsPatchCheck } from "react-icons/bs";

// export default function MissionAndVision() {
//   return (
//     <>
//           <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8">
//       {/* Vision */}
//       <div className="flex flex-col items-center bg-blue-500 text-white rounded-full w-80 h-80 justify-center shadow-xl ">
//         <FaEye className='text-gray-800 text-5xl relative bottom-9'/>
//         <div className="text-3xl font-bold">Vision</div>
//         <p className="text-center mt-4 px-4">
//         To be the global leader in creating impactful and user-friendly web solutions, transforming ideas into digital success stories.
//         </p>
//       </div>

//       {/* Mission */}
//       <div className="flex flex-col items-center bg-orange-500 text-white rounded-full w-80 h-80 justify-center shadow-lg">
//         <IoRocketSharp className='text-gray-800 text-5xl relative bottom-9'/>
//         <div className="text-3xl font-bold">Mission</div>
//         <p className="text-center mt-4 px-4">
//         To deliver high-quality, innovative, and customized web development solutions to help businesses achieve their digital goals.
//         </p>
//       </div>

//       {/* Values */}
//       <div className="flex flex-col items-center bg-amber-600 text-white rounded-full w-80 h-80 justify-center shadow-lg">
//         <BsPatchCheck className='text-gray-800 text-5xl relative bottom-9'/>
//         <div className="text-3xl font-bold">Values</div>
//         <p className="text-center mt-4 px-4">
//         To deliver high-quality, innovative, and customized web development solutions to help businesses achieve their digital goals.
//         </p>
//       </div>
//     </div>
//     </>
//   )
// }


import React, { useContext, useEffect } from 'react';
import { FaEye, FaRocket, FaHandshake } from "react-icons/fa";
import { themeContext } from "../../Context/Context";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MissionAndVision() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // Initialize AOS with desired options
  }, []);

  const { theme } = useContext(themeContext);
  return (
    <>
      <div className="flex flex-col mt-10  md:flex-col gap-8 p-8" data-aos="fade-up">

     
          <h1
            className= "text-gray-800 text-4xl font-bold relative right-8 md:mx-24"
            data-aos="fade-up" // AOS animation type
          >
            Our Mission And Vision

            <div
              className="bg-CustomYellow mt-3 mb-6 h-1 w-32"
              data-aos="fade-right"
            ></div>
          </h1>

       <div className='flex flex-col md:flex-row gap-8 items-center justify-center'>
          <div

            className={`${theme === "dark" ? "bg-CustomDark" : "bg-gray-100"
              } border rounded-lg shadow-lg p-6 w-80 text-center transition-transform duration-300 hover:scale-105 hover:border-CustomBlue`}
          >
            <div className="flex items-center justify-center text-CustomBlue">
              <FaEye className="text-4xl" />
            </div>
            <h3 className="text-xl font-bold mt-4">Our Vision</h3>
            <p className="mt-2 text-gray-700">
              To be the global leader in creating impactful and user-friendly web solutions, transforming ideas into digital success stories.
            </p>
          </div>

          <div
            className={`${theme === "dark" ? "bg-CustomDark" : "bg-gray-100"
              } border rounded-lg shadow-lg p-6 w-80 text-center transition-transform duration-300 hover:scale-105 hover:border-CustomYellow`}
          >
            <div className="flex items-center justify-center text-CustomYellow">
              <FaRocket className="text-4xl" />
            </div>
            <h3 className="text-xl font-bold mt-4">Our Mission</h3>
            <p className="mt-2 text-gray-700">
              To deliver high-quality, innovative, and customized web development solutions to help businesses achieve their digital goals.
            </p>
          </div>

          <div
            className={`${theme === "dark" ? "bg-CustomDark" : "bg-gray-100"
              } border rounded-lg shadow-lg p-6 w-80 text-center transition-transform duration-300 hover:scale-105 hover:border-red-500`}

          >
            <div className="flex items-center justify-center text-red-500">
              <FaHandshake className="text-4xl" />
            </div>
            <h3 className="text-xl font-bold mt-4">Our Values</h3>
            <p className="mt-2 text-gray-700">
              We are dedicated to integrity, innovation, and excellence, striving to build strong partnerships and deliver impactful, collaborative solutions.
            </p>
          </div>
          </div>
      </div>
    </>
  );
}

