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
            className={`relative flex flex-col justify-center items-center rounded-2xl bg-black bg-opacity-70 gradient-border transition-all duration-500 ease-in-out w-[14rem] h-[14rem] ${
                expanded ? "z-10" : "z-0"
            }`}
            style={
                expanded
                    ? {
                          position: "absolute",
                          width: "100%",
                      }
                    : {}
            }
        >
            <motion.button
                onClick={() => onClick(index)}
                initial={{ width: "100%" }}
                animate={{
                    width: expanded ? "100%" : "100%",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                layout
                style={{
                    borderRadius: "1rem",
                    borderWidth: "1px",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "row",
                    padding: "1rem",
                    maxHeight: "10rem",
                    height: "100%",
                    width: "100%",
                    backgroundColor: "rgba(22,22,41,1)",
                    borderColor: "rgba(46,46,87,1)",
                }}
            >
                <motion.div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                    layout
                >
                    <motion.img
                        src={service.img}
                        alt={service.title}
                        style={{ height: "4rem", width: "4rem" }}
                        layout
                    />
                    <motion.h2
                        style={{
                            fontSize: "1.5rem",
                            lineHeight: "2rem",
                            marginTop: "1rem",
                            background: "none",
                            color: "white",
                        }}
                        layout
                    >
                        {service.title}
                    </motion.h2>
                </motion.div>
                <AnimatePresence>
                    {expanded && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                color: "white",
                                padding: "1rem",
                                width: "100%",
                            }}
                            layout
                        >
                            <motion.hr
                                style={{
                                    backgroundColor: "white",
                                    width: "1px",
                                    height: "7rem",
                                    marginRight: "2rem",
                                }}
                                layout
                            />
                            <motion.p className="line-clamp-3" layout>
                                {service.description}
                            </motion.p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </li>
    );
};

export default ExpandableServiceItem;
