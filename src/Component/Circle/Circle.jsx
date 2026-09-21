import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Circle = () => {
    const steps = [
        {
            id: "01",
            title: "Choose a Package",
            description:
                "Select the reseller package that fits your business needs.",
            top: "8%",
        },
        {
            id: "02",
            title: "Create Your Account",
            description:
                "Sign up, complete your setup, and get access to your reseller platform.",
            top: "42%",
        },
        {
            id: "03",
            title: "Start Reselling",
            description:
                "Manage your authorized subscriptions and grow your customer base from one place.",
            top: "76%",
        },
    ];

    return (
        <section className="bg-black text-white py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div>
                        <span className="inline-flex items-center rounded-full bg-white px-5 py-2 text-xs font-semibold text-black">
                            3 EASY STEPS
                        </span>

                        <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-bold leading-tight">
                            Start Selling in
                            <br />
                            Just{" "}
                            <span className="text-red-500">
                                Three
                            </span>{" "}
                            Steps
                        </h1>

                        <p className="mt-6 max-w-lg text-lg text-gray-300 leading-relaxed">
                            Choose your plan, get started, and manage your
                            reseller business—all in just a few simple steps.
                        </p>

                        <button className="group mt-10 inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-4 font-medium transition-all duration-300 hover:bg-red-700">
                            Get Started
                            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                    </div>

                    {/* Right Timeline */}
                    <div className="relative h-[650px] w-full overflow-visible">

                        {/* Curve Arc Line - Left border completely none, only right curve border visible */}
                        <div className="absolute -left-[550px] top-1/2 -translate-y-1/2 h-[750px] w-[750px] pointer-events-none">
                            <div className="h-full w-full rounded-full border-r border-gray-600/80 border-t-0 border-b-0 border-l-0" />
                        </div>

                        {/* Step 1 (Top Corner of the Arc) */}
                        <div className="absolute top-[80px] left-[135px] flex items-center">
                            {/* Circle Node centered exactly on the border line */}
                            <div className="relative -left-7 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-lg font-bold text-black shadow-2xl">
                                01
                            </div>

                            <div className="ml-5 max-w-md">
                                <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                                    Choose a Package
                                </h3>
                                <p className="mt-2 text-sm sm:text-base text-gray-300 leading-relaxed max-w-sm">
                                    Select the reseller package that fits your business needs.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 (Apex / Middle Rightmost Point of the Arc) */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-[200px] flex items-center">
                            {/* Circle Node centered exactly on the border line */}
                            <div className="relative -left-7 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-lg font-bold text-black shadow-2xl">
                                02
                            </div>

                            <div className="ml-5 max-w-md">
                                <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                                    Create Your Account
                                </h3>
                                <p className="mt-2 text-sm sm:text-base text-gray-300 leading-relaxed max-w-sm">
                                    Sign up, complete your setup, and get access to your reseller platform.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 (Bottom Corner of the Arc) */}
                        <div className="absolute bottom-[80px] left-[135px] flex items-center">
                            {/* Circle Node centered exactly on the border line */}
                            <div className="relative -left-7 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-lg font-bold text-black shadow-2xl">
                                03
                            </div>

                            <div className="ml-5 max-w-md">
                                <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                                    Start Reselling
                                </h3>
                                <p className="mt-2 text-sm sm:text-base text-gray-300 leading-relaxed max-w-sm">
                                    Manage your authorized subscriptions and grow your customer base.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Mobile Version */}
                    <div className="space-y-8 lg:hidden">
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className="flex gap-4"
                            >
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white font-bold text-black">
                                    {step.id}
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold">
                                        {step.title}
                                    </h3>

                                    <p className="mt-2 text-gray-400">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Circle;