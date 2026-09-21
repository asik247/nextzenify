import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Foot = () => {
    return (
        <footer className="w-full  text-[#0f172a] pt-20 pb-12 px-6 sm:px-10 lg:px-16 border-t border-slate-200/70 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Top Section: Newsletter + 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">

                    {/* Newsletter Subscription (Left) */}
                    <div className="lg:col-span-5 pr-0 lg:pr-10">
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0f172a]">
                            Subscribe to Newsletter
                        </h2>
                        <p className="mt-3 text-sm text-slate-500 leading-relaxed max-w-sm">
                            Stay Update with the latest trends, tips, and exclusive offerssubscribe to our newsletter today!
                        </p>

                        {/* Rounded Input with embedded Arrow Button */}
                        <form onSubmit={(e) => e.preventDefault()} className="mt-8">
                            <div className="relative flex items-center w-full max-w-md rounded-full border border-slate-900 bg-transparent p-1.5 focus-within:ring-2 focus-within:ring-slate-900 transition-all">
                                <input
                                    type="email"
                                    placeholder="Your Email Address"
                                    className="w-full bg-transparent pl-5 pr-14 text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
                                    required
                                />
                                <button
                                    type="submit"
                                    aria-label="Subscribe"
                                    className="absolute right-1.5 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#0f172a] text-white hover:bg-slate-800 active:scale-95 transition-all duration-200 cursor-pointer shadow-sm"
                                >
                                    <FiArrowRight className="text-lg" />
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Quick links */}
                    <div className="lg:col-span-2 sm:col-span-1">
                        <h3 className="text-base font-bold text-[#0f172a] tracking-tight mb-5">
                            Quick links
                        </h3>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li><a href="#home" className="hover:text-black transition-colors">Home</a></li>
                            <li><a href="#how" className="hover:text-black transition-colors">How Its work</a></li>
                            <li><a href="#package" className="hover:text-black transition-colors">Package</a></li>
                            <li><a href="#features" className="hover:text-black transition-colors">Features</a></li>
                            <li><a href="#faq" className="hover:text-black transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="lg:col-span-3 sm:col-span-1">
                        <h3 className="text-base font-bold text-[#0f172a] tracking-tight mb-5">
                            Resources
                        </h3>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li><a href="#help" className="hover:text-black transition-colors">Help Center</a></li>
                            <li><a href="#docs" className="hover:text-black transition-colors">Documentation</a></li>
                            <li><a href="#security" className="hover:text-black transition-colors">Security</a></li>
                            <li><a href="#api" className="hover:text-black transition-colors">API for developers</a></li>
                            <li><a href="#community" className="hover:text-black transition-colors">Community</a></li>
                        </ul>
                    </div>

                    {/* Supports */}
                    <div className="lg:col-span-2 sm:col-span-1">
                        <h3 className="text-base font-bold text-[#0f172a] tracking-tight mb-5">
                            Supports
                        </h3>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li><a href="#chat" className="hover:text-black transition-colors">Live Chat</a></li>
                            <li><a href="#support" className="hover:text-black transition-colors">Customer Support</a></li>
                            <li><a href="#issues" className="hover:text-black transition-colors">Reports and issues</a></li>
                            <li><a href="#account" className="hover:text-black transition-colors">Account Help</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section: Logo, Copyright, Socials & Legal */}
                <div className="pt-6">
                    {/* Big Brand Logo */}
                    <div className="mb-6">
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a]">
                            Logo
                        </h1>
                    </div>

                    {/* Copyright, Social Links and Privacy */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs sm:text-sm text-slate-600">
                        {/* Copyright */}
                        <p className="order-1">
                            2026 @denvolab. All rights reserved.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 order-2">
                            <span className="text-slate-800 font-medium">Follow Us</span>
                            <div className="flex items-center gap-3 text-slate-800">
                                <a
                                    href="#facebook"
                                    aria-label="Facebook"
                                    className="p-1 hover:text-black transition-colors"
                                >
                                    <FaFacebookF className="text-base" />
                                </a>
                                <a
                                    href="#instagram"
                                    aria-label="Instagram"
                                    className="p-1 hover:text-black transition-colors"
                                >
                                    <FaInstagram className="text-base" />
                                </a>
                                <a
                                    href="#linkedin"
                                    aria-label="LinkedIn"
                                    className="p-1 hover:text-black transition-colors"
                                >
                                    <FaLinkedinIn className="text-base" />
                                </a>
                            </div>
                        </div>

                        {/* Legal Terms */}
                        <div className="flex items-center gap-6 order-3">
                            <a href="#privacy" className="hover:text-black transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#terms" className="hover:text-black transition-colors">
                                Term & conditions
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Foot;