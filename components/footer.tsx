"use client";
import React from "react";

type Props = {};

const footer = (props: Props) => {
    return (
        <div className="flex flex-row p-8 mx-8 justify-between text-white">
            <div className="flex flex-row gap-16 justify-between">
                <p>© 2023 by HannulaWells</p>
                <p>info@hannulawells.com</p>
                <p>(805) 305 - 8773</p>
            </div>
            <div className="ml-12 flex flex-row gap-4">
                <img src="/linkedin.png" alt="LinkedIn" className="h-8 w-8" />
                <img src="/instagram.png" alt="Instagram" className="h-8 w-8" />
            </div>
        </div>
    );
};

export default footer;
