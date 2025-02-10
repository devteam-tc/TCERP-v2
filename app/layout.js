import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Load multiple weights
});

export const metadata = {
  title: "Tech Cloud ERP | Best ERP Software",
  description: "Tech Cloud ERP is a modern cloud-based business management solution.",
  keywords: "ERP, Tech Cloud ERP, Business Management, Cloud ERP",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable}`} style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
