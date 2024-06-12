"use client";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
    return (
        <section className="fixed right-0 bottom-0 min-h-[100%] min-w-[100%] w-auto h-auto bg-cover">
            <video
                width="320"
                height="240"
                preload="none"
                autoPlay
                muted
                loop
                className="fixed top-[50%] left-[50%] max-w-[none] min-h-[120%] min-w-[100%] w-auto h-auto transform -translate-x-1/2 -translate-y-1/2"
            >
                <source src="hero-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <h1 className="text-4xl font-bold">People first.</h1>
                <h1 className="text-4xl font-bold mt-4">Technology second.</h1>
                <img
                    src="logo.png"
                    alt="HannulaWells logo"
                    className="mx-auto mt-4"
                />
                <p className="text-2xl mt-4">Cyber Security Services</p>
            </div>
        </section>
    );
};

export default Hero;
