"use server";
import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import QuoteFormEmail from "../email/QuoteFormEmail"; // Adjust the path as needed

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendQuoteEmail = async (quoteData: FormData) => {
    // Extract and ensure the data is a string
    const getString = (key: string): string => {
        const value = quoteData.get(key);
        return value ? value.toString() : "";
    };

    const firstName = getString("firstName");
    const lastName = getString("lastName");
    const companyName = getString("companyName");
    const email = getString("email");
    const phoneNumber = getString("phoneNumber");

    // Handle JSON parsing with error handling
    let selectedTests: string[] = [];
    try {
        const selectedTestsString = getString("selectedTests");
        if (selectedTestsString) {
            selectedTests = JSON.parse(selectedTestsString);
        }
    } catch (error) {
        console.error("Error parsing selectedTests:", error);
        // Handle or log the error as needed
    }

    const IPCount = getString("IPCount");
    const numEmployees = getString("numEmployees");
    const numLocations = getString("numLocations");
    const numApplications = getString("numApplications");
    const message = getString("message");

    // Simple server-side validation
    if (
        (firstName && !validateString(firstName, 100)) ||
        (lastName && !validateString(lastName, 100))
    ) {
        return { error: "Invalid name" };
    }
    if (email && !validateString(email, 500)) {
        return { error: "Invalid email" };
    }
    if (phoneNumber && !validateString(phoneNumber, 100)) {
        return { error: "Invalid phone number" };
    }
    if (companyName && !validateString(companyName, 100)) {
        return { error: "Invalid company name" };
    }
    if (IPCount && !validateString(IPCount, 100)) {
        return { error: "Invalid IP count" };
    }
    if (numEmployees && !validateString(numEmployees, 10000)) {
        return { error: "Invalid employee count" };
    }
    if (numLocations && !validateString(numLocations, 1000)) {
        return { error: "Invalid location count" };
    }
    if (numApplications && !validateString(numApplications, 10000)) {
        return { error: "Invalid application count" };
    }
    if (message && !validateString(message, 5000)) {
        return { error: "Invalid message" };
    }

    let data;
    try {
        data = await resend.emails.send({
            from: "Quote Request <onboarding@resend.dev>",
            to: "hannulawellsinfo@gmail.com",
            subject: "New Quote Request",
            reply_to: email,
            react: React.createElement(QuoteFormEmail, {
                firstName,
                lastName,
                companyName,
                email,
                phoneNumber,
                selectedTests, // Pass the selectedTests array
                IPCount,
                numEmployees,
                numLocations,
                numApplications,
                message,
            }),
        });
    } catch (error: unknown) {
        return { error: getErrorMessage(error) };
    }

    return { data };
};
