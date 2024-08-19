import React from "react";
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

// Define types for the props
type QuoteFormEmailProps = {
    firstName: string;
    lastName: string;
    companyName: string;
    email: string;
    phoneNumber: string;
    selectedTests: string[]; // Update to include selectedTests
    IPCount: string;
    numEmployees: string;
    numLocations: string;
    numApplications: string;
    message: string;
};

export default function QuoteFormEmail({
    firstName,
    lastName,
    companyName,
    email,
    phoneNumber,
    selectedTests, // Receive selectedTests as a prop
    IPCount,
    numEmployees,
    numLocations,
    numApplications,
    message,
}: QuoteFormEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>New quote request from HannulaWells website</Preview>
            <Tailwind>
                <Body className="bg-gray-100 text-black">
                    <Container>
                        <Section className="bg-white border-black my-10 px-10 py-4 rounded-md">
                            <Heading className="leading-tight">
                                You received the following quote request
                            </Heading>
                            <Head className="font-bold">Client Details</Head>
                            <Text>
                                From: {firstName} {lastName}
                            </Text>
                            <Text>Company: {companyName}</Text>
                            <Text>Email: {email}</Text>
                            <Text>Phone Number: {phoneNumber}</Text>
                            <Hr />
                            <Head className="font-bold">Selected Tests</Head>
                            <Text>
                                {selectedTests.length > 0 ? (
                                    <ul>
                                        {selectedTests.map((test, index) => (
                                            <li key={index}>{test}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    "No tests selected"
                                )}
                            </Text>
                            <Hr />
                            <Head className="font-bold">
                                Penetration Testing
                            </Head>
                            {IPCount ? (
                                <Text>IP Count: {IPCount}</Text>
                            ) : (
                                <Text>No IP Count provided</Text>
                            )}
                            <Hr />
                            <Head className="font-bold">
                                Web Application Testing
                            </Head>
                            <Text>
                                Number of Pages/Applications/Integrations:{" "}
                                {numApplications ? (
                                    <Text>
                                        Number of
                                        Applications/Pages/Integrations:{" "}
                                        {numApplications}
                                    </Text>
                                ) : (
                                    <Text>
                                        No amount of
                                        Applications/Pages/Integrations provided
                                    </Text>
                                )}
                            </Text>
                            <Hr />
                            <Head className="font-bold">Wireless Testing</Head>
                            {numLocations ? (
                                <Text>
                                    Number of Locations: {numApplications}
                                </Text>
                            ) : (
                                <Text>No amount of locations provided</Text>
                            )}

                            <Hr />
                            <Head className="font-bold">
                                Security Assessment
                            </Head>
                            {numEmployees ? (
                                <Text>Number of Employees: {numEmployees}</Text>
                            ) : (
                                <Text>No amount of employees provided</Text>
                            )}

                            <Hr />
                            <Head className="font-bold">Other Details</Head>
                            {message ? (
                                <Text>Message: {message}</Text>
                            ) : (
                                <Text>No additional details provided</Text>
                            )}
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
