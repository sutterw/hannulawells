"use client";
import React, { useEffect, useRef, useState } from "react";

const PeopleMatter = () => {
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
            className={`flex flex-col items-center w-full h-full gap-12 transition-opacity duration-1000 ${
                isVisible ? "fade-in" : ""
            }`}
        >
            <img
                src="/whiteW.svg"
                alt="white hannulawells logo on homepage"
                className={`w-[40%] lg:w-[20%] h-auto mt-32 ${
                    isVisible ? "fade-in-logo" : ""
                }`}
            />
            <h1 className="font-raleway text-center text-[#8E8E8E] text-[2rem] sm:text-[4rem] border-y-2 border-[#1C1C2D] py-4 md:px-24">
                Your <span className="text-white">people</span> matter to us.
            </h1>
            <p className="font-raleway text-center text-[1.2rem] sm:text-[1.75rem] w-[90%] md:w-[60%] leading-10 text-white opacity-85">
                We prioritize people over technology, offering value-driven
                cybersecurity services tailored to meet our clients' unique
                needs. With a client-centric approach, we strive to understand
                your challenges and deliver comprehensive solutions to improve
                your security posture and protect what matters most to you.
            </p>
            <p className="font-raleway text-white text-[1.75rem] border-y-2 border-[#1C1C2D] ">
                HannulaWells
            </p>
        </section>
    );
};

export default PeopleMatter;
