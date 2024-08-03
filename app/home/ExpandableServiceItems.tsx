import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ServiceItemProps {
    index: number;
    service: {
        img: string;
        title: string;
        description: string;
    };
    expanded: boolean;
    onClick: (index: number) => void;
}

const ExpandableServiceItem: React.FC<ServiceItemProps> = ({
    index,
    service,
    expanded,
    onClick,
}) => {
    return (
        <li
            className={`relative flex flex-col justify-center items-center rounded-2xl bg-black bg-opacity-70 gradient-border ${
                expanded ? "z-10" : "z-0"
            }`}
            style={expanded ? { position: "absolute", width: "71%" } : {}}
        >
            <motion.button
                onClick={() => onClick(index)}
                initial={{ width: "100%" }}
                animate={{ width: expanded ? "100%" : "100%" }}
                transition={{ duration: 0.5 }}
                layout
                className="flex flex-row p-4 max-h-40 items-center justify-center border-[1px] rounded-2xl bg-[rgba(22,22,41,1)] border-[rgba(46,46,87,1)] h-full w-full"
            >
                <div className="flex flex-col items-center">
                    <img src={service.img} alt={service.title} className="" />
                    <h2 className="text-2xl mt-4 text-white bg-none">
                        {service.title}
                    </h2>
                </div>
                <AnimatePresence>
                    {expanded && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex w-full p-4 text-white items-center"
                        >
                            <hr className="border-t-[5rem] w-[1px]" />
                            <p className="text-md line-clamp-3">
                                {service.description}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </li>
    );
};

export default ExpandableServiceItem;
