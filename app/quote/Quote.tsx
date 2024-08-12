"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { sendQuoteEmail } from "../../actions/sendQuoteEmail";
import SubmitBtn from "../contact/submitButton";
import toast from "react-hot-toast";

type Props = {};

const Quote = (props: Props) => {
    const [selectedTests, setSelectedTests] = useState<string[]>([]);

    const [numEmployees, setNumEmployees] = useState<number | "">(0);
    const [numLocations, setNumLocations] = useState<number | "">(0);
    const [numApplications, setNumApplications] = useState<number | "">(0);
    const [IPCount, setIPCount] = useState<number | "">(0);
    const [internalSelected, setInternalSelected] = useState<boolean>(false);
    const [externalSelected, setExternalSelected] = useState<boolean>(false);

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

    return (
        <div className="relative flex items-center justify-center min-h-screen p-4 font-raleway">
            <div className="relative flex flex-col w-full mx-auto lg:p-4 my-20">
                <div className="flex flex-1 justify-center items-center md:p-8 lg:p-4">
                    <form
                        className="w-full flex flex-col items-center text-black font-semibold p-6 md:p-8 lg:p-8 xl:max-w-[65%] lg:w-[70%] rounded-2xl shadow-lg gradient-border"
                        onSubmit={handleSubmit}
                        style={{
                            minHeight: "100vh",
                            background:
                                "linear-gradient(to top right, rgba(3,3,3,0.8), rgba(35,42,52,0.8))",
                        }}
                    >
                        <h1 className="text-white font-semibold text-3xl sm:text-4xl mb-6 text-center">
                            REQUEST A QUOTE
                        </h1>
                        <p className="text-white max-w-[70%] text-center mb-8">
                            Tell us about what you need and we will get back to
                            you with a quote via the email provided.
                        </p>
                        <div className="flex flex-row w-full">
                            <div className="flex flex-col gap-8">
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
                                    className="h-14 px-4 rounded-lg w-full text-xl mb-8"
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
                                                <div className="flex flex-row">
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
                                                        className="text-white font-semibold"
                                                    >
                                                        Page/App/Integration
                                                        Count:
                                                    </label>
                                                    <input
                                                        id="numApplications"
                                                        name="numApplications"
                                                        type="text"
                                                        value={
                                                            numApplications ||
                                                            ""
                                                        }
                                                        onChange={
                                                            handleNumApplicationsChange
                                                        }
                                                        className="ml-2 w-6 text-center rounded-lg"
                                                        placeholder="#"
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
                                                        className="text-white font-semibold"
                                                    >
                                                        Number of Locations:
                                                    </label>
                                                    <input
                                                        id="numLocations"
                                                        name="numLocations"
                                                        type="text"
                                                        value={
                                                            numLocations || ""
                                                        }
                                                        onChange={
                                                            handleNumLocationsChange
                                                        }
                                                        className="ml-2 w-6 text-center rounded-lg"
                                                        placeholder="#"
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
                                                        className="text-white font-semibold"
                                                    >
                                                        Number of People in Org:
                                                    </label>
                                                    <input
                                                        id="numEmployees"
                                                        name="numEmployees"
                                                        type="text"
                                                        value={
                                                            numEmployees || ""
                                                        }
                                                        onChange={
                                                            handleNumEmployeesChange
                                                        }
                                                        className="ml-2 w-6 text-center rounded-lg"
                                                        placeholder="#"
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
                                                    selectedTests.includes(
                                                        "Other"
                                                    )
                                                        ? "opacity-100 max-h-screen"
                                                        : "opacity-0 max-h-0"
                                                } overflow-hidden`}
                                            >
                                                <p className="text-white font-semibold">
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
                        <SubmitBtn />
                    </form>
                    <style jsx>{`
                        .gradient-border {
                            position: relative;
                            border-radius: 1rem;
                            overflow: hidden;
                        }

                        .gradient-border::before {
                            content: "";
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            border-radius: 1rem;
                            padding: 1px;
                            background: linear-gradient(
                                135deg,
                                rgba(144, 144, 144, 1),
                                rgba(255, 255, 255, 0) 10%,
                                rgba(255, 255, 255, 0) 50%,
                                rgba(255, 255, 255, 0) 90%,
                                rgba(144, 144, 144, 1)
                            );
                            -webkit-mask: linear-gradient(#fff 0 0) content-box,
                                linear-gradient(#fff 0 0);
                            -webkit-mask-composite: destination-out;
                            mask-composite: exclude;
                            z-index: 0;
                            pointer-events: none;
                        }

                        .gradient-border > * {
                            position: relative;
                            z-index: 1;
                        }
                    `}</style>
                </div>
            </div>
        </div>
    );
};

export default Quote;
