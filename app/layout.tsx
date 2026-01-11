import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alexis' Portfolio",
  description: "Software Engineer & Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black min-h-screen text-white antialiased`}>
        
        <div className="fixed inset-0 z-0 pointer-events-none">
          <ShootingStars />
          <StarsBackground />
        </div>
        <main className="relative z-10">
          {children}
        </main>
        
      </body>
    </html>
  );
}