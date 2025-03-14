import { Link } from "react-router";
import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { ImStatsBars2 } from "react-icons/im";
import UseBasket from "../../Store/Basket";

const Navbar = ({ searchedText, setSearchedText }) => {
  const [showMobile, setShowMobile] = useState(false);
  const { basket } = UseBasket();

  const links = [
    { id: 0, title: "Home", path: "/" },
    { id: 1, title: "About", path: "/about" },
    { id: 2, title: "Services", path: "/services" },
    { id: 3, title: "Contact ", path: "/contact" },
  ];

  return (
    <div className="flex justify-between bg-slate-500 h-[90px] items-center text-white px-5">
      <div>
        <Link to="/" className="text-3xl font-bold">
          NEM Boutique
        </Link>
      </div>

      <div className="hidden md:flex gap-10 items-center">
        {links.map(({ id, title, path }) => {
          return (
            <Link
              key={id}
              className="relative before:content-[''] before:block before:w-[0%] before:h-[3px] before:rounded-2xl before:bg-white before:absolute before:bottom-[-5px] before:duration-500 hover:before:w-[100%] before:left-[50%] before:translate-x-[-50%] text-xl"
              to={path}
            >
              {title}
            </Link>
          );
        })}
      </div>

      <div className="hidden md:flex gap-14 items-center">
        <input
          type="text"
          placeholder="search"
          value={searchedText}
          className="border outline-0 px-4
           py-1 rounded-2xl placeholder:text-white placeholder:text-xl text-xl"
          onChange={(e) => setSearchedText(e.target.value)}
        />
        <Link to="/basket" className="relative">
          <SlBasket className="text-3xl" />
          <span className="absolute top-[-15px] left-[-25px] bg-red-400 rounded-full w-6 h-6 flex justify-center items-center">
            {basket.length}
          </span>
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
