
import heroImg from "../../assets/hero.png";
import netlify from "../../assets/image 15.png";
import desnip from "../../assets/image 16.png";
import prime from "../../assets/image 17.png";
import hbo from "../../assets/image 20.png";
import desnip2 from "../../assets/image 19.png";






const Hero = () => {
    return (
        <section
            className="relative -mt-[110px] min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${heroImg})`,
            }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 " />

            {/* Extra Bottom Gradient */}
            <div className="absolute inset-x-0 bottom-0 h-40  to-transparent" />

            {/* Content */}
            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8 mt-40">
                <div className="grid w-full gap-10 lg:grid-cols-2">
                    {/* Left Content */}
                    <div>
                        <div className="mb-6 inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-medium text-black">
                            ⭐ Trusted Reseller Platform
                        </div>

                        <h1 className="max-w-xl text-5xl font-bold leading-tight text-white md:text-6xl">
                            Power Your
                            <br />
                            Streaming Business
                        </h1>

                        <button className="relative overflow-hidden rounded-full bg-red-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:bg-red-700 active:scale-95">
                            <span className="relative z-10">Get Started</span>
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out hover:translate-x-full" />
                        </button>
                    </div>

                    {/* Right Content */}
                    <div className="flex items-center justify-center lg:justify-end">
                        <p className="max-w-sm text-lg leading-relaxed text-white/90">
                            Flexible reseller packages and simple tools to help you manage
                            and grow your streaming business.
                        </p>
                    </div>
                </div>
            </div>

            {/* Brand Logos */}
            <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-black/70 backdrop-blur-md">
                <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-12 px-4 py-8 text-white">
                    <img src={prime} alt="" />
                    <img src={hbo} alt="" />
                    <img src={desnip} alt="" />
                    <img src={netlify} alt="" />
                    <img src={desnip2} alt="" />
                    <img src={hbo} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Hero;