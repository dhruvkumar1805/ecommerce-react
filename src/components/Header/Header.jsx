import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { CartContext } from "../context/CartContext";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { DarkModeContext } from "../context/DarkModeContext";

function Header() {
  const [activeLink, setActiveLink] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex justify-between items-center px-10 py-5 bg-white dark:bg-slate-900 dark:text-slate-200">
        <div>
          <Link
            to="/"
            className="font-bold tracking-wide text-xl hover:font-medium transition-all duration-300"
            onClick={() => handleLinkClick("Home")}
          >
            Nova
          </Link>
        </div>
        <div
          className={`md:flex text-center md:space-x-10 ${
            isOpen
              ? "flex flex-col inset-x-0 gap-4 absolute top-16 text-xl bg-white dark:bg-slate-900 z-10"
              : "hidden"
          } `}
        >
          <Link
            to="/"
            className={`hover:text-indigo-600 hover:font-medium transition-all duration-300 ${
              activeLink === "Home"
                ? "md:border-b-2 md:border-indigo-600 text-indigo-600"
                : ""
            }`}
            onClick={() => handleLinkClick("Home")}
          >
            <div>Home</div>
          </Link>
          <Link
            to="/men"
            className={`hover:text-indigo-600 hover:font-medium transition-all duration-300 ${
              activeLink === "Men"
                ? "md:border-b-2 md:border-indigo-600 text-indigo-600"
                : ""
            }`}
            onClick={() => handleLinkClick("Men")}
          >
            Men
          </Link>
          <Link
            to="/women"
            className={`hover:text-indigo-600 hover:font-medium transition-all duration-300 ${
              activeLink === "Women"
                ? "md:border-b-2 md:border-indigo-600 text-indigo-600"
                : ""
            }`}
            onClick={() => handleLinkClick("Women")}
          >
            <div>Women</div>
          </Link>
          <Link
            to="/elec"
            className={`hover:text-indigo-600 hover:font-medium transition-all duration-300 ${
              activeLink === "Kids"
                ? "md:border-b-2 md:border-indigo-600 text-indigo-600"
                : ""
            }`}
            onClick={() => handleLinkClick("Kids")}
          >
            <div>Electronics</div>
          </Link>
          <Link
            to="/sale"
            className={`hover:text-indigo-600 hover:font-medium transition-all duration-300 mb-4 md:mb-0 ${
              activeLink === "Sale"
                ? "md:border-b-2 md:border-indigo-600 text-indigo-600"
                : ""
            }`}
            onClick={() => handleLinkClick("Sale")}
          >
            <div>Sale</div>
          </Link>
        </div>
        <div className="flex justify-center items-center space-x-6 md:space-x-8">
          <Link to="/cart">
            <FiShoppingCart size="20px" />
            <div className="flex justify-center items-center w-5 h-5 bg-slate-700 rounded-full absolute top-4 md:right-32 right-40 text-center text-xs text-white font-semibold">
              {cartItems.length}
            </div>
          </Link>
          <Link to="/account">
            <VscAccount size="20px" />
          </Link>
          {darkMode ? (
            <MdOutlineLightMode
              size="20px"
              onClick={toggleDarkMode}
              className="cursor-pointer"
            />
          ) : (
            <MdOutlineDarkMode
              size="20px"
              onClick={toggleDarkMode}
              className="cursor-pointer"
            />
          )}

          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer md:hidden"
          >
            {isOpen ? (
              <HiOutlineX size="20px" />
            ) : (
              <HiOutlineMenuAlt3 size="20px" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
