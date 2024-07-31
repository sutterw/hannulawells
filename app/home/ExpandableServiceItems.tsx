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
    expandedWidth: string; // Added expandedWidth prop
    onClick: (index: number) => void;
}

const ExpandableServiceItem: React.FC<ServiceItemProps> = ({
    index,
    service,
    expanded,
    expandedWidth, // Added expandedWidth prop
    onClick,
}) => {
    return (
        <li
            className={`relative flex flex-col justify-center items-center rounded-2xl bg-black bg-opacity-70 gradient-border`}
        >
            <motion.button
                onClick={() => onClick(index)}
                initial={{ width: "100%" }}
                animate={{ width: expanded ? expandedWidth : "100%" }}
                transition={{ duration: 0.5 }}
                className="flex flex-col p-4 items-center border-[1px] rounded-2xl bg-[rgba(22,22,41,1)] border-[rgba(46,46,87,1)] h-full w-full"
            >
                <img src={service.img} alt={service.title} />
                <h2 className="text-2xl mt-4 text-white bg-none">
                    {service.title}
                </h2>
                <AnimatePresence>
                    {expanded && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="w-full p-4 bg-gray-800 text-white rounded-b-2xl"
                        >
                            <p className="text-md">{service.description}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </li>
    );
};

export default ExpandableServiceItem;
