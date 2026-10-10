import type { Metadata } from "next";
import { Schibsted_Grotesk,  Martian_Mono } from "next/font/google";
import "./globals.css";
import SideRays from '@/components/SideRays';
import Navbar from "@/components/Navbar";


const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prime Hairs",
  description: "Human hairs, extension bundles, wigs and hair E - commerce Store",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${schibstedGrotesk.variable} ${martianMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
      <Navbar />
      <div className="absolute z-[-1] min-h-screen inset-0 top-0 ">
        <SideRays
            speed={2.5}
            rayColor1="#EAB308"
            rayColor2="#96c8ff"
            intensity={2}
            spread={2}
            origin="top-right"
            tilt={0}
            saturation={1.5}
            blend={0.75}
            falloff={1.6}
            opacity={1}
        />
      </div>
      <main>
        {children}
      </main>


      </body>
    </html>
  );
}
