import React from "react";
import {
    testingData,
    securityConsultingData,
    technologySolutionsData,
} from "../../lib/data";

const Services = () => {
    // Scroll to top handler
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="flex flex-col">
            <section
                id="services-hero"
                className="gap-8 lg:gap-12 flex flex-col justify-center min-h-screen p-4"
                style={{
                    backgroundImage: "url('/gradientbackground.svg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <h1 className="text-white text-[3rem] leading-[2.75rem]  sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-8xl font-medium text-center">
                    Professional Services
                </h1>
                <p className="text-[#E3E3E3] opacity-80 text-[1.5rem] leading-7 sm:text-xl md:text-2xl lg:text-3xl px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[20%] text-center">
                    We provide a wide range of cyber security services tailored
                    to meet your organizational needs.
                </p>
                <ul className="text-white flex flex-col flex-wrap items-center md:justify-center gap-6 md:flex-row md:gap-5">
                    <li>
                        <a
                            href="#services-testing"
                            className="rounded-lg px-3 sm:px-4 py-2 text-xl sm:text-2xl lg:text-3xl bg-white bg-opacity-15 hover:text-black hover:bg-white hover:bg-opacity-80 transition duration-700"
                        >
                            Testing
                        </a>
                    </li>
                    <li>
                        <a
                            href="#security-consulting"
                            className="rounded-lg px-3 sm:px-4 py-2 text-xl sm:text-2xl lg:text-3xl bg-white bg-opacity-15 hover:text-black hover:bg-white hover:bg-opacity-80 transition duration-700"
                        >
                            Security Consulting
                        </a>
                    </li>
                    <li>
                        <a
                            href="#technology-solutions"
                            className="rounded-lg px-3 sm:px-4 py-2 text-xl sm:text-2xl lg:text-3xl bg-white bg-opacity-15 hover:text-black hover:bg-white hover:bg-opacity-80 transition duration-700"
                        >
                            Technology Solutions
                        </a>
                    </li>
                </ul>
            </section>
            <section id="services-testing" className="w-full">
                <div
                    className="relative mx-auto text-white w-full"
                    style={{
                        backgroundImage: "url('/doorhandle.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100"></div>
                    <div className="relative z-10 mb-16 px-4">
                        <h1 className="font-raleway text-5xl lg:text-6xl font-semibold mb-12 sm:mb-16 lg:mb-20 text-center sm:text-start pt-8 xl:pt-12 sm:ml-8">
                            Testing
                        </h1>
                        <ul className="flex flex-col items-center gap-4 sm:gap-8">
                            {testingData.map((item, index) => (
                                <li
                                    key={index}
                                    className="relative flex flex-col w-full sm:w-4/5 pb-6 sm:pb-12 gap-4 justify-center items-center rounded-2xl p-4 sm:p-8 bg-black bg-opacity-70 gradient-border"
                                >
                                    <img
                                        src={item.img}
                                        className="bg-none"
                                        alt={item.title}
                                    />
                                    <h2 className="text-xl sm:text-2xl md:text-4xl md:mb-8 font-medium bg-none text-center">
                                        {item.title}
                                    </h2>
                                    <p className="bg-none text-center sm:text-left md:text-[1.25rem] md:leading-[3rem]">
                                        {item.description}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <section id="security-consulting" className="w-full">
                <div
                    className="relative mx-auto text-white w-full"
                    style={{
                        backgroundImage: "url('/carphone.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100"></div>
                    <div className="relative z-10 mb-16 px-4">
                        <h1 className="font-raleway text-5xl lg:text-6xl font-semibold mb-12 sm:mb-16 lg:mb-20 text-center sm:text-end pt-8 xl:pt-12 sm:mr-8">
                            Security Consulting
                        </h1>
                        <ul className="flex flex-col items-center gap-4 sm:gap-8">
                            {securityConsultingData.map((item, index) => (
                                <li
                                    key={index}
                                    className="relative flex flex-col w-full sm:w-4/5 pb-6 sm:pb-12 gap-4 justify-center items-center rounded-2xl p-4 sm:p-8 bg-black bg-opacity-70 gradient-border"
                                >
                                    <img
                                        src={item.img}
                                        className="bg-none"
                                        alt={item.title}
                                    />
                                    <h2 className="text-xl sm:text-2xl md:text-4xl md:mb-8 font-medium bg-none text-center">
                                        {item.title}
                                    </h2>
                                    <p className="bg-none text-center sm:text-left md:text-[1.25rem] md:leading-[3rem]">
                                        {item.description}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <section id="technology-solutions" className="w-full">
                <div
                    className="relative mx-auto text-white w-full"
                    style={{
                        backgroundImage: "url('/drone.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100"></div>
                    <div className="relative z-10 mb-16 px-4">
                        <h1 className="font-raleway text-5xl lg:text-6xl font-semibold mb-12 sm:mb-16 lg:mb-20 text-center sm:text-start pt-8 xl:pt-12 sm:ml-8">
                            Technology Solutions
                        </h1>
                        <ul className="flex flex-col items-center gap-4 sm:gap-8">
                            {technologySolutionsData.map((item, index) => (
                                <li
                                    key={index}
                                    className="relative flex flex-col w-full sm:w-4/5 pb-6 sm:pb-12 gap-4 justify-center items-center rounded-2xl p-4 sm:p-8 bg-black bg-opacity-70 gradient-border"
                                >
                                    <img
                                        src={item.img}
                                        className="bg-none"
                                        alt={item.header}
                                    />
                                    <h2 className="text-xl sm:text-2xl md:text-4xl md:mb-8 font-medium bg-none text-center">
                                        {item.header}
                                    </h2>
                                    <p className="bg-none text-center sm:text-left md:text-[1.25rem] md:leading-[3rem]">
                                        {item.description}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <button
                onClick={scrollToTop}
                className="text-gray-400 mb-24 rounded-full text-lg sm:text-xl md:text-2xl hover:text-white transition duration-700"
            >
                Back to Top ^
            </button>

            <style jsx>{`
                .gradient-border {
                    position: relative;
                    border-radius: 1rem;
                    overflow: hidden;
                }

                .gradient-border::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    border-radius: 1rem;
                    padding: 1px;
                    background: linear-gradient(
                        135deg,
                        rgba(144, 144, 144, 1),
                        rgba(255, 255, 255, 0) 10%,
                        rgba(255, 255, 255, 0) 50%,
                        rgba(255, 255, 255, 0) 90%,
                        rgba(144, 144, 144, 1)
                    );
                    -webkit-mask: linear-gradient(#fff 0 0) content-box,
                        linear-gradient(#fff 0 0);
                    -webkit-mask-composite: destination-out;
                    mask-composite: exclude;
                    z-index: 0;
                    pointer-events: none;
                }

                .gradient-border > * {
                    position: relative;
                    z-index: 1;
                }
            `}</style>
        </div>
    );
};

export default Services;
