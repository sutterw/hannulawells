"use client";
import React, { useState } from "react";

const About = () => {
    const [zoom, setZoom] = useState(false);

    const handleZoom = () => {
        setZoom(true);
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen text-white overflow-hidden">
            <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-1000 ${
                    zoom ? "scale-[3]" : ""
                }`}
                style={{ backgroundImage: "url('/mountains.png')" }}
            ></div>
            {/* Top Gradient Overlay */}
            <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black to-transparent"></div>
            {/* Bottom Gradient Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black to-transparent"></div>

            <div className="relative z-10 flex flex-col items-center justify-center">
                <h1
                    className={`absolute text-9xl flex justify-center cursor-pointer transition duration-[2000ms] ${
                        zoom ? "opacity-0 scale-[30]" : ""
                    }`}
                    onClick={handleZoom}
                >
                    Why pe
                    <span className="inline-block transform duration-[2000ms] group-hover:scale-[30]">
                        o
                    </span>
                    ple <span className="italic ml-2">first</span>?
                </h1>
                <div
                    className={`flex flex-col gap-8 text-center text-3xl transition-all duration-[2000ms] px-[5rem] shadow-custom ${
                        zoom
                            ? "transform scale-100 opacity-100"
                            : "transform scale-0 opacity-0"
                    }`}
                >
                    <p>
                        “People first” is the core of who we are, what we stand
                        for, and how we believe we can bring the best service to
                        the people. No matter who is it, people always come
                        first. People are the life blood of our organizations,
                        the reason for our successes, and the catalysts for a
                        better future.
                    </p>
                    <p>
                        We believe that when you focus on the people first then
                        there is no way not to focus on integrity, quality,
                        honesty, communication, kindness, and hard work. The
                        core of the focus on the people is the core of human.
                    </p>
                    <p>
                        With our focus on the people first, we have been given
                        the opportunity to help our clients in the ways they
                        want to be helped. As a staple of our business we
                        believe all clients deserve honest pricing and quality
                        engineering. Not just engineers who know how to get the
                        job but engineers who love to help people get the job
                        done.
                    </p>
                    <p>
                        We are your dedicated cyber security team and understand
                        that every security program starts with the people, your
                        people.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
