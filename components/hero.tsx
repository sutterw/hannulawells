import React from "react";

type Props = {};

const Hero = (props: Props) => {
    return (
        <section className="fixed right-0 bottom-0 min-h-[100%] min-w-[100%] w-auto h-auto -z-100 bg-cover">
            <video
                width="320"
                height="240"
                preload="none"
                autoPlay
                muted
                loop
                className="fixed top-[50%] left-[50%] max-w-[none] min-h-[120%] min-w-[100%] w-auto h-auto -z-100 transform -translate-x-1/2 -translate-y-1/2"
            >
                <source src="hero-video.mp4" type="video/mp4" />
            </video>
        </section>
    );
};

export default Hero;
