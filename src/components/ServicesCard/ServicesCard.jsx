import React, { useContext } from "react";
import { themeContext } from "../../Context/Context";

const ServicesCard = ({ title, description, icon, bgColor }) => {

  const {theme} = useContext(themeContext)
  return (
    <div className={`${theme === "dark" ? "bg-CustomDark" : "bg-white " } p-6 border border-gray-200 rounded-2xl hover:border-CustomYellow transition-transform duration-300 hover:-translate-y-2 flex flex-col items-center text-center h-full`}>
      {/* Icon */}
      <div
        className="w-16 h-16 flex items-center justify-center text-white text-3xl rounded-full mb-5"
        style={{ backgroundColor: bgColor }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-3 text-gray-800">{title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-600 flex-grow">{description}</p>
    </div>
  );
};
 
export default ServicesCard;
