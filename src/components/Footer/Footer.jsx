// import React from "react";
// import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
// import { footerIcon } from "../../assets/index";
// const Footer = () => {
//   return (
//     <footer className="bg-CustomBlack text-gray-300 sm:px-16">
//       <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 ">
//         {/* Company Info */}
//         <div className="col-span-1">
//           <img src={footerIcon} alt="" className="pr-4   mb-5 w-33" />
//           <p className="text-sm leading-6">
//             We deliver innovative solutions in web, mobile, smart contracts, and
//             digital marketing.
//           </p>
//           <div className="flex mt-6 space-x-4">
//             <a
//               href="#"
//               className="w-8 h-8 flex items-center justify-center bg-CustomYellow border  rounded-full hover:bg-white"
//               aria-label="Facebook"
//             >
//               <FaFacebookF className="text-black" />
//             </a>
//             <a
//               href="#"
//               className="w-8 h-8 flex items-center justify-center bg-CustomYellow border  rounded-full hover:bg-white"
//               aria-label="Twitter"
//             >
//               <FaTwitter className="text-black" />
//             </a>
//             <a
//               href="#"
//               className="w-8 h-8 flex items-center justify-center bg-CustomYellow border  rounded-full hover:bg-white"
//               aria-label="Instagram"
//             >
//               <FaInstagram className="text-black" />
//             </a>
//             <a
//               href="#"
//               className="w-8 h-8 flex items-center justify-center bg-CustomYellow border  rounded-full hover:bg-white"
//               aria-label="YouTube"
//             >
//               <FaYoutube className="text-black" />
//             </a>
//           </div>
//         </div>

//         {/* Links - Services */}
//         <div>
//           <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
//           <ul className=" ">
//             <li className="mb-2 hover:text-gray-100">
//               <a href="./services">Web Development</a>
//             </li>
//             <li className="mb-2 hover:text-gray-100">
//               <a href="./services">Mobile Apps</a>
//             </li>
//             <li className="mb-2 hover:text-gray-100">
//               <a href="./services">Graphic Design</a>
//             </li>
//             <li className="mb-2 hover:text-gray-100">
//               <a href="./services">Marketing</a>
//             </li>
//           </ul>
//         </div>

//         {/* Links - Company */}
//         <div>
//           <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
//           <ul className="">
//             <li className="mb-2 hover:text-gray-100">
//               <a href="./about">About Us</a>
//             </li>
//             <li className="mb-2 hover:text-gray-100">
//               <a href="./services">Careers</a>
//             </li>
//             <li className="mb-2 hover:text-gray-100">
//               <a href="#">Blog</a>
//             </li>
//             <li className="mb-2 hover:text-gray-100">
//               <a href="./contact">Contact</a>
//             </li>
//           </ul>
//         </div>

//         {/* Newsletter */}
//         <div className="col-span-1 lg:col-span-2">
//           <h4 className="text-lg font-semibold text-white mb-4">
//             Subscribe to our Newsletter
//           </h4>
//           <p className="text-sm mb-4">
//             Stay updated with the latest news, trends, and offers from
//             BlackEdgeTech.
//           </p>
//           <form className="flex">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 text-black rounded-l-full focus:outline-none"
//             />
//             <button
//               className="bg-CustomYellow font-semibold border  px-4 py-2 rounded-r-full text-white
//             "
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="border-t border-white mt-8 py-6">
//         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
//           <p className="text-sm">
//             &copy; {new Date().getFullYear()} BlackEdgeTech. All Rights
//             Reserved.
//           </p>
//           <ul className="flex space-x-4 mt-4 md:mt-0">
//             <li className="text-sm hover:text-gray-100">
//               <a href="#">Privacy Policy</a>
//             </li>
//             <li className="text-sm hover:text-gray-100">
//               <a href="#">Terms of Service</a>
//             </li>
//             <li className="text-sm hover:text-gray-100">
//               <a href="#">Sitemap</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React, { useContext } from "react";
import { Logo } from "../../assets";
import { themeContext } from "../../Context/Context";

const Footer = () => {

  const {theme} = useContext(themeContext)

  return (
    <>
      <footer class={` ${theme === "dark" ? "bg-CustomDark  border-t-2" : " bg-gray-200"} body-font sm:pr-10`}>
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center md:justify-start justify-center">
            <img src={Logo} alt="footer" className="w-40" />
          </a>
          <p class="text-sm text-CustomBlack sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-CustomBlack sm:py-2 sm:mt-0 mt-4">
            © 2024 BlackEdgeTech —
            <a
              href="/"
              class="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              BlackEdgeTech Team
            </a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a class={`${theme === "dark" ? "text-CustomWhite" : "text-CustomBlack "}`}>
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class={`${theme === "dark" ? "text-CustomWhite" : "text-CustomBlack "}  ml-4`}>
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class={`${theme === "dark" ? "text-CustomWhite" : "text-CustomBlack "}  ml-4`}>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class={`${theme === "dark" ? "text-CustomWhite" : "text-CustomBlack "} ml-4`}>
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
