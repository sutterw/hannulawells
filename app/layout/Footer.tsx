import Image from "next/image";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
    return (
        <div className="flex flex-row p-8 mx-8 justify-between text-white">
            <div className="flex flex-row gap-16 justify-between">
                <p>© 2023 by HannulaWells</p>
                <p>info@hannulawells.com</p>
                <p>(805) 305 - 8773</p>
            </div>
            <div className="ml-12 flex flex-row gap-4">
                <Image
                    src="/linkedin.png"
                    alt="LinkedIn"
                    width={500}
                    height={500}
                />
                <Image
                    src="/instagram.png"
                    alt="Instagram"
                    width={500}
                    height={500}
                />
            </div>
        </div>
    );
};

export default Footer;
