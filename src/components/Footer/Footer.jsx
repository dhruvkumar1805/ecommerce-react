import React from "react";
import { GrSend } from "react-icons/gr";

function Footer() {
  return (
    <div className="flex flex-col md:flex-row justify-between px-16 md:px-24 py-10 mt-10 bg-slate-200">
      <a
        to="/"
        className="font-bold tracking-wide text-3xl mb-2 md:mb-0"
        onClick={() => handleLinkClick("Home")}
      >
        Nova
      </a>
      <div className="flex justify-between md:space-x-60">
        <div className="flex flex-col">
          <a className="font-bold mb-4 text-lg mt-10 md:mt-0" href="#">
            Social
          </a>
          <a href="#">Instagram</a>
          <a href="#">X</a>
          <a href="#">Youtube</a>
          <a href="#">Facebook</a>
        </div>
        <div className="flex flex-col">
          <a className="font-bold mb-4 text-lg mt-10 md:mt-0" href="#">
            Support
          </a>
          <a href="#">Terms of service</a>
          <a href="#">Track Order</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div>
        <h2 className="font-bold mb-4 text-lg mt-10 md:mt-0">
          Get Updates and more
        </h2>
        <div className="flex gap-2">
          <input
            className="bg-gray-300 text-black placeholder-black-200 p-2 focus:outline-none rounded-lg"
            type="email"
            name="email"
            placeholder="Your email address"
          />
          <button
            className="inline-block select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-4 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-auto"
            type="button"
          >
            <GrSend />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
