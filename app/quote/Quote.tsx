"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { sendQuoteEmail } from "../../actions/sendQuoteEmail";
import SubmitBtn from "../contact/submitButton";
import toast from "react-hot-toast";
import QuoteButn from "./quoteButton";

type Props = { close: () => void };

const Quote = ({ close }: Props) => {
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [selectedTests, setSelectedTests] = useState<string[]>([]);

    const [numEmployees, setNumEmployees] = useState<number | "">(0);
    const [numLocations, setNumLocations] = useState<number | "">(0);
    const [numApplications, setNumApplications] = useState<number | "">(0);
    const [IPCount, setIPCount] = useState<number | "">(0);
    const [internalSelected, setInternalSelected] = useState<boolean>(false);
    const [externalSelected, setExternalSelected] = useState<boolean>(false);

    const toggleVisibility = () => {
        setIsVisible((prev) => !prev);
    };

    // Type for test selection
    const handleTestSelection = (test: string) => {
        setSelectedTests((prev) => {
            const isSelected = prev.includes(test);
            if (isSelected) {
                return prev.filter((item) => item !== test);
            } else {
                return [...prev, test];
            }
        });
    };

    // Handle the change for the number of employees input
    const handleNumEmployeesChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setNumEmployees(value === "" ? "" : parseInt(value, 10));
    };

    // Handle the change for the number of locations input
    const handleNumLocationsChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setNumLocations(value === "" ? "" : parseInt(value, 10));
    };

    const handleNumApplicationsChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setNumApplications(value === "" ? "" : parseInt(value, 10));
    };

    const handleIPCountChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setIPCount(value === "" ? "" : parseInt(value, 10));
    };

    const handleInternalSelection = () => {
        setInternalSelected(!internalSelected);
    };

    const handleExternalSelection = () => {
        setExternalSelected(!externalSelected);
    };

    // Type for form submission
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const quoteData = new FormData(event.currentTarget);

        // Collect additional data from state
        quoteData.append("selectedTests", JSON.stringify(selectedTests));
        quoteData.append("numEmployees", numEmployees.toString());
        quoteData.append("numLocations", numLocations.toString());
        quoteData.append("numApplications", numApplications.toString());
        quoteData.append("IPCount", IPCount.toString());
        quoteData.append("internalSelected", internalSelected.toString());
        quoteData.append("externalSelected", externalSelected.toString());

        const { data, error } = await sendQuoteEmail(quoteData);

        if (error) {
            toast.error(error);
            return;
        }

        toast.success("Quote request sent successfully!");
    };

    const handleClose = () => {
        close(); // Use the close function passed from props
    };

    return (
        isVisible && (
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="hidden lg:flex relative items-center justify-center p-4 font-raleway"
            >
                <form
                    className="w-full flex flex-col items-center text-black font-semibold p-6 md:p-8 lg:p-8 gradient-border bg-gradient-to-br from-[rgba(35,42,52,0.8)] to-[rgba(3,3,3,0.8)] shadow-[2px_2px_30px_0px_rgba(0,0,0,0.25),_0px_0px_2px_2px_rgba(255,255,255,0.1)] backdrop-blur-[60px]"
                    onSubmit={handleSubmit}
                >
                    <button
                        type="button"
                        onClick={handleClose}
                        className="absolute group top-4 right-4 rounded-[50px] text-[rgba(255,255,255,0.9)] x-gradient-border bg-[rgba(35,42,52,0.5)] shadow-[2px_2px_30px_0px_rgba(0,0,0,0.25),_0px_0px_2px_2px_rgba(255,255,255,0.1)] backdrop-blur-[60px] w-20 h-20 flex-shrink-0 transition-all duration-100 hover:bg-[rgba(22,22,22,0.6)]"
                    >
                        <img
                            src="x.svg"
                            alt="Close"
                            className="inline h-[25px] w-[25px] transition-transform duration-100 transform group-hover:scale-110"
                        />
                    </button>

                    <h1 className="text-white font-semibold text-3xl sm:text-4xl mb-6 text-center">
                        REQUEST A QUOTE
                    </h1>
                    <p className="text-white max-w-[70%] text-center mb-8">
                        Tell us about what you need and we will get back to you
                        with a quote via the email provided.
                    </p>
                    <div className="flex flex-row w-full">
                        <div className="flex flex-col gap-4">
                            <input
                                aria-label="First Name"
                                className="h-14 px-4 rounded-lg w-full text-xl"
                                name="firstName"
                                type="text"
                                required
                                placeholder="First Name"
                            />
                            <input
                                aria-label="Last Name"
                                className="h-14 px-4 rounded-lg w-full text-xl"
                                name="lastName"
                                type="text"
                                required
                                placeholder="Last Name"
                            />
                            <input
                                aria-label="Company Name"
                                className="h-14 px-4 rounded-lg w-full text-xl"
                                name="companyName"
                                type="text"
                                required
                                placeholder="Company Name"
                            />
                            <input
                                aria-label="Email"
                                className="h-14 px-4 rounded-lg w-full text-xl"
                                name="email"
                                type="email"
                                required
                                placeholder="Email"
                            />
                            <input
                                aria-label="Phone Number"
                                className="h-14 px-4 rounded-lg w-full text-xl mb-4"
                                name="phoneNumber"
                                type="tel"
                                required
                                placeholder="Phone Number"
                            />
                        </div>
                        <div className="flex flex-col">
                            <div className="w-full mb-4 ml-8">
                                <h2 className="text-white text-xl mb-2 font-medium">
                                    Testing Selection:
                                </h2>
                                <div className="flex flex-col items-start gap-3">
                                    <div className="flex-row">
                                        <input
                                            type="checkbox"
                                            id="PenetrationTesting"
                                            className="mr-2"
                                            checked={selectedTests.includes(
                                                "Penetration Testing"
                                            )}
                                            onChange={() =>
                                                handleTestSelection(
                                                    "Penetration Testing"
                                                )
                                            }
                                        />
                                        <label
                                            htmlFor="PenetrationTesting"
                                            className="text-white font-semibold text-lg"
                                        >
                                            Penetration Testing
                                        </label>
                                        <div
                                            className={`transition-all duration-500 ease-in-out ${
                                                selectedTests.includes(
                                                    "Penetration Testing"
                                                )
                                                    ? "opacity-100 max-h-screen"
                                                    : "opacity-0 max-h-0"
                                            } overflow-hidden`}
                                        >
                                            <div className="flex flex-row ml-4">
                                                <div className="grid">
                                                    <div className="grid grid-cols-2 gap-2">
                                                        <div>
                                                            <input
                                                                id="internal"
                                                                type="checkbox"
                                                                name="internalSelected"
                                                                value="internal"
                                                                className="peer hidden"
                                                                checked={
                                                                    internalSelected
                                                                }
                                                                onChange={
                                                                    handleInternalSelection
                                                                }
                                                            />
                                                            <label
                                                                htmlFor="internal"
                                                                className={`text-white font-bold block cursor-pointer border-[1px] rounded border-[rgba(255,255,255,0.5)] hover:border-white px-[2px] text-center ${
                                                                    internalSelected
                                                                        ? "bg-[rgba(255,255,255,0.5)]"
                                                                        : "bg-transparent"
                                                                }`}
                                                            >
                                                                Internal
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <input
                                                                id="external"
                                                                type="checkbox"
                                                                name="externalSelected"
                                                                value="external"
                                                                className="peer hidden"
                                                                checked={
                                                                    externalSelected
                                                                }
                                                                onChange={
                                                                    handleExternalSelection
                                                                }
                                                            />
                                                            <label
                                                                htmlFor="external"
                                                                className={`text-white font-bold block cursor-pointer border-[1px] rounded border-[rgba(255,255,255,0.5)] hover:border-white px-[2px] text-center ${
                                                                    externalSelected
                                                                        ? "bg-[rgba(255,255,255,0.5)]"
                                                                        : "bg-transparent"
                                                                }`}
                                                            >
                                                                External
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <label
                                                    htmlFor="IPCount"
                                                    className="text-white font-semibold ml-4"
                                                >
                                                    IP Count:
                                                </label>
                                                <input
                                                    id="IPCount"
                                                    name="IPCount"
                                                    type="text"
                                                    value={IPCount || ""}
                                                    onChange={
                                                        handleIPCountChange
                                                    }
                                                    className="ml-2 w-6 text-center rounded-lg"
                                                    placeholder="#"
                                                    required={false}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-row">
                                        <input
                                            type="checkbox"
                                            id="WebApplicationTesting"
                                            className="mr-2"
                                            checked={selectedTests.includes(
                                                "Web Application Testing"
                                            )}
                                            onChange={() =>
                                                handleTestSelection(
                                                    "Web Application Testing"
                                                )
                                            }
                                        />
                                        <label
                                            htmlFor="WebApplicationTesting"
                                            className="text-white font-semibold text-lg"
                                        >
                                            Web Application Testing
                                        </label>
                                        <div
                                            className={`transition-all duration-500 ease-in-out ${
                                                selectedTests.includes(
                                                    "Web Application Testing"
                                                )
                                                    ? "opacity-100 max-h-screen"
                                                    : "opacity-0 max-h-0"
                                            } overflow-hidden`}
                                        >
                                            <div className="">
                                                <label
                                                    htmlFor="numApplications"
                                                    className="text-white font-semibold ml-4"
                                                >
                                                    Page/App/Integration Count:
                                                </label>
                                                <input
                                                    id="numApplications"
                                                    name="numApplications"
                                                    type="text"
                                                    value={
                                                        numApplications || ""
                                                    }
                                                    onChange={
                                                        handleNumApplicationsChange
                                                    }
                                                    className="ml-2 w-6 text-center rounded-lg"
                                                    placeholder="#"
                                                    required={false}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-row">
                                        <input
                                            type="checkbox"
                                            id="WirelessTesting"
                                            className="mr-2"
                                            checked={selectedTests.includes(
                                                "Wireless Testing"
                                            )}
                                            onChange={() =>
                                                handleTestSelection(
                                                    "Wireless Testing"
                                                )
                                            }
                                        />
                                        <label
                                            htmlFor="WirelessTesting"
                                            className="text-white font-semibold text-lg"
                                        >
                                            Wireless Testing
                                        </label>
                                        <div
                                            className={`transition-all duration-500 ease-in-out ${
                                                selectedTests.includes(
                                                    "Wireless Testing"
                                                )
                                                    ? "opacity-100 max-h-screen"
                                                    : "opacity-0 max-h-0"
                                            } overflow-hidden`}
                                        >
                                            <div className="">
                                                <label
                                                    htmlFor="numLocations"
                                                    className="text-white font-semibold ml-4"
                                                >
                                                    Number of Locations:
                                                </label>
                                                <input
                                                    id="numLocations"
                                                    name="numLocations"
                                                    type="text"
                                                    value={numLocations || ""}
                                                    onChange={
                                                        handleNumLocationsChange
                                                    }
                                                    className="ml-2 w-6 text-center rounded-lg"
                                                    placeholder="#"
                                                    required={false}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-row">
                                        <input
                                            type="checkbox"
                                            name="SecurityConsulting"
                                            id="SecurityConsulting"
                                            className="mr-2"
                                            checked={selectedTests.includes(
                                                "Security Consulting"
                                            )}
                                            onChange={() =>
                                                handleTestSelection(
                                                    "Security Consulting"
                                                )
                                            }
                                        />
                                        <label
                                            htmlFor="SecurityConsulting"
                                            className="text-white font-semibold text-lg"
                                        >
                                            Security Consulting
                                        </label>
                                    </div>

                                    <div className="flex-row">
                                        <input
                                            type="checkbox"
                                            id="SecurityAssessment"
                                            className="mr-2"
                                            checked={selectedTests.includes(
                                                "Security Assessment"
                                            )}
                                            onChange={() =>
                                                handleTestSelection(
                                                    "Security Assessment"
                                                )
                                            }
                                        />
                                        <label
                                            htmlFor="SecurityAssessment"
                                            className="text-white font-semibold text-lg"
                                        >
                                            Security Assessment
                                        </label>
                                        <div
                                            className={`transition-all duration-500 ease-in-out ${
                                                selectedTests.includes(
                                                    "Security Assessment"
                                                )
                                                    ? "opacity-100 max-h-screen"
                                                    : "opacity-0 max-h-0"
                                            } overflow-hidden`}
                                        >
                                            <div className="">
                                                <label
                                                    htmlFor="numEmployees"
                                                    className="text-white font-semibold ml-4"
                                                >
                                                    Number of People in Org:
                                                </label>
                                                <input
                                                    id="numEmployees"
                                                    name="numEmployees"
                                                    type="text"
                                                    value={numEmployees || ""}
                                                    onChange={
                                                        handleNumEmployeesChange
                                                    }
                                                    className="ml-2 w-6 text-center rounded-lg"
                                                    placeholder="#"
                                                    required={false}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-row">
                                        <input
                                            type="checkbox"
                                            id="Other"
                                            className="mr-2"
                                            checked={selectedTests.includes(
                                                "Other"
                                            )}
                                            onChange={() =>
                                                handleTestSelection("Other")
                                            }
                                        />
                                        <label
                                            htmlFor="Other"
                                            className="text-white font-semibold text-lg"
                                        >
                                            Other
                                        </label>
                                        <div
                                            className={`transition-all duration-500 ease-in-out ${
                                                selectedTests.includes("Other")
                                                    ? "opacity-100 max-h-screen"
                                                    : "opacity-0 max-h-0"
                                            } overflow-hidden`}
                                        >
                                            <p className="text-white font-semibold ml-4">
                                                (Describe in "More Details"
                                                Section)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <textarea
                            aria-label="Message"
                            className="px-4 py-2 rounded-lg mb-4 text-xl w-full"
                            name="message"
                            placeholder="More Details"
                            required
                            maxLength={5000}
                        />
                    </div>
                    <QuoteButn />
                </form>
            </motion.div>
        )
    );
};

export default Quote;
