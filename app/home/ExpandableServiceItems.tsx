import React, { useState } from "react";
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
    const [isHovered, setIsHovered] = useState(false);
    const isMobile = window.matchMedia("(max-width: 640px)").matches;

    return (
        <motion.li
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="service-gradient-bg hover:bg-[#232A34] hover:shadow-[0_0_30px_0_rgba(157,196,255,0.30)] cursor-pointer font-raleway"
            style={
                expanded
                    ? {
                          position: "absolute",
                          width: "100%",
                          height: "12rem",
                          display: "flex",
                          flexDirection: "row",
                          borderColor: "rgba(45,45,45,1)",
                          zIndex: 10,
                          borderRadius: "1rem",
                          borderWidth: "1px",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          boxShadow: "0px 0px 30px 0px rgba(157,196,255,0.30)",
                      }
                    : {
                          borderRadius: "1rem",
                          borderWidth: "1px",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          display: "flex",
                          flexDirection: "row",
                          padding: "1rem",
                          maxHeight: "10rem",
                          height: "100%",
                          width: "100%",
                          minHeight: isMobile ? "9rem" : "12rem",
                          minWidth: isMobile ? "9rem" : "12rem",
                          borderColor: "rgba(45,45,45,1)",
                          backgroundColor: isHovered
                              ? "#232A34"
                              : "service-gradient-bg",
                          boxShadow: isHovered
                              ? "0px 0px 30px 0px rgba(157,196,255,0.30)"
                              : "none",
                      }
            }
            onClick={() => onClick(section, index)}
            initial={{ width: "100%" }}
            animate={{
                width: expanded ? "100%" : "100%",
            }}
            transition={{ duration: 0.5 }}
            layout
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <motion.img
                    layout="position"
                    src={service.img}
                    alt={service.title}
                    style={{ height: "3rem", width: "3rem" }}
                />
                <motion.h2
                    style={{
                        fontSize: isMobile ? "1rem" : "1.3rem",
                        lineHeight: "2rem",
                        marginTop: ".5rem",
                        marginBottom: ".5rem",
                        background: "none",
                        color: "white",
                        width: isMobile ? "9rem" : "12rem",
                    }}
                    layout="position"
                >
                    {service.title}
                </motion.h2>
            </div>
            {expanded && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.5 } }}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        textAlign: "start",
                        color: "white",
                        padding: "1rem",
                        width: "100%",
                    }}
                >
                    <hr
                        style={{
                            backgroundColor: "rgba(45,45,45,1)",
                            width: "1px",
                            height: "7rem",
                            marginRight: "2rem",
                            borderTop: "none",
                        }}
                    />
                    <p className="line-clamp-3 text-[1.25rem] leading-9">
                        {service.description}
                    </p>
                    <button>
                        <a
                            href="#"
                            className="flex flex-row w-[10rem] ml-6 justify-center relative top-[50px] text-white hover:text-[rgba(35,42,52,1)] text-[1.5rem] py-1 px-2 rounded-[4px] bg-[rgba(35,42,52,1)] hover:bg-[rgba(157,196,255,1)]"
                        >
                            More Info
                            <FaArrowRightLong className="ml-[5px] mt-2 p-1" />
                        </a>
                    </button>
                </motion.div>
            )}
        </motion.li>
    );
};

export default ExpandableServiceItem;
