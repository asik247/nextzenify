import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import divImg from "../../assets/div.png";
import netlifyImg from "../../assets/netlify.png";
import dispendImg from "../../assets/dispend.png";
import thirdImg from "../../assets/thirdImg.png";

const Title = () => {
    // স্লাইড করার জন্য ইমেজ লিস্ট
    const cards = [
        { id: 1, img: netlifyImg, alt: "Netflix" },
        { id: 2, img: dispendImg, alt: "Disney" },
        { id: 3, img: thirdImg, alt: "third" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // আগের ইমেজে যাওয়ার ফাংশন
    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
    };

    // পরের ইমেজে যাওয়ার ফাংশন
    const handleNext = () => {
        setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    };

    // বর্তমান অর্ডারে কার্ড সাজানোর হিসাব (যাতে ক্লিক করলে পরিবর্তন দেখা যায়)
    const visibleCards = [
        cards[currentIndex],
        cards[(currentIndex + 1) % cards.length],
    ];

    return (
        <section className="w-full bg-black py-16 md:py-24 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Intro Description */}
                <p className="mx-auto max-w-3xl text-center  md:text-2xl   md:mb-20  sm:text-base text-white/90 font-medium  leading-snug">
                    We provide a simple and reliable platform designed to help
                    resellers manage their streaming business with flexible packages,
                    powerful tools, and dedicated support.
                </p>

                {/* Main Showcase Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
                    {/* Left Column: Big Featured Poster Card */}
                    <div className="lg:col-span-5 flex">
                        <div className="relative w-full rounded-3xl overflow-hidden border border-white/10 bg-[#0c0d12] flex flex-col justify-end min-h-[580px] sm:min-h-[640px] shadow-2xl group">
                            <img
                                src={divImg}
                                alt="HBO All The Way"
                                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                            <div className="relative z-10 p-6 sm:p-8 space-y-4">
                                <p className="text-sm sm:text-base text-white/90 font-medium max-w-xs leading-snug">
                                    Discover the latest and most popular movies in one place.
                                </p>
                                <button className="inline-block rounded-full bg-red-600 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-red-600/40 hover:bg-red-700 active:scale-95 transition-all duration-300">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Title, Content Library, Arrows & Animated Thumbnails */}
                    <div className="lg:col-span-7 flex flex-col justify-between pt-2">
                        {/* Top Header Block */}
                        <div>
                            <div className="flex justify-end mb-4 sm:mb-6">
                                <span className="inline-flex items-center rounded-full bg-white px-5 py-2 text-xs sm:text-sm font-semibold text-black shadow-md">
                                    Content Library
                                </span>
                            </div>

                            <h2 className="text-4xl text-end sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                                What Your Customers <br />
                                Can Watch
                            </h2>

                            {/* Chevron Arrow Controls */}
                            <div className="flex justify-end items-center gap-3 mt-8 sm:mt-12">
                                <button
                                    type="button"
                                    onClick={handlePrev}
                                    aria-label="Previous image"
                                    className="cursor-pointer flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white text-black shadow-md transition-all duration-300 hover:bg-slate-200 active:scale-90"
                                >
                                    <FiChevronLeft className="text-xl sm:text-2xl" />
                                </button>
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    aria-label="Next image"
                                    className="cursor-pointer flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white text-black shadow-md transition-all duration-300 hover:bg-slate-200 active:scale-90"
                                >
                                    <FiChevronRight className="text-xl sm:text-2xl" />
                                </button>
                            </div>
                        </div>

                        {/* Bottom Dynamic Thumbnails Strip */}
                        <div className="mt-8 sm:mt-12">
                            <div className="grid grid-cols-2 gap-4 sm:gap-6">
                                {visibleCards.map((card, index) => (
                                    <div
                                        key={`${card.id}-${index}`}
                                        className="group relative flex aspect-[4/3] cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-4 sm:p-5 shadow-2xl backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-red-500/40 hover:shadow-red-500/10 hover:shadow-2xl"
                                    >
                                        {/* Subtle Radial Glow on Hover */}
                                        <div className="pointer-events-none absolute inset-0 bg-radial from-red-600/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                        {/* Shimmer Light Reflection Sweep */}
                                        <div className="pointer-events-none absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-1000 group-hover:inset-full group-hover:opacity-100" />

                                        {/* HD Scaled Image */}
                                        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl">
                                            <img
                                                src={card.img}
                                                alt={card.alt}
                                                className="h-[85%] w-[85%] object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] transition-all duration-500 ease-out group-hover:scale-108 group-hover:brightness-110"
                                                loading="eager"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Title;