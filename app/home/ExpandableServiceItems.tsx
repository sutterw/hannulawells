import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

interface ServiceItemProps {
    index: number;
    section: string;
    service: {
        img: string;
        title: string;
        description: string;
    };
    expanded: boolean;
    onClick: (section: string, index: number) => void;
}

const ExpandableServiceItem: React.FC<ServiceItemProps> = ({
    index,
    section,
    service,
    expanded,
    onClick,
}) => {
    return (
        <li
            className={`relative flex flex-col justify-center items-center rounded-2xl bg-black bg-opacity-70 gradient-border transition-all duration-500 w-[14rem] h-[14rem] ${
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
                onClick={() => onClick(section, index)}
                initial={{ width: "100%" }}
                animate={{
                    width: expanded ? "100%" : "100%",
                }}
                transition={{ duration: 0.5 }}
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
                    minHeight: "12rem",
                    minWidth: "12rem",
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
                    transition={{ duration: 0.5 }}
                    layout="size"
                >
                    <motion.img
                        src={service.img}
                        alt={service.title}
                        style={{ height: "3rem", width: "3rem" }}
                        layout
                        transition={{ duration: 0.5 }}
                    />
                    <motion.h2
                        style={{
                            fontSize: "1.3rem",
                            lineHeight: "2rem",
                            marginTop: ".5rem",
                            marginBottom: ".5rem",
                            background: "none",
                            color: "white",
                        }}
                        layout
                        transition={{ duration: 0.5 }}
                    >
                        {service.title}
                    </motion.h2>
                </motion.div>
                <AnimatePresence>
                    {expanded && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                textAlign: "start",
                                color: "white",
                                padding: "1rem",
                                width: "100%",
                            }}
                            layout
                        >
                            <motion.hr
                                style={{
                                    backgroundColor: "rgba(46,46,87,1)",
                                    width: "1px",
                                    height: "7rem",
                                    marginRight: "2rem",
                                    borderTop: "none",
                                }}
                                transition={{ duration: 0.5 }}
                                layout
                            />
                            <motion.p
                                className="line-clamp-3 text-[1.25rem] leading-9"
                                layout
                                transition={{ duration: 0.5 }}
                            >
                                {service.description}
                            </motion.p>
                            <motion.button
                                layout
                                transition={{ duration: 0.5 }}
                            >
                                <a
                                    href="#"
                                    className="flex flex-row w-[10rem] ml-6 justify-center relative top-[50px] text-white text-[1.5rem] py-1 px-2 rounded-[4px] bg-[rgba(46,46,87,1)] hover:bg-white hover:text-[rgba(46,46,87,1)]"
                                >
                                    More Info
                                    <FaArrowRightLong className="ml-[5px] mt-2 p-1" />
                                </a>
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </li>
    );
};

export default ExpandableServiceItem;
