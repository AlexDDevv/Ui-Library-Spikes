import type { Metadata } from "next";
import Header from "./components/Header";
import "../assets/styles/globals.css";
import "../assets/styles/main.css";

export const metadata: Metadata = {
    title: "UI Library",
    description:
        "Réalisation du challenge UI Library components de la plateforme dev Spikes.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="bg-background">
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <Header />
                {children}
            </body>
        </html>
    );
}
