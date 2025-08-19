import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import ScrollHandler from "../components/ScrollHandler";

const instrumentsans = Instrument_Sans({
    variable: "--instrument-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "MDB",
        template: "%s | MDB",
    },
    description: "Smarter Networks. Faster Innovation.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${instrumentsans.variable}`}>
                <ScrollHandler />
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
