import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "HannulaWells",
    description:
        "HannulaWells is a cyber security services provider, servicing enterprise level environments to SMB's. We provide tailored services to simplify security infrastructure and increase security and resiliency in the most cost-effective ways possible. Our customers are our focus and we strive to understand the people behind every challenge we face. We are a close-nit organization with highly-specialized partners and we love what we do.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
