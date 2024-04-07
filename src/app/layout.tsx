import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creative Engineering",
};

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body style={{ padding: 0, margin: 0 }}>
        <StyledComponentsRegistry>
            <Navbar />
            {children}
            <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
