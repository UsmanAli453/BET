import React, { useContext } from "react";
import { themeContext } from "../../Context/Context";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ToggleTheme() {
  const { theme, setTheme } = useContext(themeContext);

  return (
    <div className="flex items-center">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          onClick={() => {
            theme === "light" ? setTheme("dark") : setTheme("light");
          }}
        />
        <div className="w-11 h-6 bg-CustomBlue peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-white rounded-full peer peer-checked:bg-CustomYellow flex items-center justify-center relative">
          {theme === "light" ? (
            <FaSun className="absolute text-CustomYellow text-sm" />
          ) : (
            <FaMoon className="absolute text-blue-300 text-sm" />
          )}
        </div>
        <span className="peer-checked:translate-x-5 peer-checked:border-white absolute top-1 left-1 w-4 h-4 bg-white border border-gray-300 rounded-full transition"></span>
      </label>
    </div>
  );
}
