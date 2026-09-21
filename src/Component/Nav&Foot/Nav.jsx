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
            ? "bg-red-600 text-white shadow-md shadow-red-600/30"
            : "text-slate-300 hover:text-white hover:bg-white/10"
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
        <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/10 bg-transparent backdrop-blur-md transition-all duration-300">
            <div className="navbar mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
                {/* Mobile Menu */}
                <div className="navbar-start lg:hidden">
                    <div className="dropdown">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle text-white hover:bg-white/10"
                        >
                            <HiBars3 className="text-2xl" />
                        </label>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content z-[100] mt-3 w-64 rounded-2xl border border-white/10 bg-slate-950/95 p-3 text-white shadow-2xl backdrop-blur-xl"
                        >
                            {links}
                        </ul>
                    </div>
                </div>

                {/* Logo */}
                <div className="navbar-start hidden lg:flex">
                    <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-white">
                        Logo
                    </h1>
                </div>

                {/* Mobile Logo */}
                <div className="navbar-center lg:hidden">
                    <h1 className="text-2xl font-extrabold tracking-tight text-white">
                        Logo
                    </h1>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md">
                        {links}
                    </ul>
                </div>

                {/* Button */}
                <div className="navbar-end">
                    <button className="group hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-white/10 transition-all duration-300 hover:bg-slate-100 hover:scale-105 active:scale-95 lg:flex lg:items-center lg:gap-3">
                        <span>Become a Reseller</span>

                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 text-white transition-all duration-300 group-hover:translate-x-0.5">
                            <FaCircleArrowRight className="rotate-330 text-xs" />
                        </span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Nav;