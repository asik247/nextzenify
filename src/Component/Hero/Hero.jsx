import heroImg from "../../assets/hero.png";
import netlify from "../../assets/image 15.png";
import desnip from "../../assets/image 16.png";
import prime from "../../assets/image 17.png";
import hbo from "../../assets/image 20.png";
import desnip2 from "../../assets/image 19.png";

const Hero = () => {
    return (
        <section
            className="relative -mt-[80px] lg:-mt-[110px] min-h-[115vh] lg:min-h-[120vh] w-full overflow-hidden bg-cover bg-center bg-no-repeat flex flex-col justify-between"
            style={{
                backgroundImage: `url(${heroImg})`,
            }}
        >
            {/* Top & Base Dark Gradient Overlays for Cinematic Depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 pointer-events-none" />

            {/* Extra Bottom Blend Gradient */}
            <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />

            {/* Radial Glow Center Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-10 mx-auto flex min-h-[95vh] lg:min-h-[100vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8 pt-36 md:pt-48 pb-32">
                <div className="grid w-full items-center gap-12 lg:grid-cols-12 lg:gap-16">
                    {/* Left Content */}
                    <div className="text-center lg:text-left lg:col-span-7">
                        {/* Modern Glass Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-white shadow-lg backdrop-blur-xl">
                            <span className="flex h-2 w-2 rounded-full bg-red-500 animate-ping" />
                            <span>⭐ Trusted Reseller Platform</span>
                        </div>

                        {/* Heading with Soft Gradient Accent */}
                        <h1 className="mx-auto lg:mx-0 max-w-2xl text-4xl font-extrabold tracking-tight leading-[1.12] text-white sm:text-6xl lg:text-7xl drop-shadow-sm">
                            Power Your{" "}
                            <span className="bg-gradient-to-r from-red-500 via-rose-400 to-amber-300 bg-clip-text text-transparent">
                                Streaming Business
                            </span>
                        </h1>

                        {/* CTA Button */}
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <button className="group relative overflow-hidden rounded-full bg-red-600 px-9 py-4 text-sm font-semibold tracking-wide text-white shadow-xl shadow-red-600/40 transition-all duration-300 hover:bg-red-700 hover:shadow-red-600/60 hover:-translate-y-0.5 active:scale-95">
                                <span className="relative z-10 font-bold uppercase tracking-wider text-xs">
                                    Get Started Now
                                </span>
                                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />
                            </button>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex items-center justify-center lg:justify-end lg:col-span-5">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-2xl max-w-md">
                            <p className="text-center text-base leading-relaxed text-slate-200 sm:text-lg lg:text-left">
                                Flexible reseller packages and simple tools to help
                                you manage, scale, and automate your streaming business effortlessly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Brand Logos Strip */}
            <div className="relative z-10 w-full border-t border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl">
                <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 px-6 py-6 md:py-8">
                    <img
                        className="h-6 sm:h-8 w-auto object-contain opacity-70 transition-all duration-300 hover:opacity-100 hover:scale-110"
                        src={prime}
                        alt="Prime Video"
                    />
                    <img
                        className="h-6 sm:h-8 w-auto object-contain opacity-70 transition-all duration-300 hover:opacity-100 hover:scale-110"
                        src={hbo}
                        alt="HBO"
                    />
                    <img
                        className="h-6 sm:h-8 w-auto object-contain opacity-70 transition-all duration-300 hover:opacity-100 hover:scale-110"
                        src={desnip}
                        alt="Disney"
                    />
                    <img
                        className="h-6 sm:h-8 w-auto object-contain opacity-70 transition-all duration-300 hover:opacity-100 hover:scale-110"
                        src={netlify}
                        alt="Netflix"
                    />
                    <img
                        className="h-6 sm:h-8 w-auto object-contain opacity-70 transition-all duration-300 hover:opacity-100 hover:scale-110"
                        src={desnip2}
                        alt="Disney Plus"
                    />
                    <img
                        className="h-6 sm:h-8 w-auto object-contain opacity-70 transition-all duration-300 hover:opacity-100 hover:scale-110"
                        src={hbo}
                        alt="HBO"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;