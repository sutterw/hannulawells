"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const HeroSection = (props: Props) => {
    return (
        <section className="relative w-full h-screen bg-cover">
            <video
                preload="none"
                autoPlay
                muted
                loop
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="hero-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute mt-[8%] inset-0 flex flex-col items-center justify-center text-white text-center">
                <motion.h1
                    className="font-raleway text-[3.3rem] font-bold"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0, duration: 1 }}
                >
                    <span className="text-white opacity-65">People</span> first.
                </motion.h1>
                <motion.h1
                    className="font-raleway text-[3.3rem] font-bold mt-3 text-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 0.65, y: 0 }}
                    transition={{ delay: 2, duration: 1 }}
                >
                    Technology second.
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4, duration: 1 }}
                >
                    <Image
                        src="/logo.png"
                        alt="HannulaWells logo"
                        className="mx-auto mt-12 mb-4"
                        width={150}
                        height={146}
                    />
                    <p className="font-raleway text-4xl font-bold mt-4">
                        Cyber Security Services
                    </p>
                </motion.div>
                <motion.div
                    className="mt-10 flex gap-4 relative top-[10%]"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 5,
                        duration: 0.5,
                    }}
                >
                    <Link
                        href={"/contact"}
                        className={`font-raleway text-[1.2rem]
                            relative z-0 flex items-center gap-2 overflow-hidden rounded-lg 
                            px-4 py-2 text-white transition-all duration-500
                            before:absolute before:inset-0 before:-z-10 before:translate-x-[0%]
                            before:translate-y-[200%] before:scale-x-[1.1] before:scale-y-[3]
                            before:rounded-[100%] before:bg-white before:transition-transform before:duration-500
                            before:content-[""] 
                            hover:text-neutral-900 hover:before:bg-white
                            hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]
                            hover:before:translate-x-[0%] hover:before:translate-y-[0%]
                        `}
                    >
                        <span>Contact Us</span>
                    </Link>
                    <Link
                        href={"#our-services"}
                        className={`font-raleway text-[1.2rem]
                            relative z-0 flex items-center gap-2 overflow-hidden rounded-lg 
                            px-4 py-2 text-white transition-all duration-500
                            before:absolute before:inset-0 before:-z-10 before:translate-x-[0%]
                            before:translate-y-[200%] before:scale-x-[1.1] before:scale-y-[3]
                            before:rounded-[100%] before:bg-white before:transition-transform before:duration-500
                            before:content-[""] 
                            hover:text-neutral-900 hover:before:bg-white
                            hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]
                            hover:before:translate-x-[0%] hover:before:translate-y-[0%]
                        `}
                    >
                        <span>Learn More</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
