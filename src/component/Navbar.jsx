import React, { useState } from "react";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setIsShowMobileMenu(!isShowMobileMenu);
  };

  const handleClick = (e) => {
    toast("This feature under maintenance!", {
      icon: "⚠️",
    });
  };

  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <nav
        className="relative max-w-7xl w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto "
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a
            className="flex-none text-xl font-semibold "
            href="/"
            aria-label="Brand"
          >
            FindResto
          </a>
          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm "
              onClick={toggleMobileMenu}
              aria-expanded={isShowMobileMenu}
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              {isShowMobileMenu ? (
                <svg
                  className="w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className={`hs-collapse ${
            isShowMobileMenu ? "block" : "hidden"
          } overflow-hidden transition-all duration-300 basis-full grow md:block`}
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
            <a
              className="font-medium text-gray-500 hover:text-blue-500 md:py-6 "
              href="/team"
              aria-current="page"
            >
              Team
            </a>
            <a
              className="font-medium text-gray-500 hover:text-blue-500 md:py-6 dark-text-gray-400 dark-hover-text-gray-500"
              href="/contact"
            >
              Contact
            </a>
            <a
              className="font-medium text-gray-500 hover:text-blue-500 md:py-6 dark-text-gray-400 dark-hover-text-gray-500"
              href="/explore"
            >
              Explore
            </a>
            <a
              className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 md:border-l md:border-gray-300 md:my-6 md:pl-6 dark-border-gray-700 dark-text-gray-400 dark-hover-text-blue-500"
              onClick={handleClick}
              href="#"
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
