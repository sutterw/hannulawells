import React from "react";
import Hero from "./home/HeroSection";
import Services from "./home/ServicesSection";
import RootLayout from "./layout";

export default function Home() {
    return (
        <RootLayout>
            <div className="flex flex-col">
                <Hero />
                <Services />
            </div>
        </RootLayout>
    );
}
