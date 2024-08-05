import React from "react";

const HackersNeverStop = () => {
    return (
        <section className="flex justify-center w-full h-auto my-[15%] relative">
            <h1 className="absolute z-10 left-[27%] lg:text-[3rem] xl:text-[4rem] text-white">
                Hackers. Never. Stop.
            </h1>
            <div className="relative w-[65%] h-auto rounded-[10%] overflow-hidden">
                <video
                    preload="none"
                    autoPlay
                    muted
                    loop
                    className="w-full h-auto"
                >
                    <source src="choppingwood.mp4" type="video/mp4" />
                </video>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
            </div>
            <img
                src="/hackerstats.svg"
                alt="hacker statistics by hannulawells"
                className="absolute right-[5%] w-[25%]"
            />
        </section>
    );
};

export default HackersNeverStop;
