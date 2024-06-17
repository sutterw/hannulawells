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
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                <h1 className="text-6xl font-bold">
                    <span className="opacity-70">People</span>
                    {""}first.
                </h1>
                <h1 className="text-6xl font-bold mt-3 opacity-70">
                    Technology second.
                </h1>
                <Image
                    src="/logo.png"
                    alt="HannulaWells logo"
                    className="mx-auto mt-12 mb-8"
                    width={225}
                    height={146}
                />
                <p className="text-4xl font-bold mt-4">
                    Cyber Security Services
                </p>
                <motion.div
                    className="mt-10 flex gap-4"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.1,
                        duration: 0.5,
                    }}
                >
                    <Link
                        href="/contact"
                        className="relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] border-violet-400 px-4 py-2 font-semibold text-violet-400 transition-all duration-500 hover:scale-105 hover:text-neutral-900 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-violet-400 before:transition-transform before:duration-1000 before:content-[''] hover:before:translate-x-0 hover:before:translate-y-0 active:scale-95"
                    >
                        <span>Contact Us</span>
                    </Link>
                    <Link
                        href="/quote"
                        className="relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] border-violet-400 px-4 py-2 font-semibold text-violet-400 transition-all duration-500 hover:scale-105 hover:text-neutral-900 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-violet-400 before:transition-transform before:duration-1000 before:content-[''] hover:before:translate-x-0 hover:before:translate-y-0 active:scale-95"
                    >
                        <span>Learn More</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
