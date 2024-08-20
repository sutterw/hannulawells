"use client";
import React, { useEffect, useRef, useState } from "react";

const HackersNeverStop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLOptionElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing after the element is in view
                }
            },
            { threshold: 0.1 } // Adjust threshold as needed
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    return (
        <section
            ref={sectionRef}
            className="flex justify-center w-full h-auto my-[15%] relative"
        >
            <h1
                className={`absolute z-10 left-[27%] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3.5rem] 2xl:text-[4rem] text-white ${
                    isVisible ? "fade-in" : ""
                }`}
            >
                Hackers. Never. Stop.
            </h1>
            <div
                className={`relative w-[80%] lg:w-[60%] h-auto rounded-[10%] overflow-hidden ${
                    isVisible ? "fade-in" : ""
                }`}
            >
                <video
                    preload="none"
                    autoPlay
                    muted
                    loop
                    className="w-full h-auto"
                >
                    <source src="choppingwood.mp4" type="video/mp4" />
                </video>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
            </div>
            <img
                src="/hackerstats.svg"
                alt="hacker statistics by hannulawells"
                className={`absolute right-[5%] lg:right-[8%] w-[25%] ${
                    isVisible ? "fade-from-right" : ""
                }`}
            />
        </section>
    );
};

export default HackersNeverStop;
