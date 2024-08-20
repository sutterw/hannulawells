import React from "react";
import { useFormStatus } from "react-dom";

interface SubmitBtnProps {
    isSubmitted: boolean;
}

export default function SubmitBtn({ isSubmitted }: SubmitBtnProps) {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className="cursor-pointer font-bold text-lg font-raleway group flex items-center justify-center gap-2 h-[3rem] w-[10rem] bg-[#969592] hover:bg-[#7C99C4] text-white border-[1px] border-[#747371] rounded-[8px] shadow-[5px_5px_5px_0_rgba(0,0,0,0.30)] transition-all focus:scale-110 hover:scale-110 hover:border-[#5F7697] active:scale-105 disabled:scale-100 disabled:bg-opacity-65"
            disabled={pending || isSubmitted}
        >
            {pending ? (
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            ) : (
                <>{isSubmitted ? "Sent" : "Send Message"} </>
            )}
        </button>
    );
}
