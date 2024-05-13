import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import Header from "./components/Header";
import { dark } from "@clerk/themes";

const nunito = Nunito({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"] });

export const metadata: Metadata = {
  title: "Bucket List Tracker",
  description: "Supreme's Personal Bucket List Tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark
      }}
    >
      <html lang="en">
        <body className={`${nunito.className}`}>
          <Header />
          <main className="w-full flex justify-center">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
