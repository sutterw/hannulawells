"use client";
import React from "react";
import Hero from "@/components/hero";

const home = () => {
    return (
        <div className="flex flex-col">
            <Hero />
            <div className="flex flex-row">
                <div
                    className="relative flex-1"
                    style={{
                        backgroundImage: "url('/phone.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
                    <div className="relative z-10 p-10 text-white">
                        <h1 className="my-2">Cyber Security Services</h1>
                        <p>
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
                    <div className="relative z-10 p-10 text-white">
                        <h1 className="my-2">Something Else Important</h1>
                        <p>
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
                <h1 className="text-white">Our Services</h1>
                <p className="text-gray-400">
                    We provide a wide range of services to keep you safe.
                </p>
            </div>
            <div className="flex flex-row gap-4 mx-24 items-center">
                <hr className="flex-1 my-12 h-px bg-blue-700" />
                <span className="text-white">Testing</span>
                <hr className="flex-1 my-12 h-px bg-blue-700" />
            </div>
            <div className="flex flex-row gap-4 mx-24 items-center">
                <hr className="flex-1 my-12 h-px bg-blue-700" />
                <span className="text-white">Security Counseling</span>
                <hr className="flex-1 my-12 h-px bg-blue-700" />
            </div>
            <div className="flex flex-row gap-4 mx-24 items-center">
                <hr className="flex-1 my-12 h-px bg-blue-700" />
                <span className="text-white">Technology Solutions</span>
                <hr className="flex-1 my-12 h-px bg-blue-700" />
            </div>
            <button>
                <a
                    href="/services"
                    className="text-white py-2 px-4 border-4 border-gray-500 rounded-lg hover:bg-gray-500 hover:text-black transition-all"
                >
                    More Info
                </a>
            </button>
        </div>
    );
};

export default home;
