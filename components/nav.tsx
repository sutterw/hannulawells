"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const nav = (props: Props) => {
    return (
        <div className="flex z-10 relative justify-between text-white">
            <Link href={"/"}>Home</Link>
            <div className="flex gap-4">
                <Link href={"/services"}>Services</Link>
                <Link href={"/content"}>Content</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/contact"}>Contact Us</Link>
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.1,
                    }}
                >
                    <Link
                        href={"/quote"}
                        className={`
        relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
        border-violet-400 px-4 py-2 font-semibold
        text-violet-400 transition-all duration-500
        
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-violet-400
        before:transition-transform before:duration-1000
        before:content-[""]

        hover:scale-105 hover:text-neutral-900
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95`}
                    >
                        <span>GET A QUOTE</span>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default nav;
