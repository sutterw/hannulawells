import React from "react";
import Hero from "./home/HeroSection";
import Services from "./home/ServicesSection";
import PeopleMatter from "./home/PeopleMatter";
import HackersNeverStop from "./home/HackersNeverStop";

export default function Home() {
    return (
        <div className="flex flex-col">
            <Hero />
            <div
                style={{
                    backgroundImage: "url('/gradientbackground.svg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <PeopleMatter />
                <HackersNeverStop />
            </div>
            <Services />
        </div>
    );
}
