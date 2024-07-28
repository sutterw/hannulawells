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

type ContactFormEmailProps = {
    name: string;
    subject: string;
    message: string;
    senderEmail: string;
};

export default function ContactFormEmail({
    name,
    subject,
    message,
    senderEmail,
}: ContactFormEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>New message from HannulaWells website</Preview>
            <Tailwind>
                <Body className="bg-gray-100 text-black">
                    <Container>
                        <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                            <Heading className="leading-tight">
                                You received the following message from the
                                contact form
                            </Heading>
                            <Text>From: {name}</Text>
                            <Text>Email: {senderEmail}</Text>
                            <Hr />
                            <Text>Subject: {subject}</Text>
                            <Hr />
                            <Text>{message}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
