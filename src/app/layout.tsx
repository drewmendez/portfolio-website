import type { Metadata } from "next";
import "./globals.css";
import ToggleContextProvider from "@/context/ToggleState";

export const metadata: Metadata = {
  title: "Andrew Jefferson Mendez",
  description: "Hi, I'm Andrew Jefferson Mendez, a Front-end Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-pt-[80px]" lang="en">
      <body className="font-main">
        <ToggleContextProvider>{children}</ToggleContextProvider>
      </body>
    </html>
  );
}
