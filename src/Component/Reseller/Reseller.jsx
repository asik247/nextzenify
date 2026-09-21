import React, { useState } from 'react';
import { FiArrowRight, FiX } from 'react-icons/fi';
import { FaPlay } from 'react-icons/fa';
import youtubImg from '../../assets/youtube.png';

const Reseller = () => {
    // YouTube Video Modal State
    const [isPlaying, setIsPlaying] = useState(false);

    // Timeline features list
    const features = [
        {
            number: "01",
            title: "Easy to Get Started",
            desc: "Start your reseller journey with a simple setup and a 14-day free trial."
        },
        {
            number: "02",
            title: "Flexible Plans",
            desc: "Choose a plan that fits your business and upgrade as you grow."
        },
        {
            number: "03",
            title: "Simple Management",
            desc: "Manage customers, subscriptions, orders, and renewals from one place."
        },
        {
            number: "04",
            title: "Reliable Support",
            desc: "Get the help you need whenever you need it."
        }
    ];

    return (
        <section className="relative w-full bg-black py-20 md:py-28 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Section Header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 lg:mb-20">
                    {/* Left Header Info */}
                    <div className="lg:col-span-8">
                        {/* Testimonial Pill */}
                        <div className="mb-5 inline-block">
                            <span className="rounded-full bg-white px-5 py-1.5 text-xs font-semibold text-black shadow-md">
                                Testimonial
                            </span>
                        </div>

                        {/* Main Title */}
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                            Built for Resellers. <br />
                            Designed for Growth.
                        </h2>

                        {/* Explore Features Button */}
                        <div className="mt-8">
                            <button className="group inline-flex items-center gap-2 rounded-full bg-red-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:bg-red-700 hover:gap-3 active:scale-95">
                                <span>Explore Features</span>
                                <FiArrowRight className="text-base" />
                            </button>
                        </div>
                    </div>

                    {/* Right Header Text */}
                    <div className="lg:col-span-4 flex items-end h-full">
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-sm lg:mt-auto">
                            Everything you need to manage your reseller business, simplify daily tasks, and grow with confidence.
                        </p>
                    </div>
                </div>

                {/* Bottom Main Content: Video Thumbnail & Timeline */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left: Video Showcase Card */}
                    <div className="lg:col-span-6">
                        <div className="relative w-full rounded-3xl overflow-hidden border border-white/10 bg-[#0d0e14] shadow-2xl group">

                            {/* Video Poster Image */}
                            <div className="relative aspect-[4/3] w-full overflow-hidden">
                                <img
                                    src={youtubImg}
                                    alt="Reseller Video Preview"
                                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                                />

                                {/* Dark Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                {/* Red Play Button (Top Right as in Image) */}
                                <button
                                    type="button"
                                    onClick={() => setIsPlaying(true)}
                                    aria-label="Play Video"
                                    className="absolute top-5 right-5 sm:top-6 sm:right-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-xl shadow-red-600/50 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer z-10"
                                >
                                    <FaPlay className="text-sm sm:text-base ml-0.5" />
                                </button>
                            </div>

                            {/* Floating 50k+ Happy Client Badge */}
                            <div className="absolute bottom-6 left-6 right-6 sm:right-auto inline-flex items-center gap-3 rounded-full bg-white/95 px-5 py-2.5 backdrop-blur-md shadow-2xl">
                                {/* Avatars */}
                                <div className="flex -space-x-2.5 overflow-hidden">
                                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Client 1" />
                                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Client 2" />
                                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&auto=format&fit=crop&q=80" alt="Client 3" />
                                </div>
                                <span className="text-xs sm:text-sm font-bold text-black">
                                    50k+ <span className="font-medium text-slate-600">Happy Client</span>
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* Right: Step-by-Step Feature Timeline */}
                    <div className="lg:col-span-6">
                        <div className="relative space-y-8 sm:space-y-10">
                            {/* Vertical Dotted Line */}
                            <div className="absolute left-5 sm:left-6 top-3 bottom-8 w-[1px] border-l border-dashed border-white/30" />

                            {features.map((item, index) => (
                                <div key={index} className="relative flex items-start gap-6 sm:gap-8 group">
                                    {/* Number Circle Badge */}
                                    <div className="relative z-10 flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-white text-black font-semibold text-xs sm:text-sm shadow-md group-hover:scale-105 transition-transform duration-300">
                                        {item.number}
                                    </div>

                                    {/* Text Content */}
                                    <div className="pt-1">
                                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 tracking-tight group-hover:text-red-400 transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-md">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* YouTube Video Modal Popup */}
            {isPlaying && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md">
                    <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-white/20 bg-black shadow-2xl">
                        {/* Close Button */}
                        <button
                            type="button"
                            onClick={() => setIsPlaying(false)}
                            aria-label="Close modal"
                            className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white hover:bg-white hover:text-black transition-all"
                        >
                            <FiX className="text-xl" />
                        </button>

                        {/* YouTube Embed Player */}
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Reseller;