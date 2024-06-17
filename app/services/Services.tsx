import React from "react";

const Services = () => {
    // Scroll to top handler
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="flex flex-col items-center">
            <section
                id="services-hero"
                className="container flex flex-col justify-center items-center h-[100vh]"
            >
                <h1 className="text-white text-4xl">Professional Services</h1>
                <p className="text-gray-400 text-2xl text-center">
                    We provide a wide range of cyber security services tailored
                    to meet your organizational needs.
                </p>
                <ul className="text-white flex flex-row gap-4">
                    <li>
                        <button className="rounded border bg-gray-600">
                            Testing
                        </button>
                    </li>
                    <li>
                        <button className="rounded border bg-gray-600">
                            Security Consulting
                        </button>
                    </li>
                    <li>
                        <button className="rounded border bg-gray-600">
                            Technology Solutions
                        </button>
                    </li>
                </ul>
            </section>
            <section id="services-testing">
                <div
                    className="relative col-lg-8 mx-auto text-white"
                    style={{
                        backgroundImage: "url('/doorhandle.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100"></div>
                    <div className="relative z-10 p-16">
                        <h1 className="text-6xl font-semibold mt-4 mb-20">
                            Testing
                        </h1>
                        <ul className="grid md:grid-cols-2 gap-8">
                            {[
                                "Vulnerability Assessments",
                                "Penetration Testing",
                                "Social Engineering",
                                "Web Application Testing",
                            ].map((title, index) => (
                                <li
                                    key={index}
                                    className="relative flex flex-col pb-12 gap-4 justify-center text-center items-center rounded-2xl p-8 bg-black bg-opacity-70 gradient-border"
                                >
                                    <img
                                        src={`/testing${index + 1}.svg`}
                                        className="bg-none"
                                    />
                                    <h2 className="text-2xl font-medium bg-none">
                                        {title}
                                    </h2>
                                    <p className="bg-none">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <section id="security-consulting">
                <div
                    className="relative col-lg-8 mx-auto text-white"
                    style={{
                        backgroundImage: "url('/carphone.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100"></div>
                    <div className="relative z-10 p-16">
                        <h1 className="text-6xl font-semibold mt-4 mb-20 text-right">
                            Security Consulting
                        </h1>
                        <ul className="grid md:grid-cols-2 gap-8">
                            {[
                                "Vulnerability Assessments",
                                "Penetration Testing",
                                "Social Engineering",
                                "Web Application Testing",
                            ].map((title, index) => (
                                <li
                                    key={index}
                                    className="relative flex flex-col pb-12 gap-4 justify-center text-center items-center rounded-2xl p-8 bg-black bg-opacity-70 gradient-border"
                                >
                                    <img
                                        src={`/testing${index + 1}.svg`}
                                        className="bg-none"
                                    />
                                    <h2 className="text-2xl font-medium bg-none">
                                        {title}
                                    </h2>
                                    <p className="bg-none">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <section id="technology-solutions">
                <div
                    className="relative col-lg-8 mx-auto text-white"
                    style={{
                        backgroundImage: "url('/drone.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100"></div>
                    <div className="relative z-10 p-16">
                        <h1 className="text-6xl font-semibold mt-4 mb-20">
                            Technology Solutions
                        </h1>
                        <ul className="grid md:grid-cols-2 gap-8">
                            {[
                                "Vulnerability Assessments",
                                "Penetration Testing",
                                "Social Engineering",
                                "Web Application Testing",
                            ].map((title, index) => (
                                <li
                                    key={index}
                                    className="relative flex flex-col pb-12 gap-4 justify-center text-center items-center rounded-2xl p-8 bg-black bg-opacity-70 gradient-border"
                                >
                                    <img
                                        src={`/testing${index + 1}.svg`}
                                        className="bg-none"
                                    />
                                    <h2 className="text-2xl font-medium bg-none">
                                        {title}
                                    </h2>
                                    <p className="bg-none">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <button
                onClick={scrollToTop}
                className="text-gray-400 mb-8 rounded-full text-2xl hover:text-white transition duration-700"
            >
                Back to Top ^
            </button>

            <style jsx>{`
                .gradient-border {
                    position: relative;
                    border-radius: 1rem;
                    overflow: hidden;
                }

                .gradient-border::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    border-radius: 1rem; /* Ensure the border radius matches the parent li */
                    padding: 1px; /* This creates the border effect */
                    background: linear-gradient(
                        135deg,
                        rgba(144, 144, 144, 1),
                        rgba(255, 255, 255, 0) 10%,
                        rgba(255, 255, 255, 0) 50%,
                        rgba(255, 255, 255, 0) 90%,
                        rgba(144, 144, 144, 1)
                    );
                    -webkit-mask: linear-gradient(#fff 0 0) content-box,
                        linear-gradient(#fff 0 0);
                    -webkit-mask-composite: destination-out;
                    mask-composite: exclude;
                    z-index: 0; /* Make sure it appears below the content */
                    pointer-events: none; /* Allow clicks to pass through */
                }

                .gradient-border > * {
                    position: relative;
                    z-index: 1;
                    background: inherit;
                }
            `}</style>
        </div>
    );
};

export default Services;
