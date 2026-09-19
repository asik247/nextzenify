import React from "react";
import { NavLink } from "react-router";

import { FaQuestionCircle } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import { GoPackage } from "react-icons/go";
import { IoPlay } from "react-icons/io5";
import { RiHome5Fill } from "react-icons/ri";
import { HiBars3 } from "react-icons/hi2";

const Nav = () => {
    const navLinkClass = ({ isActive }) =>
        `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${isActive
            ? "bg-red-600 text-white"
            : "text-gray-600 hover:bg-gray-100"
        }`;

    const links = (
        <>
            <li>
                <NavLink to="/" className={navLinkClass}>
                    <RiHome5Fill />
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink to="/howItWork" className={navLinkClass}>
                    <IoPlay />
                    How It Works
                </NavLink>
            </li>

            <li>
                <NavLink to="/packages" className={navLinkClass}>
                    <GoPackage />
                    Packages
                </NavLink>
            </li>

            <li>
                <NavLink to="/features" className={navLinkClass}>
                    <RiHome5Fill />
                    Features
                </NavLink>
            </li>

            <li>
                <NavLink to="/faq" className={navLinkClass}>
                    <FaQuestionCircle />
                    FAQ
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar rounded-full border border-white/20 bg-white/5 px-3 py-2 backdrop-blur-md">
            {/* Mobile Menu */}
            <div className="navbar-start lg:hidden">
                <div className="dropdown">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost text-white"
                    >
                        <HiBars3 className="text-2xl" />
                    </label>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content z-[100] mt-3 w-64 rounded-2xl bg-white p-3 shadow-xl"
                    >
                        {links}
                    </ul>
                </div>
            </div>

            {/* Logo */}
            <div className="navbar-start hidden lg:flex">
                <h1 className="text-3xl font-bold text-white">
                    Logo
                </h1>
            </div>

            {/* Mobile Logo */}
            <div className="navbar-center lg:hidden">
                <h1 className="text-2xl font-bold text-white">
                    Logo
                </h1>
            </div>

            {/* Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal rounded-full bg-white p-2 shadow-lg">
                    {links}
                </ul>
            </div>

            {/* Button */}
            <div className="navbar-end">
                <button className="group hidden rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 lg:flex lg:items-center lg:gap-3">
                    Become a Reseller

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white transition-all duration-300 group-hover:translate-x-1">
                        <FaCircleArrowRight className="rotate-330" />
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Nav;