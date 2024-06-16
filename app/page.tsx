import React from "react";
import Hero from "./home/HeroSection";
import Services from "./home/ServicesSection";

export default function Home() {
    return (
        <div className="flex flex-col">
            <Hero />
            <Services />
        </div>
    );
}
