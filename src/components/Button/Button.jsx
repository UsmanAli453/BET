import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ text, className, onClick, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) navigate(to);
    if (onClick) onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-CustomYellow cursor-pointer text-white py-2 px-6 rounded-full text-lg font-medium hover:transform hover:-translate-y-[3px] transition duration-300 ease-in-out ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
