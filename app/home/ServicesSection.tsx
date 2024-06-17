import React from "react";
import Link from "next/link";

type Props = {};

const ServicesSection = (props: Props) => {
    return (
        <section className="flex flex-col">
            <div className="grid md:grid-cols-2">
                <div
                    className="relative flex-1"
                    style={{
                        backgroundImage: "url('/phone.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
                    <div className="relative z-10 p-12 text-white">
                        <h1 className="my-12 text-6xl font-semibold">
                            Cyber Security Services
                        </h1>
                        <p className="text-2xl mb-12">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin ut sapien lectus. Vivamus at dui
                            pellentesque libero aliquet laoreet. Praesent
                            scelerisque est sit amet est consectetur ultricies
                            dapibus ut enim.
                        </p>
                    </div>
                </div>
                <div
                    className="relative flex-1"
                    style={{
                        backgroundImage: "url('/camera.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
                    <div className="relative z-10 p-12 text-white">
                        <h1 className="my-12 text-6xl font-semibold">
                            Something Else Important
                        </h1>
                        <p className="text-2xl mb-12">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin ut sapien lectus. Vivamus at dui
                            pellentesque libero aliquet laoreet. Praesent
                            scelerisque est sit amet est consectetur ultricies
                            dapibus ut enim.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-white my-12 text-6xl font-semibold">
                    Our Services
                </h1>
                <p className="text-gray-300 text-2xl">
                    We provide a wide range of services to keep you safe.
                </p>
            </div>
            <div className="mx-[5%]">
                <div className="flex flex-row gap-4 mx-24 items-center">
                    <hr className="flex-1 my-12 h-px bg-blue-700" />
                    <span className="text-white text-3xl">Testing</span>
                    <hr className="flex-1 my-12 h-px bg-blue-700" />
                </div>
                <ul className="grid md:grid-cols-4 gap-12 md:mx-[5%] lg:mx-[10%]">
                    {[
                        "Vulnerability Assessments",
                        "Penetration Testing",
                        "Social Engineering",
                        "Web Application Testing",
                    ].map((title, index) => (
                        <li
                            key={index}
                            className="relative flex flex-col justify-center items-center rounded-2xl bg-black bg-opacity-70 gradient-border"
                            style={{
                                width: "100%", // Ensure each li takes 100% width of its container
                                height: "100%", // Ensure each li takes 100% height of its container
                            }}
                        >
                            <button className="flex flex-col p-4 items-center border-[1px] rounded-2xl border-blue-900 bg-blue-950 h-full w-full">
                                <img src={`/testing${index + 1}.svg`} />
                                <h2 className="text-2xl mt-4 text-white bg-none">
                                    {title}
                                </h2>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mx-[5%]">
                <div className="flex flex-row gap-4 mx-24 items-center">
                    <hr className="flex-1 my-12 h-px bg-blue-700" />
                    <span className="text-white text-3xl">
                        Security Counseling
                    </span>
                    <hr className="flex-1 my-12 h-px bg-blue-700" />
                </div>
                <ul className="grid md:grid-cols-4 gap-12 md:mx-[5%] lg:mx-[10%]">
                    {[
                        "Vulnerability Assessments",
                        "Penetration Testing",
                        "Social Engineering",
                        "Web Application Testing",
                    ].map((title, index) => (
                        <li
                            key={index}
                            className="relative flex flex-col justify-center items-center rounded-2xl bg-black bg-opacity-70 gradient-border"
                            style={{
                                width: "100%", // Ensure each li takes 100% width of its container
                                height: "100%", // Ensure each li takes 100% height of its container
                            }}
                        >
                            <button className="flex flex-col p-4 items-center border-[1px] rounded-2xl border-blue-900 bg-blue-950 h-full w-full">
                                <img src={`/testing${index + 5}.svg`} />
                                <h2 className="text-2xl mt-4 text-white bg-none">
                                    {title}
                                </h2>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mx-[5%]">
                <div className="flex flex-row gap-4 mx-24 items-center">
                    <hr className="flex-1 my-12 h-px bg-blue-700" />
                    <span className="text-white text-3xl">
                        Technology Solutions
                    </span>
                    <hr className="flex-1 my-12 h-px bg-blue-700" />
                </div>
                <ul className="grid md:grid-cols-4 gap-12 md:mx-[5%] lg:mx-[10%]">
                    {[
                        "Vulnerability Assessments",
                        "Penetration Testing",
                        "Social Engineering",
                        "Web Application Testing",
                    ].map((title, index) => (
                        <li
                            key={index}
                            className="relative flex flex-col justify-center items-center rounded-2xl bg-black bg-opacity-70 gradient-border"
                            style={{
                                width: "100%", // Ensure each li takes 100% width of its container
                                height: "100%", // Ensure each li takes 100% height of its container
                            }}
                        >
                            <button className="flex flex-col p-4 items-center border-[1px] rounded-2xl border-blue-900 bg-blue-950 h-full w-full">
                                <img src={`/testing${index + 9}.svg`} />
                                <h2 className="text-2xl mt-4 text-white bg-none">
                                    {title}
                                </h2>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <button className="my-20">
                <Link
                    href="/services"
                    className="text-white text-2xl py-4 px-8 border-2 bg-black border-blue-900 rounded-lg hover:bg-blue-200 hover:border-blue-100 transition duration-700"
                >
                    More Info
                </Link>
            </button>
        </section>
    );
};

export default ServicesSection;
