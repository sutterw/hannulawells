import Image from "next/image";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
    return (
        <div className="flex flex-row p-8 mx-8 justify-between text-white">
            <div className="flex flex-row gap-16 justify-between">
                <p>© 2023 by HannulaWells</p>
                <p>info@hannulawells.com</p>
                <p>+1 (805) 305-8773</p>
            </div>
            <div className="ml-12 flex flex-row gap-4">
                <a href="https://www.linkedin.com/company/hannulawells/">
                    <Image
                        src="/linkedin.png"
                        alt="LinkedIn"
                        width={35}
                        height={35}
                    />
                </a>
                <a href="https://www.instagram.com/hannulawells/">
                    <Image
                        src="/instagram.png"
                        alt="Instagram"
                        width={35}
                        height={35}
                    />
                </a>
            </div>
        </div>
    );
};

export default Footer;
