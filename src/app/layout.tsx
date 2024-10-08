import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapClient from "./components/BootstrapClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather app by K.Kerner",
  description: "BW Weather app by Kadi Kerner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {children}
          <BootstrapClient />
        </body>
    </html>
  );
}
