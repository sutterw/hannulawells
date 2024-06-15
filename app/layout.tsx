import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "HannulaWells",
    description:
        "HannulaWells is a cyber security services provider, servicing enterprise level environments to SMB's. We provide tailored services to simplify security infrastructure and increase security and resiliency in the most cost-effective ways possible. Our customers are our focus and we strive to understand the people behind every challenge we face. We are a close-knit organization with highly-specialized partners and we love what we do.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body className={inter.className}>
                <Nav />
                <main>{children}</main>
                <hr className="flex-1 mt-12 h-px bg-blue-700" />
                <Footer />
            </body>
        </html>
    );
}
