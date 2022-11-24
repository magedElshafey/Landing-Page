import React from "react";
import { GiHamburgerMenu, GiThreeFriends } from "react-icons/gi";
import {
  AiOutlineSearch,
  AiOutlineClose,
  AiFillWallet,
  AiFillProject,
} from "react-icons/ai";
import { BsFillCartCheckFill, BsFillArrowDownSquareFill } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineFavorite } from "react-icons/md";
import { BiHelpCircle } from "react-icons/bi";
import { useState } from "react";
const Nav = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className=" max-w-[1640px] mx-auto px-4 py-4">
      {/** left side  */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <GiHamburgerMenu
            size={30}
            className=" cursor-pointer mr-2"
            onClick={() => setNav(true)}
          />
          <h1 className="font-normal">
            Best <span className="font-bold text-xl">eats</span>
          </h1>

          <div className=" bg-gray-200 p-1  items-center rounded-full ml-2 hidden md:flex">
            <p className="bg-black rounded-full text-white p-2">delivery</p>
            <p>pickup</p>
          </div>
        </div>

        {/**search input */}
        <div className="bg-gray-200 rounded-full flex sm:w-[200px] md:w-[300px] items-center p-2  ">
          <AiOutlineSearch size={25} />
          <input
            type="text"
            placeholder="search for food"
            className="w-full bg-transparent focus:outline-none"
          />
        </div>
        {/**cart */}
        <div className="bg-black text-white items-center p-2 rounded-full hidden md:flex ">
          <BsFillCartCheckFill size={25} />
          <p>cart</p>
        </div>
      </div>
      {/** mobile view */}
      {/**overlay */}
      <div
        className={
          nav ? " fixed w-full h-full top-0 left-0 bg-black/80 z-10" : ""
        }
      ></div>
      {/**side bar */}
      <div
        className={
          nav
            ? "fixed z-10 top-0 left-0 bg-white h-full w-[300px] duration-300"
            : "fixed z-10 top-0  bg-white h-full w-[300px] left-[-100%] duration-300"
        }
      >
        <AiOutlineClose
          size={30}
          className=" absolute right-[20px] top-[20px] cursor-pointer"
          onClick = {() => setNav(false)}
        />
        <p className="text-xl p-6 pb-3">
          Best <span className="font-bold">Eats</span>
        </p>
        <ul className="p-3">
          <li className="flex items-center p-2 cursor-pointer">
            <CiDeliveryTruck size={25} className="mr-1" />
            <p>orders</p>
          </li>
          <li className="flex items-center p-2 cursor-pointer">
            <MdOutlineFavorite size={25} className="mr-1" />
            <p>favourite</p>
          </li>
          <li className="flex items-center p-2 cursor-pointer">
            <AiFillWallet size={25} className="mr-1" />
            <p>wallet</p>
          </li>
          <li className="flex items-center p-2 cursor-pointer">
            <BiHelpCircle size={25} className="mr-1" />
            <p>help</p>
          </li>
          <li className="flex items-center p-2 cursor-pointer">
            <AiFillProject size={25} className="mr-1" />
            <p>promotion</p>
          </li>
          <li className="flex items-center p-2 cursor-pointer">
            <BsFillArrowDownSquareFill size={25} className="mr-1" />
            <p>best one</p>
          </li>
          <li className="flex items-center p-2 cursor-pointer">
            <GiThreeFriends size={25} className="mr-1" />
            <p>invite friends</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
