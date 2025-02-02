import { useState, useEffect, useContext } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";
import { Logo } from "../../assets";
import { Button, ToggleTheme } from "../component";
import { themeContext } from "../../Context/Context";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
    { name: "Project", path: "/projects" },
    { name: "Training", path: "/training" },
  ];

  const {theme} = useContext(themeContext)

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 w-[100vw] ${theme === "dark" ? "bg-CustomDark border-gray-700" : "bg-white"}  border-b border-gray-200 z-40 transition-all`}>
      <div className="container  flex items-center justify-between px-6">
        {/* Logo */}
        <a href="/">
          <img
            src={Logo}
            width={200}
            className={`py-3 cursor-pointer`}
            alt="Logo"
          />
        </a>
        {/* Toggle Button */}
        <button
          onClick={toggleNavbar}
          className={`relative text-3xl text-CustomYellow focus:outline-none md:hidden 
          transition-transform duration-500 ease-in-out transform 
          ${isOpen ? "rotate-180 scale-110 " : "rotate-0 scale-100 "}`}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navbar */}
        <nav
          className={`absolute top-full left-0 w-full ${theme === "dark" ? "bg-CustomDark" : "bg-white"}  overflow-hidden transition-all duration-300 ease-out md:static md:w-auto md:max-h-full md:transform-none md:flex md:items-center ${
            isOpen ? "max-h-[50rem]" : "max-h-0"
          }`}
        >
          <ul className={` flex flex-col text-center gap-4 md:flex-row md:gap-8 md:p-0`}>
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  onClick={closeNavbar}
                  to={item.path}
                  className={({ isActive }) =>
                    `block text-lg py-3 px-2 font-semibold hover:scale-110 hover:text-CustomBlue transform transition-transform duration-200 ease-in-out ${
                      isActive ? "text-[#56AAF5]" : ""
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          
          </ul>
        </nav>


        <ToggleTheme/>
      </div>
    </header>
  );
};

export default Header;
