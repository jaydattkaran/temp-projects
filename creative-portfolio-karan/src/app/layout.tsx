import type { Metadata } from "next";
import {Urbanist} from "next/font/google";
import "./globals.css";
import exp from "constants";

const urbanist = Urbanist({ subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-900 text-slate-100"> 
      <body
        className={`${urbanist.className} ${urbanist.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
function localFont(arg0: { src: string; variable: string; weight: string; }) {
  throw new Error("Function not implemented.");
}

