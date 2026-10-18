import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import { ConfigProvider } from "antd";
import theme from "@/theme/themeConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Creative Engineers | Precision Engineering & Sub-Assembly Solutions",
  description:
    "Creative Engineers offers high-quality precision engineering component manufacturing and sub-assembly solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ConfigProvider theme={theme}>
            <div
              style={{
                display: "flex",
                minHeight: "100vh",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "stretch",
              }}
            >
              <Navbar />
              <main style={{ flex: 1 }}>{children}</main>
              <Footer />
            </div>
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

