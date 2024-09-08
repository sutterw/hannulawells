"use client";
import React from "react";
import Quote from "./Quote";

const Page = () => {
    const handleClose = () => {
        console.log("Close button clicked");
        // Handle the close action
    };

    return (
        <div>
            <Quote close={handleClose} />
        </div>
    );
};

export default Page;
