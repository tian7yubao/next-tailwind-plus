import "./globals.css";

import { ReactElement } from "react";
import { Orbitron } from "next/font/google";
import { Nav } from "@/components/ui/nav/nav";

interface RootLayoutProps {
    children: Readonly<ReactElement>;
}

const orbitron = Orbitron({
    subsets: ["latin"]
});

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body className={ orbitron.className }>
                <Nav/>
                <main>
                    { children }
                </main>
            </body>
        </html>
    )
}
