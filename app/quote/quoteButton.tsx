import React from "react";
import { useFormStatus } from "react-dom";

export default function QuoteButn() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className="font-raleway group flex items-center justify-center gap-2 h-[3rem] w-[8rem] submit-gradient-border bg-[rgba(35,42,52,0.5)] text-[rgba(255,255,255,0.9)] shadow-[2px_2px_30px_0px_rgba(0,0,0,0.25),_0px_0px_2px_2px_rgba(255,255,255,0.1)] backdrop-blur-[60px] flex-shrink-0 transition-all duration-100 hover:bg-[rgba(22,22,22,0.6)] hover:scale-[1.05]"
            disabled={pending}
        >
            {pending ? (
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            ) : (
                <span className="transition-transform duration-100 transform group-hover:scale-110">
                    Submit
                </span>
            )}
        </button>
    );
}
