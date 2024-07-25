import React from "react";

type Props = {};

const Contact = (props: Props) => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen text-white">
            <div
                className="absolute inset-0 bg-cover"
                style={{ backgroundImage: "url('/working.png')" }}
            >
                <div className="absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-black to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-black to-transparent"></div>
            </div>
            <div className="relative">
                <img
                    src="/phoneus.svg"
                    alt="contact phone number"
                    className="transition transform hover:scale-110 hover:font-bold"
                />
                <img
                    src="/emailus.svg"
                    alt="contact email address"
                    className="transition transform hover:scale-110"
                />
            </div>
        </div>
    );
};

export default Contact;
