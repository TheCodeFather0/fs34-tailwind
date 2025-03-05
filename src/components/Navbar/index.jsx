import React, { useState } from "react";
import { Link } from "react-router";
import { ImStatsBars2 } from "react-icons/im";
import { FaTimes } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);

  const links = [
    { id: 0, title: "Home", path: "/" },
    { id: 1, title: "About", path: "/about" },
    { id: 2, title: "Services", path: "/services" },
    { id: 3, title: "Contact ", path: "/contact" },
  ];

  return (
    <div className="flex justify-between bg-slate-500 h-[70px] items-center text-white px-5">
      <div>
        <Link to="/" className="text-xl font-bold">
          NEM Boutique
        </Link>
      </div>

      <div className="hidden md:flex gap-10 items-center">
        {links.map(({ id, title, path }) => {
          return (
            <Link
              key={id}
              className="relative before:content-[''] before:block before:w-[0%] before:h-[3px] before:rounded-2xl before:bg-white before:absolute before:bottom-[-5px] before:duration-500 hover:before:w-[100%] before:left-[50%] before:translate-x-[-50%]"
              to={path}
            >
              {title}
            </Link>
          );
        })}
      </div>

      <div className="hidden md:flex gap-10 items-center">
        <input type="text" placeholder="search" className="border" />
        <Link to="/basket">
          <SlBasket />
        </Link>
      </div>

      <div
        className="block md:hidden cursor-pointer"
        onClick={() => {
          setShowMobile(!showMobile);
        }}
      >
        {showMobile ? (
          <FaTimes className="text-3xl text-white" />
        ) : (
          <ImStatsBars2 className="text-3xl text-white" />
        )}
      </div>

      {showMobile && (
        <div className="flex flex-col md:hidden absolute top-[70px] bg-slate-700 right-0 h-[calc(100vh-70px)] w-[300px] justify-center items-center gap-4 duration-200 transition-all ease-in-out">
          {links.map(({ id, title, path }) => {
            return (
              <Link
                key={id}
                className="relative before:content-[''] before:block before:w-[0%] before:h-[3px] before:rounded-2xl before:bg-white before:absolute before:bottom-[-5px] before:duration-500 hover:before:w-[100%] before:left-[50%] before:translate-x-[-50%]"
                to={path}
              >
                {title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Navbar;
