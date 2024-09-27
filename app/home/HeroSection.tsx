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
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="hero-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute mt-[-5%] inset-0 flex flex-col items-center justify-center text-white text-center">
                <motion.h1
                    className="font-raleway text-[3.3rem] font-bold"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 0.80, y: 0 }}
                    transition={{ delay: 0, duration: 1 }}
                >
                    <span className="text-white opacity-65">People</span> first.
                </motion.h1>
                <motion.h1
                    className="font-raleway text-[3.3rem] font-bold text-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 0.80, y: 0 }}
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
                        className="mx-auto mt-8 mb-4"
                        width={150}
                        height={146}
                    />
                    <p className="font-raleway text-4xl font-bold mt-8">
                        Cyber Security Services
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
