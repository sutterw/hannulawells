"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ExpandableServiceItem from "./ExpandableServiceItems";
import {
    testingData,
    securityConsultingData,
    technologySolutionsData,
} from "../../lib/data";

const ServicesSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLOptionElement>(null);
    const [expandedItem, setExpandedItem] = useState<{
        section: string;
        index: number;
    } | null>(null);
    const [isMobile, setIsMobile] = useState(false);

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

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.matchMedia("(max-width: 640px)").matches);
        };

        // Initial check
        handleResize();

        // Add event listener to handle window resizing
        window.addEventListener("resize", handleResize);

        // Cleanup the event listener
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleExpand = (section: string, index: number) => {
        if (isMobile) {
            window.location.href = "/services";
        } else if (
            expandedItem?.section === section &&
            expandedItem?.index === index
        ) {
            setExpandedItem(null);
        } else {
            setExpandedItem({ section, index });
        }
    };

    return (
        <section id="our-services" className="flex flex-col" ref={sectionRef}>
            <div className="flex flex-col items-center mb-12">
                <h1 className="text-white mt-12 mb-4 text-6xl font-semibold">
                    Our Services
                </h1>
                <p className="text-gray-300 text-2xl text-center">
                    We provide a wide range of services to keep you safe.
                </p>
            </div>
            <div className={`mx-[5%] ${isVisible ? "fade-in" : ""}`}>
                <div className="flex flex-row gap-4 mx-24 items-center justify-center">
                    <hr className="hidden sm:block flex-1 my-12 h-px bg-[rgba(22,22,41,1)] border-t-0" />
                    <span className="text-white text-3xl text-center">
                        Testing
                    </span>
                    <hr className="hidden sm:block flex-1 my-12 h-px bg-[rgba(22,22,41,1)] border-t-0" />
                </div>
                <ul className="relative grid grid-cols-2 lg:grid-cols-4 gap-12 md:mx-[5%] lg:mx-[10%] my-12">
                    {testingData.map((service, index) => (
                        <ExpandableServiceItem
                            key={index}
                            index={index}
                            section="testing"
                            service={service}
                            expanded={
                                expandedItem?.section === "testing" &&
                                expandedItem?.index === index
                            }
                            onClick={handleExpand}
                        />
                    ))}
                </ul>
                <div className="flex flex-row gap-4 mx-24 items-center justify-center">
                    <hr className="hidden sm:block flex-1 my-12 h-px bg-[rgba(22,22,41,1)] border-t-0" />
                    <span className="text-white text-3xl text-center">
                        Security Counseling
                    </span>
                    <hr className="hidden sm:block flex-1 my-12 h-px bg-[rgba(22,22,41,1)] border-t-0" />
                </div>
                <ul className="relative grid grid-cols-2 lg:grid-cols-4 gap-12 md:mx-[5%] lg:mx-[10%] my-12">
                    {securityConsultingData.map((service, index) => (
                        <ExpandableServiceItem
                            key={index}
                            index={index}
                            section="security"
                            service={service}
                            expanded={
                                expandedItem?.section === "security" &&
                                expandedItem?.index === index
                            }
                            onClick={handleExpand}
                        />
                    ))}
                </ul>
                <div className="flex flex-row gap-4 mx-24 items-center justify-center">
                    <hr className="hidden sm:block flex-1 my-12 h-px bg-[rgba(22,22,41,1)] border-t-0" />
                    <span className="text-white text-3xl text-center">
                        Technology Solutions
                    </span>
                    <hr className="hidden sm:block flex-1 my-12 h-px bg-[rgba(22,22,41,1)] border-t-0" />
                </div>
                <ul className="relative grid grid-cols-2 lg:grid-cols-4 gap-12 md:mx-[5%] lg:mx-[10%] my-12">
                    {technologySolutionsData.map((service, index) => (
                        <ExpandableServiceItem
                            key={index}
                            index={index}
                            section="technology"
                            service={service}
                            expanded={
                                expandedItem?.section === "technology" &&
                                expandedItem?.index === index
                            }
                            onClick={handleExpand}
                        />
                    ))}
                </ul>
            </div>
            <button className="my-20">
                <Link
                    href="/services"
                    className="text-[#B5B5B5] text-2xl py-4 px-8 border-2 bg-transparent border-[rgb(45,45,45,1)] rounded-lg hover:bg-[#232A34] hover:border-[#29323d] hover:text-white transition duration-700"
                >
                    More Info
                </Link>
            </button>
        </section>
    );
};

export default ServicesSection;
