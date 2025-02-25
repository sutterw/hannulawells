"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const FooterSection = (props: Props) => {
  return (
    <section className="relative w-full h-auto bg-cover">
      <div className="absolute mt-[-10%] inset-0 flex flex-col items-center justify-center text-white text-center">
        <motion.div className="mt-10 flex gap-4 relative top-[10%]">
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

export default FooterSection;
