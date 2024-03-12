import React from "react";
import { GrSend } from "react-icons/gr";

function Footer() {
  return (
    <div className="flex flex-col md:flex-row justify-between px-16 md:px-24 py-10 mt-24 bg-slate-200 dark:bg-slate-900 dark:text-white">
      <a
        to="/"
        className="font-bold tracking-wide text-3xl mb-2 md:mb-0"
        onClick={() => handleLinkClick("Home")}
      >
        Nova
      </a>
      <div className="flex justify-between md:space-x-60">
        <div className="flex flex-col dark:text-slate-400">
          <a
            className="font-bold mb-4 text-lg mt-10 md:mt-0 dark:text-white"
            href="#"
          >
            Social
          </a>
          <a href="#">Instagram</a>
          <a href="#">X</a>
          <a href="#">Youtube</a>
          <a href="#">Facebook</a>
        </div>
        <div className="flex flex-col dark:text-slate-400">
          <a
            className="font-bold mb-4 text-lg mt-10 md:mt-0 dark:text-white"
            href="#"
          >
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
            className="bg-gray-300 dark:bg-slate-700 text-black placeholder-black-200 dark:text-white p-2 focus:outline-none rounded-lg"
            type="email"
            name="email"
            placeholder="Your email address"
          />
          <button
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300"
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
