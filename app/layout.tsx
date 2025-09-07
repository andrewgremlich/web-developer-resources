import type { Metadata } from "next";

import "summit-kit/styles";
import "./globals.css";

import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Web Developer Resources",
  description: "A collection of resources for web developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
